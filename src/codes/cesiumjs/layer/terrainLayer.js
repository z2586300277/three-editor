export default

    `import { Cesium, CesiumEditor } from '/three-editor/dist/cesium/index.js'

// 使用封装类简化创建cesium代码
const { viewer } = new CesiumEditor({ DOM: document.getElementById('box'), viewerParams: { baseLayer: false } })

// arcgis 蓝色地图
const layer = Cesium.ImageryLayer.fromProviderAsync(

    Cesium.ArcGisMapServerImageryProvider.fromUrl('https://map.geoq.cn/arcgis/rest/services/ChinaOnlineStreetPurplishBlue/MapServer')

)

viewer.imageryLayers.add(layer)

// 加载地形
viewer.terrainProvider = await Cesium.CesiumTerrainProvider.fromIonAssetId(3957, {

    requestWaterMask: true,

    requestVertexNormals: true

})

`