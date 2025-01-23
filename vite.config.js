import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({

  plugins: [
    {

      transformIndexHtml: html => {

        if (process.env.NODE_ENV === 'production') {

          html = html.replace(/<head>/, `<head>\n
          <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8697430839896878" crossorigin="anonymous"></script> 
          <script async src="https://www.googletagmanager.com/gtag/js?id=G-LKJQBJNGVF"></script>
          <script>
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-LKJQBJNGVF');
          </script>
          <script>
            var _hmt = _hmt || [];
            (function() {
              var hm = document.createElement("script");
              hm.src = "https://hm.baidu.com/hm.js?85aef82369b0fe002f0e62a775344e89";
              var s = document.getElementsByTagName("script")[0]; 
              s.parentNode.insertBefore(hm, s);
            })();
            </script>
          `)

        }

        return html

      }
    },

    vue()

  ],

  define: {

    __SITE_URLS__: {

      doc: 'https://z2586300277.github.io/three-editor/docs/dist/',

      example: 'https://z2586300277.github.io/three-editor/dist/#/example',

      community: 'https://z2586300277.github.io/three-cesium-examples/#/example',

      editor: 'https://z2586300277.github.io/three-editor/dist/#/editor',

      github: 'https://github.com/z2586300277/three-editor',

      blog: 'https://z2586300277.github.io/blog',

      home: 'https://z2586300277.github.io/',

      author: 'https://github.com/z2586300277',

      wxPay: 'https://z2586300277.github.io/three-editor/dist/wx_pay.jpg',

    },

  },

  build: {

    target: 'es2015',

    chunkSizeWarningLimit: 999999, // 最大打包体积

    // assetsInlineLimit: 0, // 资源内联限制

    // copyPublicDir: false,

    cssCodeSplit: false, // css代码分割

  },

  base: '/three-editor/dist',

  server: {

    port: 7070,

    open: true,

    host: '0.0.0.0'

  }

})
