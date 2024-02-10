class BoundingCircle {
    constructor(x, y, radius) {
        Object.assign(this, { x, y, radius });

    };

    collide(oth) {

        if (oth instanceof BoundingBox) {
            let circleDistanceX = Math.abs(this.x - oth.x - oth.w / 2);
            let circleDistanceY = Math.abs(this.y - oth.y - oth.h / 2);

            if (circleDistanceX > (oth.w / 2 + this.radius) || circleDistanceY > (oth.h / 2 + this.radius)) {
                return false;
            }

            if (circleDistanceX <= (oth.w / 2) || circleDistanceY <= (oth.h / 2)) {
                return true;
            }

            let cornerDistance_sq = (circleDistanceX - oth.w / 2) ** 2 +
                (circleDistanceY - oth.h / 2) ** 2;

            return cornerDistance_sq <= (this.radius ** 2);
        } else if (oth instanceof BoundingCircle) {
            const dx = this.x - oth.x;
            const dy = this.y - oth.y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < this.radius + oth.radius) {
                return true;
            }
        }
    };


}

class BoundingBox {
    constructor(x, y, w, h) {
        Object.assign(this, { x, y, w, h });

    };

    collide(oth) {
        if (oth instanceof BoundingBox) {
            if (this.x < oth.x + oth.w &&
                this.x + this.w > oth.x &&
                this.y < oth.y + oth.h &&
                this.y + this.h > oth.y) {
                return true; // Collision detected
            }

            return false; // No collision

        } else {
            let circleDistanceX = Math.abs(oth.x - this.x - this.w / 2);
            let circleDistanceY = Math.abs(oth.y - this.y - this.h / 2);

            if (circleDistanceX > (this.w / 2 + oth.radius) || circleDistanceY > (this.h / 2 + oth.radius)) {
                return false;
            }

            if (circleDistanceX <= (this.w / 2) || circleDistanceY <= (this.h / 2)) {
                return true;
            }

            let cornerDistance_sq = (circleDistanceX - this.w / 2) ** 2 +
                (circleDistanceY - this.h / 2) ** 2;

            return cornerDistance_sq <= (oth.radius ** 2);
        }

    };
}