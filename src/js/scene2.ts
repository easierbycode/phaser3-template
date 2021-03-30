
import { AlignGrid } from "./utils/align-grid";


export default class Scene2 extends Phaser.Scene {

    constructor() {
        super('Scene2');
    }

    create() {
        this.scale.startFullscreen();

        this.aGrid = new AlignGrid({
            scene: this,
            cols: 11,
            rows: 11
        });

        this.createPlatform();


        this.scale.on('leavefullscreen', () => {
            this.scene.setVisible(false);
        });
        this.scale.on('enterfullscreen', () => {
            this.scene.setVisible(true);
        });
    }

    createPlatform() {
        var platforms = this.physics.add.staticGroup();

        let platform = platforms.create(0, 0, 'ground').refreshBody();

        // resize platform to 2 columns wide
        platform.displayWidth = Math.floor(this.aGrid.cw * 2);
        platform.scaleY = platform.scaleX;

        this.aGrid.placeAtIndex(60, platform);
    }

}