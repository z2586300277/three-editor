export default

    `import { Cesium, CesiumEditor, loadGaodeLayer, setViewerTheme } from '/three-editor/dist/cesium/index.js'

// 使用封装类简化创建cesium代码
const { viewer } = new CesiumEditor({ DOM: document.getElementById('box'), viewerParams: { baseLayer: false } })

loadGaodeLayer(viewer) // 简化后的的加载高德地图

setViewerTheme(viewer) // 简化后的设置主题

// 创建2dDOM
const DOM = document.createElement('div')

// 样式 
Object.assign(DOM.style, {

    width: '100px',

    height: '30px',
    
    border: '1px solid blue',

    color: 'white',

    fontSize: '20px',

    cursor: 'pointer'

})

DOM.innerHTML = '2dDOM'

setCss2dDom(viewer, DOM, [116.46, 39.92, 0]) // 设置2dDOM 移动

viewer.entities.add({ position: Cesium.Cartesian3.fromDegrees(116.46, 39.92), point: { pixelSize: 10 } }) // 创建测试点

viewer.camera.flyTo({ destination: Cesium.Cartesian3.fromDegrees(116.46, 39.92, 10000000) }) // 定位

/* 设置2dDOM 移动 */
function setCss2dDom(viewer, DOM, position) {

    if (!position) return

    if (!(position instanceof Cesium.Cartesian3))  position = Cesium.Cartesian3.fromDegrees(...position)

    Object.assign(DOM.style, {

        pointerEvents: 'all',

        zIndex: 'auto',

    })

    const { offsetHeight } = DOM

    const { camera, scene } = viewer

    viewer.css2dContainer.appendChild(DOM)

    const destroy = viewer.scene.postRender.addEventListener(() => {

        const windowCoord = Cesium.SceneTransforms.wgs84ToWindowCoordinates(viewer.scene, position)

        if (windowCoord) {

            DOM.style.transform = \`translate(\${windowCoord.x}px, \${windowCoord.y - offsetHeight}px)\`

        }

        const maxDistance = scene.globe.ellipsoid.cartesianToCartographic(camera.position).height + scene.globe.ellipsoid.maximumRadius

        Cesium.Cartesian3.distance(camera.position, position) > maxDistance ? DOM.style.display = 'none' : DOM.style.display = 'block'

    })

    return () => {

        viewer.css2dContainer.removeChild(DOM)

        destroy()

    }

}

`