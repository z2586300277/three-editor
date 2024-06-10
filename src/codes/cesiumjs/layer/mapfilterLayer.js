export default

    `import { Cesium, CesiumEditor } from '/three-editor/dist/cesium/index.js'

// 使用封装类简化创建cesium代码
const { viewer } = new CesiumEditor({ DOM: document.getElementById('box'), viewerParams: { baseLayer: false } })
 
viewer.imageryLayers.addImageryProvider(

    new Cesium.UrlTemplateImageryProvider({

        url: 'https://webrd02.is.autonavi.com/appmaptile?lang=zh_cn&size=1&scale=2&style=8&x={x}&y={y}&z={z}',

        maximumLevel: 18

    })

)

setViewerTheme(viewer) // 设置主题

function setViewerTheme(viewer, options = {}) {

    const baseLayer = viewer.imageryLayers.get(0)

    if (!baseLayer) return

    baseLayer.brightness = options.brightness ?? 0.6

    baseLayer.contrast = options.contrast ?? 1.8

    baseLayer.gamma = options.gamma ?? 0.3

    baseLayer.hue = options.hue ?? 1

    baseLayer.saturation = options.saturation || 0

    const baseFragShader = (viewer.scene.globe)._surfaceShaderSet.baseFragmentShaderSource.sources

    for (let i = 0; i < baseFragShader.length; i++) {

        const strS = 'color = czm_saturation(color, textureSaturation);\\n#endif\\n'

        let strT = 'color = czm_saturation(color, textureSaturation);\\n#endif\\n'

        if (!options.invertColor) {

            strT += \`
                color.r = 1.0 - color.r;
                color.g = 1.0 - color.g;
                color.b = 1.0 - color.b;
            \`
            
        }

        strT += \`
            color.r = color.r * \${options.filterRGB_R ?? 100}.0/255.0;
            color.g = color.g * \${options.filterRGB_G ?? 138}.0/255.0;
            color.b = color.b * \${options.filterRGB_B ?? 230}.0/255.0;
        \`

        baseFragShader[i] = baseFragShader[i].replace(strS, strT)

    }

    viewer.scene.requestRender();

}

`