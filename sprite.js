class Sprite {
    constructor({ isSmall }) {
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
                gameContext.drawImage(this.image, this.position.x, this.position.y, this.small.width, this.small.height);
            } else {
                gameContext.drawImage(this.image, this.position.x, this.position.y, this.large.width, this.large.height);
            }
        }
        if (this.isSmall) {
            gameContext.drawImage(this.image, this.position.x, this.position.y, this.small.width, this.small.height);
        } else {
            gameContext.drawImage(this.image, this.position.x, this.position.y, this.large.width, this.large.height);
        }
    }

    isInHitBox(x, y) {
        //the smaller fish have smaller hit boxes -> they are both harder to find and harded to click
        if (this.isSmall) {
            return x >= this.position.x && x <= this.position.x + this.small.width && y >= this.position.y && y <= this.position.y + this.small.height;
        } else {
            return x >= this.position.x && x <= this.position.x + this.large.width && y >= this.position.y && y <= this.position.y + this.large.height;
        }
    }

    generateRandom() {
        this.position.x = Math.floor(Math.random() * 700) + 100;
        this.position.y = Math.floor(Math.random() * 300) + 50;
        //there is a lower chance of getting bigger fish -> representative of the fact that there is a lower chance of mutation in nature
        this.isSmall = Math.random() >= 0.2;
    }
}