export default
    `
    import { Cesium, CesiumEditor, setCesiumHeatmap } from '/three-editor/dist/cesium/index.js'

    const { viewer } = new CesiumEditor({ DOM: document.getElementById('box')}) // 使用封装类简化创建cesium代码

    // 模拟数值
    const points = new Array(50).fill('').map(() => {

        return {

            x: 116.46 + Math.random() * 10,

            y: 39.92 + Math.random() * 10,

            value: Math.random()

        }
        
    })
    
    // 创建热力图
    new setCesiumHeatmap(viewer, {

        points,

        viewToLayer: true, 

        heatmapDataOptions: { max: 1, min: 0 },

        heatmapOptions: {

            radius: 100,

            maxOpacity: 0.5,

            minOpacity: 0

        }

    })
    
`