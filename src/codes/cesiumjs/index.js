import defaultLayer from './layer/defaultLayer'
import gaodeLayer from './layer/gaodeLayer'
import baiduLayer from './layer/baiduLayer'
import tiandituLayer from './layer/tiandituLayer'
import arcgisLayer from './layer/arcgisLayer'
import terrainLayer from './layer/terrainLayer'
import mapfilterLayer from './layer/mapfilterLayer'

import clickEvent from './basic/clickEvent'
import multPoint from './basic/multPoint'
import multFaceLine from './basic/multFaceLine'
import multCurve from './basic/multCurve'
import multPointCluster from './basic/multPointCluster'
import multText from './basic/multText'
import heatMap from './basic/heatMap'
import css2dEelement from './basic/css2dEelement'

export default [
    {
        name: '图层',
        key: 'layer',
        children: [
            {
                name: '创建cesium',
                key: 'defaultLayer',
                code: defaultLayer,
                image: new URL(`./layer/defaultLayer.jpg`, import.meta.url).href,
                meta: {
                    title: 'cesium初始化',
                    keywords: 'cesium, cesium初始化',
                    description: 'cesium初始化'
                }
            },
            {
                name: '高德地图',
                key: 'gaodeLayer',
                code: gaodeLayer,
                image: new URL(`./layer/gaodeLayer.jpg`, import.meta.url).href,
                meta: {
                    title: '高德地图',
                    keywords: 'cesium, 高德地图',
                    description: '加载高德地图'
                }
            },
            {
                name: '百度地图',
                key: 'baiduLayer',
                code: baiduLayer,
                image: new URL(`./layer/baiduLayer.jpg`, import.meta.url).href,
                meta: {
                    title: '百度地图',
                    keywords: 'cesium, 百度地图',
                    description: '加载百度地图'
                }
            },
            {
                name: '天地图',
                key: 'tiandituLayer',
                code: tiandituLayer,
                image: new URL(`./layer/tiandituLayer.jpg`, import.meta.url).href,
                meta: {
                    title: '天地图',
                    keywords: 'cesium, 天地图',
                    description: '加载天地图'
                }
            },
            {
                name: 'arcgis地图',
                key: 'arcgisLayer',
                code: arcgisLayer,
                image: new URL(`./layer/arcgisLayer.jpg`, import.meta.url).href,
                meta: {
                    title: 'arcgis地图',
                    keywords: 'cesium, arcgis地图',
                    description: '加载arcgis地图'
                }
            },
            {
                name: '地形',
                key: 'terrainLayer',
                code: terrainLayer,
                image: new URL(`./layer/terrainLayer.jpg`, import.meta.url).href,
                meta: {
                    title: '地形',
                    keywords: 'cesium, 地形',
                    description: '加载地形'
                }
            },
            {
                name: '地图滤镜-高德',
                key: 'mapfilterLayer',
                code: mapfilterLayer,
                image: new URL(`./layer/mapfilterLayer.jpg`, import.meta.url).href,
                meta: {
                    title: '地图滤镜',
                    keywords: '高德, 地图滤镜',
                    description: '高德地图滤镜'
                }
            }
        ]
    },
    {
        name: '功能',
        key: 'basic',
        children: [
            {
                name: '点击事件',
                key: 'clickEvent',
                code: clickEvent,
                image: new URL(`./basic/clickEvent.jpg`, import.meta.url).href,
                meta: {
                    title: 'cesium点击事件',
                    keywords: 'cesium, 点击事件',
                    description: '点击事件'
                }
            },
            {
                name: '大量点',
                key: 'multPoint',
                code: multPoint,
                image: new URL(`./basic/multPoint.jpg`, import.meta.url).href,
                meta: {
                    title: 'cesium大量点',
                    keywords: '地图, 大量点, 经纬度点',
                    description: '通过cesium 在地图上生成大量点'
                }
            },
            {
                name: '大量面线',
                key: 'multFaceLine',
                code: multFaceLine,
                image: new URL(`./basic/multFaceLine.jpg`, import.meta.url).href,
                meta: {
                    title: 'cesium大量面线',
                    keywords: '地图, 大量面,线',
                    description: '通过cesium 在地图上生成大量面线'
                }
            },
            {
                name: '大量曲线',
                key: 'multCurve',
                code: multCurve,
                image: new URL(`./basic/multCurve.jpg`, import.meta.url).href,
                meta: {
                    title: 'cesium大量曲线',
                    keywords: '地图, 大量曲线',
                    description: '通过cesium 在地图上生成大量曲线'
                }
            },
            {
                name: '大量点聚合',
                key: 'multPointCluster',
                code: multPointCluster,
                image: new URL(`./basic/multPointCluster.jpg`, import.meta.url).href,
                meta: {
                    title: 'cesium大量点聚合',
                    keywords: '地图, 大量点聚合',
                    description: '通过cesium 在地图上生成大量点聚合'
                }
            },
            {
                name: '大量文字',
                key: 'multText',
                code: multText,
                image: new URL(`./basic/multText.jpg`, import.meta.url).href,
                meta: {
                    title: 'cesium大量文字',
                    keywords: '地图, 大量文字',
                    description: '通过cesium 在地图上生成大量文字'
                }
            },
            {
                name: '热力图',
                key: 'heatMap',
                code: heatMap,
                image: new URL(`./basic/heatMap.jpg`, import.meta.url).href,
                meta: {
                    title: 'cesium热力图',
                    keywords: '地图, 热力图',
                    description: '通过cesium 在地图上生成热力图'
                }
            },
            {
                name: 'Css 2D弹窗',
                key: 'css2dEelement',
                code: css2dEelement,
                image: new URL(`./basic/css2dEelement.jpg`, import.meta.url).href,
                meta: {
                    title: 'cesium 2d元素',
                    keywords: '地图, 2d元素',
                    description: '通过cesium 在地图上生成css2dEelement'
                }
            }
        ]
    }
]