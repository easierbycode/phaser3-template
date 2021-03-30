
export default class Scene2 extends Phaser.Scene {

    constructor() {
        super('Scene2');
    }

    create() {
        this.events.on('enterfullscreen', () => {
            screen.orientation.lock('landscape')
            .catch((err) => {alert(err)})
            .then(() => {
                var platforms = this.physics.add.staticGroup();

                platforms.create(this.scale.width / 2, this.scale.height / 2, 'ground').refreshBody();
            });
        });
        
        // this.scale.lockOrientation('landscape-primary');
        this.scale.startFullscreen();
    }

}