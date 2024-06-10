import defaultLayer from './layer/defaultLayer'
import gaodeLayer from './layer/gaodeLayer'
import baiduLayer from './layer/baiduLayer'
import tiandituLayer from './layer/tiandituLayer'
import arcgisLayer from './layer/arcgisLayer'
import terrainLayer from './layer/terrainLayer'
import mapfilterLayer from './layer/mapfilterLayer'

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
    }
]