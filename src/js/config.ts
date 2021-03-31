
import Scene1 from './scene1';
import Scene2 from './scene2';


export var config: Phaser.Types.Core.GameConfig = {
    width: 960,
    height: 640,
    physics: {
        default: 'matter',
        matter: {
            debug: true
        }
    },
    input: {
        gamepad: true
    },
    render: {
        pixelArt: true//,
        // transparent: true
    },
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
        parent: 'game'
    },
    scene: [Scene1, Scene2],
    // this is needed to work with DOM elements
    dom: {
        createContainer: true
    },
    backgroundColor: '#fff326'
}