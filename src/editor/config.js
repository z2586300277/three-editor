const isDev = localStorage.getItem('dev_local_server_url') // http://localhost:7070/three-editor/dist/files 本机 

const Host = isDev ? isDev : 'https://z2586300277.github.io/three-editor/dist/files/'

fetch('https://z2586300277.github.io/editorJson/config_v1.json').then(res => res.json()).then(res => localStorage.setItem('v1_editor_resource_config', JSON.stringify(res)))

function listFiles(url) {

    function parseFolderList(html) {

        // 获取当前所有文件目录名字
        const parser = new DOMParser()

        const doc = parser.parseFromString(html, 'text/html')

        const files = Array.from(doc.querySelectorAll('a')).map(a => a.textContent)

        // 过滤掉../ 和  和其他任意文件 移除 / 结尾字符
        return files.filter(f => f !== '../' && f.endsWith('/')).map(f => f.slice(0, -1))

    }

    function parseFileList(html) {

        const reg = /<a href="([^"]+)">([^<]+)<\/a>\s+(\d{2}-[A-Za-z]{3}-\d{4} \d{2}:\d{2})\s+(\d+)/g

        const fileList = []

        let match

        while ((match = reg.exec(html)) !== null) fileList.push(match[2])

        return fileList

    }

    const xhr = new XMLHttpRequest()

    xhr.open('GET', url)

    xhr.send()

    return new Promise((resolve, reject) => xhr.onload = () => {

        if (xhr.status === 200) {

            if (url.indexOf('scene') !== -1) {

                resolve(parseFolderList(xhr.responseText))

            }

            else resolve(parseFileList(xhr.responseText))

        }

        else resolve([])

    })

}

export const fetchResource = (url) => {

    if (isDev) return listFiles(url)

    else return fetch(url + 'index.json').then(res => res.json())

}

const _Config = {

    skyUrl: 'scene/',

    buildUrl: 'resource/',

    editorJsonUrl: 'editorJson/',

    fontUrl: 'font/',

    channelUrl: 'channels/',

    iconUrl: 'icon/',

    videoUrl: 'video/'

}

export const Config = Object.keys(_Config).reduce((acc, key) => {

    acc[key] = Host + _Config[key]

    return acc

}, {})
