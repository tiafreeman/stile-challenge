class Sprite {
    constructor({ }) {
        this.position = {
            x: 0,
            y: 0
        },
            this.hitbox = {
                width: 50,
                height: 150
            }
    }

    draw() {
        c.fillStyle = 'red';
        c.fillRect(this.position.x, this.position.y, 50, 150);

        c.fillStyle = 'none';
        c.rect(this.position.x, this.position.y, this.width, this.height);
        c.fill();
    }

    isInHitBox(x, y) {
        return x >= this.position.x && x <= this.position.x + this.hitbox.width && y >= this.position.y && y <= this.position.y + this.hitbox.height;
    }

    generateRandom() {
        this.position.x = Math.floor(Math.random() * 800) + 100;
        this.position.y = Math.floor(Math.random() * 300) + 50;
    }
}