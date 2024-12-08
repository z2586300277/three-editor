import { defineConfig } from 'vitepress'

export default defineConfig({
  base: '/three-editor/docs/dist',
  outDir: 'dist',
  title: "Three.js 编辑器",
  link: '/',
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

    socialLinks: [
      { icon: 'github', link: 'https://github.com/z2586300277/three-editor' }
    ]
  }
})
