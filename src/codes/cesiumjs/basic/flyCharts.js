export default

    `import { Cesium, CesiumEditor, EchartsLayer, loadGaodeLayer, setViewerTheme } from '/three-editor/dist/cesium/index.js'

// 使用封装类简化创建cesium代码
const { viewer } = new CesiumEditor({ DOM: document.getElementById('box'), viewerParams: { baseLayer: false } })

loadGaodeLayer(viewer) // 简化后的的加载高德地图

setViewerTheme(viewer) // 简化后的设置主题

// 看向中国
viewer.camera.flyTo({ destination: Cesium.Cartesian3.fromDegrees(104.07, 30.67, 4000000) })

// 创建echarts 飞线
const echartsLayer = new EchartsLayer(viewer, {

    animation: false,

    GLMap: {},

    series: [
        {
            type: 'lines',
            coordinateSystem: 'GLMap',
            zlevel: 2,
            effect: { show: true, period: 6, trailLength: 0.1, symbol: 'arrow', symbolSize: 5 },
            lineStyle: { normal: { color: '#60ff44', width: 1, opacity: 0.4, curveness: 0.2 } },
            data: [{ fromName: '北京', toName: '无锡', coords: [[116.4551, 40.2539], [120.3442, 31.5527],], }, { fromName: '上海', toName: '无锡', coords: [[121.4648, 31.2891], [120.3442, 31.5527],], }, { fromName: '广州', toName: '无锡', coords: [[113.5107, 23.2196], [120.3442, 31.5527],], }, { fromName: '大连', toName: '无锡', coords: [[122.2229, 39.4409], [120.3442, 31.5527],], }, { fromName: '青岛', toName: '无锡', coords: [[120.4651, 36.3373], [120.3442, 31.5527],], }, { fromName: '石家庄', toName: '无锡', coords: [[114.4995, 38.1006], [120.3442, 31.5527],], }, { fromName: '南昌', toName: '无锡', coords: [[116.0046, 28.6633], [120.3442, 31.5527],], }, { fromName: '合肥', toName: '无锡', coords: [[117.29, 32.0581], [120.3442, 31.5527],], }, { fromName: '呼和浩特', toName: '无锡', coords: [[111.4124, 40.4901], [120.3442, 31.5527],], }, { fromName: '宿州', toName: '无锡', coords: [[117.5535, 33.7775], [120.3442, 31.5527],], }, { fromName: '曲阜', toName: '无锡', coords: [[117.323, 35.8926], [120.3442, 31.5527],], }, { fromName: '杭州', toName: '无锡', coords: [[119.5313, 29.8773], [120.3442, 31.5527],], }, { fromName: '武汉', toName: '无锡', coords: [[114.3896, 30.6628], [120.3442, 31.5527],], }, { fromName: '深圳', toName: '无锡', coords: [[114.5435, 22.5439], [120.3442, 31.5527],], }, { fromName: '珠海', toName: '无锡', coords: [[113.7305, 22.1155], [120.3442, 31.5527],], }, { fromName: '福州', toName: '无锡', coords: [[119.4543, 25.9222], [120.3442, 31.5527],], }, { fromName: '西安', toName: '无锡', coords: [[109.1162, 34.2004], [120.3442, 31.5527],], }, { fromName: '赣州', toName: '无锡', coords: [[116.0046, 25.6633], [120.3442, 31.5527],], },],
        },
        {
            type: 'effectScatter',
            coordinateSystem: 'GLMap',
            zlevel: 2,
            rippleEffect: { brushType: 'stroke' },
            label: { normal: { show: true, position: 'right', formatter: '{b}' } },
            itemStyle: { normal: { color: '#60ff44' } },
            data: [{ name: '北京', value: [116.4551, 40.2539, 100] }, { name: '上海', value: [121.4648, 31.2891, 30] }, { name: '广州', value: [113.5107, 23.2196, 20] }, { name: '大连', value: [122.2229, 39.4409, 10] }, { name: '青岛', value: [120.4651, 36.3373, 20] }, { name: '石家庄', value: [114.4995, 38.1006, 20] }, { name: '南昌', value: [116.0046, 28.6633, 10] }, { name: '合肥', value: [117.29, 32.0581, 30] }, { name: '呼和浩特', value: [111.4124, 40.4901, 10] }, { name: '宿州', value: [117.5535, 33.7775, 10] }, { name: '曲阜', value: [117.323, 35.8926, 10] }, { name: '杭州', value: [119.5313, 29.8773, 10] }, { name: '武汉', value: [114.3896, 30.6628, 10] }, { name: '深圳', value: [114.5435, 22.5439, 10] }, { name: '珠海', value: [113.7305, 22.1155, 10] }, { name: '福州', value: [119.4543, 25.9222, 20] }, { name: '西安', value: [109.1162, 34.2004, 60] }, { name: '赣州', value: [116.0046, 25.6633, 10] },],
        },
    ],

})

// 点击事件
echartsLayer._chart.on('click', params => {

    alert(params.data.name)

})

window.onresize = () => echartsLayer.resize() // 监听窗口变化

`