import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({

  plugins: [vue()],

  define: {

    __SITE_URLS__: {

      doc: 'https://z2586300277.github.io/three-editor/docs/dist/',

      example: 'https://z2586300277.github.io/three-editor/dist/#/example',

      editor: 'https://z2586300277.github.io/three-editor/dist/#/editor',

      github: 'https://z2586300277/three-editor',

      author: 'https://github.com/z2586300277',

      wxPay: 'https://z2586300277.github.io/three-editor/dist/wx_pay.jpg',

    },

  },

  build: {

    target: 'es2015',

    // copyPublicDir: false,

    cssCodeSplit: false,

  },

  base: '/three-editor/dist',

  server: {

    port: 7070,

    open: true,

    host: '0.0.0.0'

  }

})
