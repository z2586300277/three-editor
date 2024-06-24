export default

    `import { Cesium, CesiumEditor, loadGaodeLayer, setViewerTheme } from '/three-editor/dist/cesium/index.js'

// 使用封装类简化创建cesium代码
const { viewer } = new CesiumEditor({ DOM: document.getElementById('box'), viewerParams: { baseLayer: false } })

loadGaodeLayer(viewer) // 简化后的的加载高德地图

setViewerTheme(viewer) // 简化后的设置主题

// 添加点击事件监听器
viewer.screenSpaceEventHandler.setInputAction(function (event) {

    const object = viewer.scene.pick(event.position)

    const cartesian = viewer.scene.pickPosition(event.position)

    if (Cesium.defined(cartesian)) {

        const cartographic = Cesium.Cartographic.fromCartesian(cartesian)

        const longitude = Cesium.Math.toDegrees(cartographic.longitude)

        const latitude = Cesium.Math.toDegrees(cartographic.latitude)

        const height = cartographic.height

        console.log('经度：', longitude, '纬度：', latitude, '高度：', height)

    }

    if (Cesium.defined(object)) {

        const { id } = object

        alert('点击到的对象：' + id.name + '-----id：'+ id.id)
        
    }

}, Cesium.ScreenSpaceEventType.LEFT_CLICK)

// 视角定位到中国
viewer.camera.flyTo({

    destination: Cesium.Cartesian3.fromDegrees(116.39, 39.9, 10000000)

})

// 测试点
const point = viewer.entities.add({

    name: '测试点',

    id: '点-id',

    position: Cesium.Cartesian3.fromDegrees(116.39, 39.9),

    point: {

        pixelSize: 10,

        color: Cesium.Color.RED,

        outlineColor: Cesium.Color.WHITE,

        outlineWidth: 2

    }

})

// 测试面
const polygon = viewer.entities.add({

    name: '测试多边形',

    id: '多边形-id',

    polygon: {

        hierarchy: Cesium.Cartesian3.fromDegreesArray([

            90.38, 30.91,

            80.38, 30.89,

            100.4, 39.89,

            105.4, 39.91

        ]),

        material: Cesium.Color.RED.withAlpha(0.5)

    }

})

// 测试线
const polyline = viewer.entities.add({

    name: '测试线段',

    id: '线段-id',

    polyline: {

        positions: Cesium.Cartesian3.fromDegreesArray([

            116.41, 36.91,

            100.41, 30.89

        ]),

        width: 20,

        material: new Cesium.PolylineGlowMaterialProperty({

            glowPower: 0.1,

            color: Cesium.Color.YELLOW

        })

    }

})

`