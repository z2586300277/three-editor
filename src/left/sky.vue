<template>
    <div class="skyList">
        <div class="item" v-for="i in data.list">
            <div class="title">{{ i }}
                <div class="flex">
                    <el-button @click="setSky(i)" icon="CircleCheckFilled" style="height: 30px;width: 30px;"
                        title="设为天空" />
                    <el-button @click="setEnv(i)" icon="StarFilled" style="height: 30px;width: 30px;" title="设置为环境" />
                </div>
            </div>
            <div class="resource">
                <div v-for="a, k in 6">
                    <img class="img" :src="Config.skyUrl + i + '/' + (k + 1) + '.png'" alt="">
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { Config, fetchResource } from '../config'
import { shallowReactive } from 'vue';

const props = defineProps(['emitEditor'])

const setSky = (i) => props.emitEditor.threeEditor.scene.setSceneBackground([0, 1, 2, 3, 4, 5].map(k => Config.skyUrl + i + '/' + (k + 1) + '.png'))

const setEnv = (i) => {

    const { scene } = props.emitEditor.threeEditor

    scene.setEnvBackground([0, 1, 2, 3, 4, 5].map(k => Config.skyUrl + i + '/' + (k + 1) + '.png'))

    scene.environment = scene.envBackground

}

const data = shallowReactive({ list: [] })

fetchResource(Config.skyUrl).then(res => data.list = res)

</script>

<style lang="less" scoped>
.skyList {
    display: grid;
    grid-template-rows: repeat(auto-fit, 200px);
    overflow: scroll;
    height: 100%;
    width: calc(100% - 60px);

    .item {
        height: 200px;
        width: 100%;
        padding: 10px;
        box-sizing: border-box;
    }

    .title {
        border-bottom: 1px solid #4a4a4a;
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 40px;
    }
}

.resource {
    display: grid;
    height: calc(100% - 40px);
    width: 100%;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 1fr);
    justify-items: center;
    align-items: end;
}

.img {
    width: 50px;
    height: 50px;
}

.flex {
    display: flex;
    align-items: center;
}
</style>
