/// <reference types='phaser/types' />
import { Scene } from 'phaser'
import { Pan } from 'phaser3-rex-plugins/plugins/gestures'

export default class HomePage extends Scene {
    constructor() {
        super({
            key: 'home',
            cameras: {
                backgroundColor: '#1685a9',
            },
        })
    }

    create() {
        this.add.spine(400, 1000, 'set1.greengirl', 'animation', true).setScale(.8)
        this.tweens.add({
            targets: this.add.image(375, 1319, 'down'),
            y: '+=40',
            alpha: 0,
            ease: 'Quintic.easeInOut',
            duration: 850,
            repeat: -1,
        })
        const pan = new Pan(this)
        pan.on('panend', () => {
            this.tweens.add({
                targets: this.cameras.main,
                y: 0,
                ease: 'Power1',
                duration: 200,
            })
        })
        pan.on('pan', pan => {
            if (pan.dy < 0) {
                this.cameras.main.y += pan.dy
            }
            if (this.cameras.main.y < -400) {
                this.tweens.add({
                    targets: this.cameras.main,
                    y: -1500,
                    alpha: 0,
                    ease: 'Power1',
                    duration: 550,
                    onStart: () => {
                        pan.off('panend')
                    },
                    onComplete: () => {
                        this.scene.stop()
                    },
                })
            }
        })
    }
}