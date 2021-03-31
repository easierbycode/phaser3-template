
import { AlignGrid } from "./utils/align-grid";


export default class Scene2 extends Phaser.Scene {

    aGrid;
    anchor;
    elastic;
    rock;

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
        this.createSlingshots();


        this.scale.on('leavefullscreen', () => {
            this.scene.setVisible(false);
        });
        this.scale.on('enterfullscreen', () => {
            this.scene.setVisible(true);
        });
    }

    update() {
        if (
            this.rock && 
            (
                this.rock.position.x > this.anchor.x+20 || 
                this.rock.position.y < this.anchor.y-20
            )
        ) {
            this.rock = this.matter.add.circle(this.anchor.x, this.anchor.y, 16);
            this.elastic.bodyB = this.rock;
        }
    }

    createSlingshots() {
        this.anchor = {};

        this.aGrid.placeAtIndex(68, this.anchor);

        let {x, y} = this.anchor;

        this.rock = this.matter.add.circle(x, y, 16, {
            density: 0.004
        });

        this.elastic = this.matter.add.worldConstraint(this.rock, 0, .05, {
            pointA: this.anchor
        });

        this.matter.add.mouseSpring();
    }

    createPlatform() {
        let platform = this.matter.add.image(0, 0, 'ground').setStatic(true);

        // resize platform to 2 columns wide
        platform.displayWidth = Math.floor(this.aGrid.cw * 2);
        platform.scaleY = platform.scaleX;

        this.aGrid.placeAtIndex(60, platform);
    }

}