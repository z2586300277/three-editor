<template>
    <iframe class="iframe" ref="frame" :srcdoc="getScript('')"></iframe>
</template>

<script setup>
import { ref } from 'vue'

const frame = ref(null)

const getScript = (v) => `
    <style>
        body {
            margin: 0;
            padding: 1px;
            box-sizing: border-box;
            background-color: #1f1f1f;
            overflow: hidden;
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

});

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