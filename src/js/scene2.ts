
export default class Scene2 extends Phaser.Scene {

    constructor() {
        super('Scene2');
    }

    create() {
        // this.scale.lockOrientation('landscape-primary');
        screen.orientation.lock('landscape-primary')
        .catch((err) => {alert(err)})
        .then(() => {
            this.scale.startFullscreen();

            var platforms = this.physics.add.staticGroup();

            platforms.create(this.scale.width / 2, this.scale.height / 2, 'ground').refreshBody();
        });
    }

}