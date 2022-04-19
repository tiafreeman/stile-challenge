class Sprite {
    constructor({ size }) {
        this.position = {
            x: 0,
            y: 0
        },
            this.hitbox = {
                width: 200,
                height: 100
            },
            this.image = new Image(),
            this.image.src = './fish-small.png',
            this.isSmall = true,
            this.small = {
                width: 100,
                height: 53
            },
            this.large = {
                width: 200,
                height: 107
            }
    }


    draw() {
        this.image.onload = () => {
            if (this.isSmall) {
                c.drawImage(this.image, this.position.x, this.position.y, this.small.width, this.small.height);
            } else {
                c.drawImage(this.image, this.position.x, this.position.y, this.large.width, this.large.height);
            }
        }
        if (this.isSmall) {
            c.drawImage(this.image, this.position.x, this.position.y, this.small.width, this.small.height);
        } else {
            c.drawImage(this.image, this.position.x, this.position.y, this.large.width, this.large.height);
        }
    }

    isInHitBox(x, y) {
        return x >= this.position.x && x <= this.position.x + this.hitbox.width && y >= this.position.y && y <= this.position.y + this.hitbox.height;
    }

    generateRandom() {
        this.position.x = Math.floor(Math.random() * 800) + 100;
        this.position.y = Math.floor(Math.random() * 300) + 50;
        this.isSmall = Math.random() >= 0.2;
    }
}