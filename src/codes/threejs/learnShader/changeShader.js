export default

    `
import { ThreeEditor, THREE, dat } from '/three-editor/dist/js/index.js' 

const DOM = document.getElementById('box') // 获取DOM

const threeEditor = new ThreeEditor(DOM) // 使用ThreeEditor 简化 three.js 初始化场景系列操作

window.onresize = () => threeEditor.renderSceneResize() // 窗口大小变化

const { scene } = threeEditor

// 立方体 
const geometry = new THREE.BoxGeometry(4, 4, 4);

const material = new THREE.MeshBasicMaterial({ color: 0xffffff });

const mesh = new THREE.Mesh(geometry, material);

const ambientLight = new THREE.AmbientLight(0xffffff, 5);

scene.add(ambientLight);

scene.add(mesh);

// GUI 对象
const GUI = new dat.GUI()

const fileList = new Array(6).fill().map((_, i) => \`/three-editor/dist/glsl/\${i}.frag\`)

GUI.add({url: fileList[0]}, 'url', fileList).onChange((url) => changeShader(url))

changeShader(fileList[0])

let shader = null

animate()

// 渲染 
function animate() {

    shader && (shader.uniforms.u_time.value += 0.02)

    requestAnimationFrame(animate)

}

async function changeShader(url) {

    const str = await fetch(url).then(res => res.text())

    // 使用 shader 库中的phong材质 进行修改
    shader = {
        
        uniforms: THREE.UniformsUtils.merge([

            THREE.ShaderLib['phong'].uniforms,

            {

                u_resolution: {

                    type: 'v2',

                    value: new THREE.Vector2(DOM.clientWidth, DOM.clientHeight)

                },

                u_time: {

                    type: 'f',

                    value: 0.0

                },

                u_mouse: {

                    type: 'v2',

                    value: new THREE.Vector2(0, 0)

                }

            }

        ]),

        side: THREE.DoubleSide,

        vertexShader: \`
            varying vec2 vUv;
            void main() {
                vUv = uv;
                vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );
                gl_Position = projectionMatrix * mvPosition;
            }
        \`,

        fragmentShader: str,

    }

    shader.fragmentShader = shader.fragmentShader.replace(/gl_FragCoord/, 'vUv * u_resolution.xy')

    shader.fragmentShader = shader.fragmentShader.replace(/uniform float u_time;/, \`
        uniform float u_time;
        varying vec2 vUv;
    \`)

    const material = new THREE.ShaderMaterial(shader);

    mesh.material.dispose()

    mesh.material = material

}

`