export default

    `import { THREE, ThreeEditor } from '/three-editor/dist/js/index.js'

// draco 路径地址
ThreeEditor.dracoPath = '/three-editor/dist/draco/' 

const DOM = document.getElementById('box')

// threeEditor 简化 three.js 初始化场景系列操作
const threeEditor = new ThreeEditor(DOM)

// 模型地址
const url = 'https://z2586300277.github.io/three-editor/dist/files/resource/car.glb' 

// 简化后的导入GLTF模型
threeEditor.modelCore.insertModel({ type: 'GLTF', url }).loaderService.complete = model => {

    const materials = []
    
    model.traverse(c => c.isMesh && materials.push(c.material))

    materialsBlendShader([... new Set(materials)])
    
}

// 窗口大小变化
window.onresize = () => threeEditor.renderSceneResize() 

const ambientLight = new THREE.AmbientLight(0xffffff, 3) 

threeEditor.scene.add(ambientLight)

/* 混合着色 */
function materialsBlendShader(matarials) {

    const uniforms = {

        iResolution: {
            type: 'v2',
            value: new THREE.Vector2(DOM.clientWidth, DOM.clientHeight)
        },

        iTime: {
            type: 'f',
            value: 1.0
        }

    }

    render()
    
    function render() {
        
        uniforms.iTime.value += 0.02
        
        requestAnimationFrame(render)
        
    }

    /* 遍历材质 */
    matarials.forEach(material => {

        // 材质加工
        material.onBeforeCompile = (shader, renderer) => {

            shader.uniforms.iResolution = uniforms.iResolution

            shader.uniforms.iTime = uniforms.iTime

            /* 注意 如果使用原本自身的着色器进行部分替换  vUv 是已经存在的不用重新传递 */
            shader.fragmentShader = shader.fragmentShader.replace(/#include <common>/, \`
                uniform vec2 iResolution;
                uniform float iTime;
                #include <common> 
            \`)

            shader.fragmentShader = shader.fragmentShader.replace('vec4 diffuseColor = vec4( diffuse, opacity );', \`
                vec3 c;
                float l,z=iTime;
                for(int i=0;i<3;i++) {
                    vec2 uv,p=gl_FragCoord.xy/iResolution/2.0;
                    uv=p +  2.0;
                    p-=.5;
                    p.x*=iResolution.x/iResolution.y;
                    z+=.07;
                    l=length(p);
                    uv+=p/l*(sin(z)+1.)*abs(sin(l*9.-z-z));
                    c[i]=.01/length(mod(uv,1.)-.5);
                }
                vec4 diffuseColor = vec4( diffuse * c  * vec3(20.,20.,20.), opacity );
            \`)

        }

        material.needsUpdate = true

    })

}
`