export default

    `import { Cesium, CesiumEditor, loadGaodeLayer, setViewerTheme } from '/three-editor/dist/cesium/index.js'

// 使用封装类简化创建cesium代码
const { viewer } = new CesiumEditor({ DOM: document.getElementById('box'), viewerParams: { baseLayer: false } })

loadGaodeLayer(viewer) // 简化后的的加载高德地图

setViewerTheme(viewer) // 简化后的设置主题

setFaceCollection(viewer)

// 创建大量面和线段
function setFaceCollection(viewer, callback) {

    const lineCollection = {

        instances: [],

        add({ positions, color = '#fff', id = '', width = 1.0, opacity = 1 }) {

            if (!positions) return

            this.instances.push(new Cesium.GeometryInstance({

                geometry: new Cesium.PolylineGeometry({

                    positions: Cesium.Cartesian3.fromDegreesArray(positions),

                    width: width * 3,

                    vertexFormat: Cesium.PolylineColorAppearance.VERTEX_FORMAT

                }),

                attributes: {

                    color: Cesium.ColorGeometryInstanceAttribute.fromColor(Cesium.Color.fromCssColorString(color).withAlpha(opacity))

                },

                id

            }))

        }

    }

    const faceCollection = {

        instances: [],

        add({ positions, color = '#fff', id = '', opacity = 1 }) {

            if (!positions) return

            this.instances.push(new Cesium.GeometryInstance({

                geometry: new Cesium.PolygonGeometry({

                    polygonHierarchy: new Cesium.PolygonHierarchy(Cesium.Cartesian3.fromDegreesArray(positions)),

                    height: 0,

                    vertexFormat: Cesium.PerInstanceColorAppearance.VERTEX_FORMAT

                }),

                attributes: {

                    color: Cesium.ColorGeometryInstanceAttribute.fromColor(Cesium.Color.fromCssColorString(color).withAlpha(opacity))

                },

                id

            }))

        }

    }

    if (callback) callback(faceCollection, lineCollection)

    else for (var i = 0; i < 10000; i++) {

        var longitude = Math.random() * 360 - 180;

        var latitude = Math.random() * 180 - 90;

        var positions = [longitude, latitude, longitude + Math.random(), latitude, longitude, latitude + Math.random()];

        faceCollection.add({ positions, color: i % 2 == 0 ? 'red' : 'green', id: 'face' + i, opacity: 1 })

        lineCollection.add({ positions, color: '#fff', id: 'line' + i, width: 1.0, opacity: 0.5 })

    }

    // 增加面集合到场景中
    viewer.scene.primitives.add(

        new Cesium.Primitive({

            geometryInstances: faceCollection.instances,

            appearance: new Cesium.PerInstanceColorAppearance({

                closed: true

            })

        })

    )

    // 增加线集合到场景中
    viewer.scene.primitives.add(new Cesium.Primitive({

        geometryInstances: lineCollection.instances,

        appearance: new Cesium.PolylineColorAppearance()

    }))

}

`