
export default class Scene1 extends Phaser.Scene {

    constructor() {
        super('Scene1');
    }

    preload() {
        // this is how we load HTML content
        this.load.html("fontawesome", "assets/html/fontawesome.html");

        this.load.image('ground', require('../assets/images/platform.png'));
    }

    create() {
        // a DOM elements is added pretty much like a sprite
        this.button = this.add.dom(this.scale.width / 2, this.scale.height / 2).createFromCache("fontawesome");

        // click listener
        this.button.addListener("click");
 
        // // on click callback function
        this.button.on("click", (e) => {
            this.scene.launch('Scene2');
        });
 
        this.tweens.add({
            targets: this.button,
            scaleX: 1.5,
            scaleY: 1.5,
            ease: 'Power1',
            duration: 1000,
            yoyo: true,
            repeat: -1
        });

        this.text = this.add.text(this.scale.width / 2, this.scale.height / 2, "Please rotate\nyour phone", {
            align: 'center',
            fontSize: this.scale.width * 0.1
        });
        this.text.x = this.text.x - this.text.width / 2;
        this.text.y = this.text.y - this.text.height / 2;

        this.checkOriention(this.scale.orientation);

        this.scale.on('orientationchange', this.checkOriention, this);
    }

    checkOriention (orientation)
    {
        if (orientation === Phaser.Scale.PORTRAIT)
        {
            if (this.scene.isVisible('Scene2')) {
                this.scene.setVisible(false, 'Scene2');
            }

            this.text.setVisible(true);
            this.button.setVisible(false);
        }
        else if (orientation === Phaser.Scale.LANDSCAPE)
        {
            if (!this.scene.isVisible('Scene2')) {
                this.scene.setVisible(true, 'Scene2');
            }

            this.text.setVisible(false);
            this.button.setVisible(true);
        }
    }

}