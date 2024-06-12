export default

    `import { THREE, ThreeEditor } from '/three-editor/dist/js/index.js'

/* 使用ThreeEditor 简化 three.js 初始化场景系列操作 */
const threeEditor = new ThreeEditor( document.getElementById('box'))

window.onresize = () => threeEditor.renderSceneResize() // 窗口大小变化

/* 使用简化的后方式导入 FBX */
const { loaderService } = threeEditor.modelCore.insertModel({ type: 'FBX', url: '/three-editor/dist/files/resource/aroundBuilding.FBX' })

// 模型加载完成回调
loaderService.complete = group => {

    group.scale.set(0.005, 0.005, 0.005) // 缩小

    group.traverse(i => i.material = material) // 设置材质

    animate() // 动画

}

const uniforms = {

    innerCircleWidth: { value: 0 },

    circleWidth: { value: 300 },

    diff: { value: new THREE.Color(0.2, 0.2, 0.2) },

    color: { value: new THREE.Color(0.0, 0.0, 1.0) },

    opacity: { value: 0.3 },

    center: { value: new THREE.Vector3(0, 0, 0) }

}

function animate() {

    if (uniforms.innerCircleWidth.value < 1000) uniforms.innerCircleWidth.value += 3
    
    else uniforms.innerCircleWidth.value = 0

    requestAnimationFrame(animate)

}

const material = new THREE.ShaderMaterial({

    uniforms,

    vertexShader: \`
        varying vec2 vUv;
        varying vec3 v_position;
        void main() {
            vUv = uv;
            v_position = position;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
    \`,

    fragmentShader: \`
        varying vec2 vUv;
        varying vec3 v_position;

        uniform float innerCircleWidth;
        uniform float circleWidth;
        uniform float opacity;
        uniform vec3 center;
        
        uniform vec3 color;
        uniform vec3 diff;

        void main() {
            float dis = length(v_position - center);
            if(dis < (innerCircleWidth + circleWidth) && dis > innerCircleWidth) {
                float r = (dis - innerCircleWidth) / circleWidth;
            
                gl_FragColor = mix(vec4(diff, 0.1), vec4(color, opacity), r);
            }else {
                gl_FragColor = vec4(diff, 0.1);
            }

        }
    \`,

})

`