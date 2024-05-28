/* IndexDB存储模型 路径 唯一标识 时间 */
export async function setIndexDB() {

    return new Promise((resolve, reject) => {

        // 打开数据库
        const SCENE_DB = window.indexedDB.open('threeEditor_db', 1)

        // 数据库打开失败
        SCENE_DB.onerror = event => reject({ event, status: false, message: '数据库打开失败' })

        // 数据库升级
        SCENE_DB.onupgradeneeded = event => {

            // 数据库
            const DATABASE = event.target.result

            // 创建一个张表 设置主键 name
            DATABASE.createObjectStore('GLB', { keyPath: 'name' })

        }

        // 数据库打开成功
        SCENE_DB.onsuccess = event => {

            // 数据库
            const DATABASE = event.target.result

            // 获取数据请求
            function getRequest(name, url) {

                return new Promise((getResolve, getReject) => {

                    // 表GLB 事务 读写
                    const transaction = DATABASE.transaction(['GLB'], 'readwrite')

                    // 表GLB
                    const GLB_table = transaction.objectStore('GLB')

                    // 获取请求
                    const getRequest = GLB_table.get(name)

                    // 获取失败
                    getRequest.onerror = event => getReject({ event, status: false, message: '获取失败' })

                    // 请求成功
                    getRequest.onsuccess = event => {

                        if (event.target.result && !url) getResolve({ event, status: true, message: '获取成功', url: URL.createObjectURL(event.target.result.blob) })

                        fetch(url).then(response => response.blob()).then(blob => {

                            // 表GLB 事务 读写
                            const transaction = DATABASE.transaction(['GLB'], 'readwrite')

                            // 表GLB
                            const GLB_table = transaction.objectStore('GLB')

                            // 添加数据
                            const setRequest = GLB_table.put({ name, blob })

                            // 添加成功
                            setRequest.onsuccess = event => getResolve({ event, status: true, message: '文件缓存成功', url: URL.createObjectURL(blob) })

                            // 添加失败
                            setRequest.onerror = event => getReject({ event, status: false, message: '添加失败' })

                        }).catch(e => getReject({ e, status: false, message: '新增失败,访问路由异常' }))

                    }

                })

            }

            // 清除缓存
            function clearRequest(name) {

                return new Promise((clearResolve, clearReject) => {

                    // 表GLB 事务 读写
                    const transaction = DATABASE.transaction(['GLB'], 'readwrite')

                    // 表GLB
                    const GLB_table = transaction.objectStore('GLB')

                    // 删除数据
                    const clearRequest = GLB_table.delete(name)

                    // 删除成功
                    clearRequest.onsuccess = event => clearResolve({ event, status: true, message: '删除成功' })

                    // 删除失败
                    clearRequest.onerror = event => clearReject({ event, status: false, message: '删除失败' })

                })

            }

            // 获取所有数据
            const getAllRequest = () => {

               return new Promise((allResolve, allReject) => {

                    // 表GLB 事务 只读
                    const transaction = DATABASE.transaction(['GLB'], 'readonly')

                    // 表GLB
                    const GLB_table = transaction.objectStore('GLB')

                    // 获取所有数据
                    const getAllRequest = GLB_table.getAll()

                    // 获取失败
                    getAllRequest.onerror = event => allReject({ event, status: false, message: '获取失败' })

                    // 获取成功
                    getAllRequest.onsuccess = event => allResolve({ event, status: true, message: '获取成功', data: event.target.result })

                })

            }

            resolve({ getRequest, clearRequest, getAllRequest, DATABASE, status: true, message: '数据库打开成功' })

        }

    })

}

