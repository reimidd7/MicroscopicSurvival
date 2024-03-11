class AssetManager {
    constructor() {
        this.successCount = 0;
        this.errorCount = 0;
        this.cache = [];
        this.downloadQueue = [];
    };

    queueDownload(path) {               // path is a string, depicting the path of the image. path is to identify the image in asset manager. 
        console.log("Queueing " + path);
        this.downloadQueue.push(path);  // push the path into the queues
    };

    isDone() {
        return this.downloadQueue.length === this.successCount + this.errorCount;
    };

    downloadAll(callback) {
        if (this.downloadQueue.length === 0) setTimeout(callback, 10); //if theres nothing in the queue just call callback, delays 10ms for the html to load.
        for (let i = 0; i < this.downloadQueue.length; i++) {

            //FROM PROFESSOR MARRIOTT'S SUPER MARRIOTT BROS ASSET MANAGER CLASS
            var that = this;

            var path = this.downloadQueue[i];
            console.log(path);
            var ext = path.substring(path.length - 3);

            switch (ext) {
                case 'jpg':
                case 'png':
                    var img = new Image(); //creates the image tag. empty image waiting for somthing to download

                    img.addEventListener("load", () => {
                        console.log("Loaded " + this.src);
                        that.successCount++;
                        if (that.isDone() ) callback();
                    });
        
                    img.addEventListener("error", () => {
                        console.log("Error loading " + this.src);
                        that.errorCount++;
                        if (that.isDone() ) callback();
                    });

                    img.src = path;
                    this.cache[path] = img;
                    break;
                case 'mp3':
                case 'mp4':
                    var aud = new Audio();
                    aud.addEventListener("loadeddata", function () {
                        console.log("Loaded " + this.src);
                        that.successCount++;
                        if (that.isDone() ) callback();
                    });

                    aud.addEventListener("error", function () {
                        console.log("Error loading " + this.src);
                        that.errorCount++;
                        if (that.isDone() ) callback();
                    });

                    aud.addEventListener("ended", function () {
                        aud.pause();
                        aud.currentTime = 0;
                    });

                    aud.src = path;
                    aud.load();

                    this.cache[path] = aud;
                    break;
            }
        }
    };

    getAsset(path) {
        return this.cache[path];
    };

    //FROM PROFESSOR MARRIOTT'S SUPER MARRIOTT BROS ASSET MANAGER CLASS
    playAsset(path) {
        let audio = this.cache[path];
        if (audio.currentTime != 0) {
            let bak = audio.cloneNode();
            bak.currentTime = 0;
            bak.volume = audio.volume;
            bak.play();
        } else {
            audio.currentTime = 0;
            audio.play();
        }
    };

    //FROM PROFESSOR MARRIOTT'S SUPER MARRIOTT BROS ASSET MANAGER CLASS
    pauseBackgroundMusic() {
        for (var key in this.cache) {
            let asset = this.cache[key];
            if (asset instanceof Audio) {
                asset.pause();
                asset.currentTime = 0;
            }
        }
    };

    //FROM PROFESSOR MARRIOTT'S SUPER MARRIOTT BROS ASSET MANAGER CLASS
    adjustVolume(volume) {
        for (var key in this.cache) {
            let asset = this.cache[key];
            if (asset instanceof Audio) {
                asset.volume = volume;
            }
        }
    };

    //FROM PROFESSOR MARRIOTT'S SUPER MARRIOTT BROS ASSET MANAGER CLASS
    muteAudio(mute) {
        for (var key in this.cache) {
            let asset = this.cache[key];
            if (asset instanceof Audio) {
                asset.muted = mute;
            }
        }
    };

    //FROM PROFESSOR MARRIOTT'S SUPER MARRIOTT BROS ASSET MANAGER CLASS
    autoRepeat(path) {
        var aud = this.cache[path];
        aud.addEventListener("ended", function () {
            aud.play();
        });
    };
};

