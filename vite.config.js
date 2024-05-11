import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({

  plugins: [vue()],

  base: '/three-editor/dist',

  server: {

    port: 7070,

    open: true,

    host: '0.0.0.0'

  }

})
