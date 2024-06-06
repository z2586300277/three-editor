<template>
   <Codemirror v-model="jsCode" placeholder="代码..." :style="{ height: '100vh', width: '50vw' }" :autofocus="true"
      :indent-with-tab="true" :tab-size="2" :extensions="extensions" @ready="handleReady" @change="onChange" />
   <div class="boxIframe">
      <Preview ref="preview" />
   </div>
   <el-button @click="useCode" class="btn">执行</el-button>
</template>

<script setup>
import { onMounted, ref, shallowRef } from 'vue'
import Preview from './preview.vue'
import { Codemirror } from 'vue-codemirror'
import { javascript } from '@codemirror/lang-javascript'
import { oneDark } from '@codemirror/theme-one-dark'
import { defaultCode } from '../examples/createEditor.js'

const str = localStorage.getItem('viewCode') || defaultCode

const jsCode = ref(str)

const extensions = [javascript(), oneDark]

const preview = ref()

const view = shallowRef()

const handleReady = (payload) => view.value = payload.view

const onChange = (payload) => { }

document.addEventListener('keydown', (e) => {

   if (e.ctrlKey && e.key === 's') {

      e.preventDefault()

      localStorage.setItem('viewCode', jsCode.value)

   }

})

onMounted(() => str && preview.value.usePreview(str))

const useCode = () => {

   localStorage.setItem('viewCode', jsCode.value)

   preview.value.usePreview(jsCode.value)

};

</script>

<style lang="less" scoped>
.btn {
   position: absolute;
   top: 0px;
   z-index: 1;
   left: calc(50vw - 60px);
}

.boxIframe {
   position: absolute;
   top: 0;
   left: 50vw;
   width: 50vw;
   height: 100vh;
   display: flex;
   box-sizing: border-box;
}
</style>