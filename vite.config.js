import { defineConfig, splitVendorChunkPlugin } from 'vite'
import { resolve } from 'path'
import { viteRequire } from 'vite-require'
import injectHTMLPlugin from 'vite-plugin-inject-html'

export default defineConfig({
    assetsInclude: ['**/*.atlas'],
    build: {
        rollupOptions: {
            input: {
                entry: resolve(__dirname, 'entry.html'),
            },
            treeshake: 'recommended',
        },
        assetsInlineLimit: 0,
    },
    base: './',
    resolve: {
        alias: {
            '@': resolve(__dirname, './src'),
        },
    },
    plugins: [
        viteRequire(),
        splitVendorChunkPlugin(),
        injectHTMLPlugin({
            otherTags: [
                {
                    tag: 'base',
                    attrs: {
                        href: './'
                    },
                    injectTo: 'head-prepend'
                }
            ]
        }),
    ],
    server: {
        host: true,
        port: 9527,
        open: '/entry.html',
    },
    preview: {
        port: 9527,
        open: '/entry.html',
    },
})
