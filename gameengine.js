// This game shell was happily modified from Googler Seth Ladd's "Bad Aliens" game and his Google IO talk in 2011

class GameEngine {
    constructor(options) {
        // What you will use to draw
        // Documentation: https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D
        this.ctx = null;

        // Everything that will be updated and drawn each frame
        this.entities = [];

        // Information on the input
        this.click = null;
        this.mouse = null;
        this.wheel = null;
        // this.keys = {};
        this.left = false;
        this.right = false;
        this.up = false;
        this.down = false;
        this.A = false;
        // this.B = false;

        this.keyCode = null;

        this.spacebarHeld = false;


        //timer for 
        this.lastSpacebarClick = 0;
        this.spacebarCooldown = 2;

        // Options and the Details
        this.options = options || {
            debugging: false,
        };
    };

    init(ctx) {
        this.ctx = ctx;
        this.startInput();
        this.timer = new Timer();
    };

    start() {
        this.running = true;
        const gameLoop = () => {
            this.loop();
            requestAnimFrame(gameLoop, this.ctx.canvas);
        };
        gameLoop();
    };

    startInput() {
        const getXandY = e => ({
            x: e.clientX - this.ctx.canvas.getBoundingClientRect().left,
            y: e.clientY - this.ctx.canvas.getBoundingClientRect().top
        });

        this.ctx.canvas.addEventListener("mousemove", e => {
            if (this.options.debugging) {
                console.log("MOUSE_MOVE", getXandY(e));
            }
            this.mouse = getXandY(e);
        });

        this.ctx.canvas.addEventListener("click", e => {
            if (this.options.debugging) {
                console.log("CLICK", getXandY(e));
            }

            this.click = getXandY(e);
           // console.log("click y " + getXandY(e).y + "click x " + getXandY(e).x);
        });

        this.ctx.canvas.addEventListener("wheel", e => {
            if (this.options.debugging) {
                console.log("WHEEL", getXandY(e), e.wheelDelta);
            }
            e.preventDefault(); // Prevent Scrolling
            this.wheel = e;
        });

        this.ctx.canvas.addEventListener("contextmenu", e => {
            if (this.options.debugging) {
                console.log("RIGHT_CLICK", getXandY(e));
            }
            e.preventDefault(); // Prevent Context Menu
            this.rightclick = getXandY(e);
        });

        this.ctx.canvas.addEventListener("keydown", e => {
            switch (e.code) {
                case "KeyA":
                case "ArrowLeft":
                    this.left = true;
                    break;
                case "KeyD":
                case "ArrowRight":
                    this.right = true;
                    break;
                case "KeyW":
                case "ArrowUp":
                    this.up = true;
                    break;
                case "KeyS":
                case "ArrowDown":
                    this.down = true;
                    break;
                case "Space":
                    if (!this.A && Date.now() - this.lastSpacebarClick >= this.spacebarCooldown * 600) {
                        this.A = true;
                        this.lastSpacebarClick = Date.now();
                        // Perform any other actions you need here
                    }
                    break;
            }

            this.keyCode = e.code;
        }, false);


        this.ctx.canvas.addEventListener("keyup", e => {
            switch (e.code) {
                case "KeyA":
                case "ArrowLeft":
                    this.left = false;
                    break;
                case "KeyD":
                case "ArrowRight":
                    this.right = false;
                    break;
                case "KeyW":
                case "ArrowUp":
                    this.up = false;
                    break;
                case "KeyS":
                case "ArrowDown":
                    this.down = false;
                    break;
                case "Space":
                    this.A = false;
                    break;
            }
        }, false);
    };

    addEntity(entity) {
        this.entities.push(entity);
    };

    drawPunchCooldown() {
        const currentTime = Date.now();
        const elapsedTime = (currentTime - this.lastSpacebarClick);

        let remainingTime = (this.spacebarCooldown * 600) - elapsedTime;
        remainingTime = Math.max(0, remainingTime); // Ensure remainingTime does not go negative

        // Display the remaining time on the canvas
        this.ctx.font = "12px Arial";
        this.ctx.fillStyle = "white";
        this.ctx.fillText("Punch Cooldown: " + (remainingTime / 1000).toFixed(1), 285, 45); // Display the countdown at (10, 20) coordinates
        if (remainingTime == 0) {
            this.ctx.fillText("PUNCH NOW", 305, 60); // Display the countdown at (10, 20) coordinates
        }

        if (remainingTime <= 0) {
            this.A = false; // Reset the A flag when cooldown is over
        }

    }

    draw() {
        this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
        for (var i = 0; i < this.entities.length; i++) {
            this.entities[i].draw(this.ctx);
        }

        if (!this.micro.dead) {
            this.drawPunchCooldown();

        }

        this.camera.draw(this.ctx);



    };

    update() {
        let entitiesCount = this.entities.length;

        for (let i = 0; i < entitiesCount; i++) {
            let entity = this.entities[i];

            if (!entity.removeFromWorld) {
                entity.update();
            }
        }

        this.camera.update(this.ctx);


        for (let i = this.entities.length - 1; i >= 0; --i) {
            if (this.entities[i].removeFromWorld) {
                this.entities.splice(i, 1);
            }
        }
    };

    loop() {
        this.clockTick = this.timer.tick();
        this.update();
        this.draw();
    };

};

// KV Le was here :)