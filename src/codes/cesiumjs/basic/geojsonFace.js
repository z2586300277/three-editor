
export default

    `import { Cesium, CesiumEditor, loadGaodeLayer, setViewerTheme } from '/three-editor/dist/cesium/index.js'

// 使用封装类简化创建cesium代码
const { viewer } = new CesiumEditor({ DOM: document.getElementById('box'), viewerParams: { baseLayer: false } })

loadGaodeLayer(viewer) // 简化后的的加载高德地图

setViewerTheme(viewer) // 简化后的设置主题

// 加载geojson数据
const dataSource = setGeoPolygon(viewer, '/three-editor/dist/files/font/guangdong.json')

// 看向geojson数据
viewer.flyTo(dataSource)

// 点击变色
viewer.screenSpaceEventHandler.setInputAction((event) => {

    const pickedObject = viewer.scene.pick(event.position)

    if (Cesium.defined(pickedObject) && pickedObject.id) {

        pickedObject.id.polygon.material = Cesium.Color.fromCssColorString('yellow').withAlpha(0.5)

    }

}, Cesium.ScreenSpaceEventType.LEFT_CLICK)

// 创建 面
async function setGeoPolygon(viewer, source, params = {}) {

    const dataSource = await Cesium.GeoJsonDataSource.load(source, {

        stroke: Cesium.Color.fromCssColorString(params.strokeColor || 'red').withAlpha(params.strokeOpacity || 0.5), // 边界

        fill: Cesium.Color.fromCssColorString(params.fillColor || 'blue').withAlpha(params.fillOpacity || 0.5), // 填充

        strokeWidth: params.strokeWidth || 3,

        markerSymbol: '?',

        ...params

    })

    dataSource.changeMaterial = (params) => dataSource.entities.values.forEach(entity => {

        entity.polygon.material = Cesium.Color.fromCssColorString(params.fillColor || 'blue').withAlpha(params.fillOpacity || 0.5)

        entity.polygon.outlineColor = Cesium.Color.fromCssColorString(params.strokeColor || 'red').withAlpha(params.strokeOpacity || 0.5)

        entity.polygon.outlineWidth = params.strokeWidth || 3

    })

    viewer.dataSources.add(dataSource)

    return dataSource

}

`