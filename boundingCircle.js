class BoundingCircle {
    constructor(x, y, radius) {
        Object.assign(this, {x , y, radius});

        this.x = x;
        this.y = y;
        this.radius = radius; 
    }

    collide(oth) {
        radiusSum = this.radius + oth.radius;
        dx = this.x - oth.x;
        dy = this.y - oth.y;
        dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < radiusSum) {
            return true;
        
        } else {
            return false;
        }
    }
    
    
}