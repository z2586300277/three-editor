import { defineConfig } from 'vitepress'

export default defineConfig({
  base: '/three-editor/docs/dist',
  outDir: 'dist',
  title: "Three.js 编辑器",
  link: '/',
  head: [
    ['script', { async: true, src: 'https://www.googletagmanager.com/gtag/js?id=G-LKJQBJNGVF' }],
    ['script', {}, `window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', 'G-LKJQBJNGVF');`],
    ['script', {}, `var _hmt = _hmt || [];
    (function() {
      var hm = document.createElement("script");
      hm.src = "https://hm.baidu.com/hm.js?85aef82369b0fe002f0e62a775344e89";
      var s = document.getElementsByTagName("script")[0]; 
      s.parentNode.insertBefore(hm, s);
    })();`]
  ],
  description: "THREE-EDITOR 是使用 npm 库 three-editor-cores基于Three.js, 实现组态化, 高度灵活扩展的低代码, 无代码, 快速开发的三维场景可视化编辑器内核",
  themeConfig: {
    nav: [
      { text: '指南', link: '/createIdea' },
      { text: '开源案例', link: 'https://z2586300277.github.io/three-cesium-examples/#/example' },
      { text: '使用', link: 'https://z2586300277.github.io/three-editor/dist/#/example' },
      { text: '编辑器', link: 'https://z2586300277.github.io/three-editor/dist/#/editor' },
      { text: 'npm', link: 'https://www.npmjs.com/package/three-editor-cores' }
    ],

    sidebar: [
      {
        text: '开始',
        items: [
          { text: '设计理念', link: '/createIdea' },
          { text: '安装', link: '/markdown-examples' },
          { text: 'Api', link: '/api-examples' }
        ]
      }
    ],

    footer: {
        message: '基于 MulanPSL2 许可发布',
        copyright: `版权所有 ©2019-2025 2586300277@qq.com `
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/z2586300277/three-editor' }
    ]
  }
})
