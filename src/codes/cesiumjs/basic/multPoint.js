
export default

    `import { Cesium, CesiumEditor } from '/three-editor/dist/cesium/index.js'

const { viewer } = new CesiumEditor({ DOM: document.getElementById('box')}) // 使用封装类简化创建cesium代码

// 设置一个视角
viewer.camera.setView({

    destination: Cesium.Cartesian3.fromRadians(2.100117282185777, 0.6195146302793972, 104244.23864046125),

    orientation: {

        direction: new Cesium.Cartesian3(0.5153454276260272, -0.7794098602398831, 0.3562855034741005),

        up: new Cesium.Cartesian3(-0.1511548595883593, 0.326557215595639, 0.9330126437327882)

    }

})

// 添加点击事件监听器
viewer.screenSpaceEventHandler.setInputAction(function (event) {

    const object = viewer.scene.pick(event.position)

    console.log(object.id)

},Cesium.ScreenSpaceEventType.LEFT_CLICK)

const billboards = new Cesium.BillboardCollection(); //  创建billboard集合对象

viewer.scene.primitives.add(billboards); //  添加billboard集合对象到场景中

const color = () => new Cesium.Color(Math.random(), Math.random(), Math.random(), 1); // 随机颜色

//  生成64800个点，每个经度、纬度值各生成一个点，高度为0（贴地表）
for (var longitude = -180; longitude < 180; longitude++) {

    for (var latitude = -90; latitude < 90; latitude++) {

        billboards.add({

            position: Cesium.Cartesian3.fromDegrees(longitude, latitude),

            image: '/three-editor/dist/site.png', // 图标

            scale: 0.1, // 调整图标的大小

            color: color(), // 随机颜色

            id: 'billboard' + '-' + longitude + '-' + latitude

        })

    }

}
`