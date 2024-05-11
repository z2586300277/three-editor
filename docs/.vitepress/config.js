import { defineConfig } from 'vitepress'

export default defineConfig({
  base: '/three-editor/docs/dist',
  outDir: 'dist',
  title: "THREE-EDITOR",
  link: '/',
  description: "基于Three.js的编辑器",
  themeConfig: {
    nav: [
      { text: '指南', link: '/markdown-examples' },
      { text: '体验', link: 'https://z2586300277.github.io/three-editor/dist' }
    ],

    sidebar: [
      {
        text: '开始',
        items: [
          { text: '安装', link: '/markdown-examples' },
          { text: 'Api', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/z2586300277/three-editor' }
    ]
  }
})
