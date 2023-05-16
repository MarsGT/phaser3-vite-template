import { Scene } from 'phaser'

export default class LoadingPage extends Scene {
    constructor() {
        super({
            key: 'loading',
            cameras: {
                backgroundColor: '#a1afc9',
            },
        })
    }

    create() {
        const percent = this.add.text(379, 698, '0%', {
            fontFamily: 'sans-serif',
            fontSize: 48,
            align: 'center',
            color: '#bf242a',
        }).setOrigin(.5)
        this.load.on('progress', function (value) {
            const prog = ~~(value * 100)
            if (prog < 100) {
                percent.setText(prog.toString() + '%')
            } else {
                percent.setText('100%')
            }
        }, this)
        this.load.once('complete', () => {
            this.scene.run('ending')
            this.scene.start('home')
        })

        this.load.svg('down', require('../assets/down.svg'))
        this.load.atlas('ui', require('../assets/nine-slice.png'), require('../assets/nine-slice.json'))
        this.load.spine('set1', '/assets/demos.json', ['/assets/atlas2.atlas'], true)
        this.load.spine('set2', '/assets/demos.json', ['/assets/atlas1.atlas'], true)
        this.load.start()
    }
}