export default

    ` // npm i supercluster 自行引入 Supercluster 类
import { Cesium, Supercluster, CesiumEditor, loadGaodeLayer, setViewerTheme } from '/three-editor/dist/cesium/index.js' 

// 使用封装类简化创建cesium代码
const { viewer } = new CesiumEditor({ DOM: document.getElementById('box'), viewerParams: { baseLayer: false } })

loadGaodeLayer(viewer) // 简化后的的加载高德地图

setViewerTheme(viewer) // 简化后的设置主题

viewer.camera.setView({ destination: Cesium.Cartesian3.fromDegrees(116.3974, 39.9093, 18000000) }) // 设置视角

const citys = await fetch('/three-editor/dist/files/other/city.json').then(res => res.json()) // 获取城市数据

const points = Object.values(citys).map((val, k) => ({ type: 'Feature', pid: k + '-' + val[0] + '-' + val[1], geometry: { coordinates: val } }))

// 建立聚合
setClusterCollection(viewer, points, (billboards, data) => {

    const [longitude, latitude] = data.geometry.coordinates

    const { pid } = data

    billboards.add({

        position: Cesium.Cartesian3.fromDegrees(longitude, latitude),

        image: '/three-editor/dist/site.png', // 你的图片路径

        scale: 0.05,

        eyeOffset: new Cesium.Cartesian3(0, 0, 150), // 偏移高度

        id: pid

    })

})

/* 聚合方法 */
function setClusterCollection(viewer, points, callback = () => { }, options = {}) {

    // 创建聚合
    const supercluster = new Supercluster({ radius: 40, extent: 512, minZoom: 0, maxZoom: 16, ...options }) // 密集程度 radius, 切片大小 extent, 最小层级 minZoom, 最大层级 maxZoom

    supercluster.load(points)

    // 初始化聚合
    const clusters = supercluster.getClusters([-180, -85, 180, 85], 2)

    // 获取当前视角的边界
    const getBounds = () => {

        const bbox = viewer.camera.computeViewRectangle()

        return [bbox.west, bbox.south, bbox.east, bbox.north].map(i => Cesium.Math.toDegrees(i))  // minx, miny, maxx, maxy westLng, southLat, eastLng, northLat

    }

    // 获取当前视角的层级
    const getLevel = () => {

        var tileRender = viewer.scene.globe._surface._tilesToRender;

        if (tileRender && tileRender.length > 0) {

            return tileRender[0]._level

        }

    }

    // 创建billboard集合对象
    const billboards = viewer.scene.primitives.add(new Cesium.BillboardCollection())

    const setBillboards = arr => arr.forEach((cluster) => {

        let returnCluster = cluster

        // 判断聚合点
        if (cluster?.properties?.cluster) {

            const clusterId = cluster.properties.cluster_id

            const clusterCoordinates = cluster.geometry.coordinates

            const leaves = supercluster.getLeaves(clusterId, Infinity, 0)

            // 初始化最小距离和最接近的点
            let minDistance = Infinity

            let closestPoint = null

            // 遍历所有原始点
            for (const leaf of leaves) {

                // 计算原始点与聚合点的距离
                const leafCoordinates = leaf.geometry.coordinates

                const distance = Cesium.Cartesian3.distance(

                    Cesium.Cartesian3.fromDegrees(...clusterCoordinates),

                    Cesium.Cartesian3.fromDegrees(...leafCoordinates)

                )

                // 如果这个距离小于当前的最小距离，更新最小距离和最接近的点
                if (distance < minDistance) {

                    minDistance = distance

                    closestPoint = leaf

                }

            }

            returnCluster = closestPoint

        }

        callback(billboards, returnCluster)

    })

    setBillboards(clusters)

    // 动态更新聚合
    viewer.camera.changed.addEventListener(function () {

        const level = getLevel()

        if (!level) return

        const clusters = supercluster.getClusters(getBounds(), level);

        billboards.removeAll()

        setBillboards(clusters)

    })

    return supercluster

}

`