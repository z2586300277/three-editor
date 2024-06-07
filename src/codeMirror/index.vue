<template>
   <transition name="el-zoom-in-left">
      <Codemirror v-show="expand" v-model="jsCode" placeholder="代码..." :style="{ height: '100vh', width: '50vw' }"
         :autofocus="true" :indent-with-tab="true" :tab-size="2" :extensions="extensions" @ready="handleReady"
         @change="onChange" />
   </transition>
   <div :class="expand ? 'boxIframe' : 'boxIframe2'">
      <Preview ref="preview" />
   </div>
   <div class="lico" :style="{ left: expand ? 'calc(50vw - 4px)' : '0px' }">
      <el-icon class="icon" @click="changeExpand(!expand)">
         <Expand v-if="!expand" />
         <Fold v-else />
      </el-icon>
   </div>
   <el-button v-show="expand" plain icon="CaretRight" @click="useCode" class="btn">执行</el-button>
</template>

<script setup>
import { onMounted, ref, shallowRef } from 'vue'
import Preview from './preview.vue'
import { Codemirror } from 'vue-codemirror'
import { javascript } from '@codemirror/lang-javascript'
import { oneDark } from '@codemirror/theme-one-dark'

const expand = ref(localStorage.getItem('example_expand') == 'true')

const changeExpand = v => {

   expand.value = v

   localStorage.setItem('example_expand', v)

}

const str = localStorage.getItem('viewCode')

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
   left: calc(50vw - 80px);
   border: none;
   background-color: none;
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

.boxIframe2 {
   position: absolute;
   top: 0;
   left: 0;
   width: 100vw;
   height: 100vh;
   display: flex;
   box-sizing: border-box;
}

.lico {
   position: absolute;
   z-index: 3;
   top: 0px;

   .icon {
      font-size: 30px;
      color: #fff;
      cursor: pointer;
      transition: all 0.8s;

      &:hover {
         transform: rotate(180deg);
      }
   }
}
</style>