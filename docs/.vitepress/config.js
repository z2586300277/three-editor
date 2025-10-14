import { defineConfig } from 'vitepress'

export default defineConfig({
  base: '/three-editor/docs/dist',
  outDir: 'dist',
  title: "Three.js 编辑器",
  link: '/',
  head: [
    ['script', { async: true, src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8697430839896878', crossorigin: 'anonymous' }],
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
    })();`],
    ['style', {}, `
    .VPNavBarTitle .title::after {
      content: url('https://visitor-badge.laobi.icu/badge?page_id=three_editor&format=true');
      margin-left: 8px;
      vertical-align: middle;
    }`]
  ],
  description: "THREE-EDITOR 是使用 npm 库 three-editor-cores基于Three.js, 实现组态化, 高度灵活扩展的低代码, 无代码, 快速开发的三维场景可视化编辑器内核",
  themeConfig: {
    nav: [
      { text: '新编辑器🍏', link: 'https://z2586300277.github.io/threejs-editor/' },
      { text: '下载⚡', link: 'https://pan.quark.cn/s/4fa387b067fb' },
      { text: '主页🏠', link: 'https://z2586300277.github.io/' },
      { text: '开源案例🍃', link: 'https://z2586300277.github.io/three-cesium-examples/#/example' },
      { text: '编辑器🍁', link: 'https://z2586300277.github.io/three-editor/dist/#/editor' },
      { text: '使用🍀', link: 'https://z2586300277.github.io/three-editor/dist/#/example' },
      { text: 'npm📦', link: 'https://www.npmjs.com/package/three-editor-cores' },
      { text: 'BiBi📺', link: 'https://space.bilibili.com/245165721' },
      { text: 'QQ群🐧', link: 'https://qm.qq.com/q/QdsKkzo2gI' },
      { text: '组织🏢', link: 'https://openthree.github.io/three-cesium-links/' }
    ],

    sidebar: [
      {
        text: '开始',
        items: [
          { text: '源码运行', link: '/codeRun' },
          { text: '设计理念', link: '/createIdea' },
          { text: '安装', link: '/markdown-examples' },
          { text: 'Api', link: '/api-examples' }
        ]
      }
    ],

    footer: {
        message: '基于 MulanPSL2 许可发布',
        copyright: `版权所有 ©2019-${new Date().getFullYear()} 北京优雅幻光科技`
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/z2586300277/three-editor' }
    ]
  }
})
