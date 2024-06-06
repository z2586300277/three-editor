<template>
    <iframe class="iframe" ref="frame"></iframe>
</template>

<script setup>
import { ref } from 'vue'

const frame = ref(null)

const getScript = (v) => `
    <style>
        body {
            margin: 0;
            padding: 2px;
            box-sizing: border-box;
        }
        #box {
            width: 100%;
            height: 100%;
        }
    </style>
    <div id="box"></div>
    <script type="module">
        ${v}
    <\/script>
`

defineExpose({

    usePreview: (v) => {

        const script = getScript(v)

        frame.value.contentWindow.document.open()

        frame.value.contentWindow.document.write(script)

        frame.value.contentWindow.document.close()

    }

})

</script>

<style lang="less" scoped>
.iframe {
    border: none;
    padding: 0;
    margin: 0;
    width: 100%;
    height: 100%;
}
</style>