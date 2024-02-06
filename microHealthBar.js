class HealthBar {
    constructor() {
        this.barWidth = 200; // Change the width 
        this.barHeight = 20; // Change the height
        this.barOffsetY = 5;
        this.barColor = "LimeGreen";
        this.borderColor = "Green";
        this.font = "14px Arial";
        this.textColor = "white";
        this.lowHealthColor = "Red";
    }

    update() {
        
    }

    draw(ctx, x, y, player) {
        const ratio = Math.min(player.healthpoints / player.maxHealth, 1);

        ctx.strokeStyle = this.borderColor;
        ctx.fillStyle = this.barColor;

        const adjustedY = y - this.barHeight - this.barOffsetY;

        const hpLength = Math.max(this.barWidth * ratio, 0);

        ctx.fillRect(x, adjustedY, hpLength, this.barHeight);
        ctx.strokeRect(x, adjustedY, this.barWidth, this.barHeight);

        if (ratio <= 0.99) {
            ctx.fillStyle = this.lowHealthColor;
            ctx.fillRect(x, adjustedY, this.barWidth, this.barHeight);
        }

        ctx.fillStyle = this.barColor;
        ctx.fillRect(x, adjustedY, hpLength, this.barHeight);
        ctx.strokeRect(x, adjustedY, this.barWidth, this.barHeight);

        ctx.font = this.font;
        ctx.fillStyle = this.textColor;
        ctx.textAlign = "center";
        const textX = x + this.barWidth / 2;
        const textY = adjustedY + this.barHeight / 2 + 4; // Adjust the vertical position
        ctx.fillText(player.healthpoints.toString(), textX, textY);

        ctx.restore(); // Restore the saved canvas state
    }
}
