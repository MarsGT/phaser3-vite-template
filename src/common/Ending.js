/// <reference types='phaser/types' />
import { Scene } from 'phaser'
import Button from 'phaser3-rex-plugins/plugins/button'

export default class EndingPage extends Scene {
    constructor() {
        super({
            key: 'ending',
            cameras: {
                backgroundColor: '#2e4e7e',
            },
        })
    }

    init() {
        this.scene.bringToTop('home')
    }

    create() {
        this.add.spine(400, 1000, 'set2.spineboy', 'walk', true).setScale(.8)
        const btn = this.add.nineslice(375, 1100, 'ui', 'button-bg')
        const tapBtn = new Button(btn)
        tapBtn.on('over', () => {
            btn.scale = .9
        })
        tapBtn.on('out', () => {
            btn.scale = 1
        })
    }
}