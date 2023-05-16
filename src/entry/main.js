import { WEBGL, Game, Scale } from 'phaser'

import loadingPage from '@/entry/Loading'
import homePage from '@/entry/Home'
import endingPage from '@/common/Ending'

import 'phaser/plugins/spine4.1/dist/SpineWebGLPlugin.min'

const config = {
    type: WEBGL,
    backgroundColor: 0x7b0046,
    canvasStyle: 'overflow:hidden;',
    banner: false,
    scale: {
        width: 750,
        height: 1500,
        mode: Scale.ENVELOP,
        autoCenter: Scale.CENTER_BOTH,
    },
    audio: {
        noAudio: true
    },
    input: {
        keyboard: false,
        mouse: false,
        activePointers: 1,
    },
    parent: 'wrap',
    dom: {
        createContainer: true,
    },
    loader: {
        crossOrigin: 'anonymous',
        maxParallelDownloads: 5,
    },
    scene: [loadingPage, homePage, endingPage],
    plugins: {
        scene: [
            {
                key: 'SpinePlugin',
                plugin: window['SpinePlugin'],
                mapping: 'spine',
            },
        ],
    }
}

export default new Game(config)
