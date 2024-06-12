export default

`
import { ThreeEditor, THREE } from '/three-editor/dist/js/index.js'

// 使用ThreeEditor 简化three.js 创建场景系列操作
const threeEditor = new ThreeEditor(document.getElementById('box'))

window.onresize = () => threeEditor.renderSceneResize() // 窗口大小变化

const { scene, camera } = threeEditor // 场景

camera.position.set(0, 40, 40) // 相机位置

/* 顶点着色器 */
const vertexs = \`varying vec2 vUv;
void main() {
  vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}\`

/* 片元着色器 */
const fragments = \`
uniform float time;
uniform float opacity;
uniform vec3 color;
uniform float num;
uniform float hiz;
varying vec2 vUv;
void main() {
  vec4 fragColor = vec4(0.);
  float sin = sin((vUv.y - time * hiz) * 10. * num);
  float high = 0.92;
  float medium = 0.4;
  if (sin > high) {
    fragColor = vec4(mix(vec3(.8, 1., 1.), color, (1. - sin) / (1. - high)), 1.);
  } else if(sin > medium) {
    fragColor = vec4(color, mix(1., 0., 1.-(sin - medium) / (high - medium)));
  } else {
    fragColor = vec4(color, 0.);
  }
  vec3 fade = mix(color, vec3(0., 0., 0.), vUv.y);
  fragColor = mix(fragColor, vec4(fade, 1.), 0.85);
  gl_FragColor = vec4(fragColor.rgb, fragColor.a * opacity * (1. - vUv.y));
}\`

// 自定义材质
const custMaterial1 = new THREE.ShaderMaterial({
    uniforms: {
      time: {
        type: "pv2",
        value: 0,
      },
      color: {
        type: "uvs",
        value: new THREE.Color("#FF4127"),
      },
      opacity: {
        type: "pv2",
        value: 1.0,
      },
      num: {
        type: "pv2",
        value: 10,
      },
      hiz: {
        type: "pv2",
        value: 0.03,
      },
    },
    vertexShader: vertexs,
    fragmentShader: fragments,
    blending: THREE.AdditiveBlending,
    transparent: !0,
    depthWrite: !1,
    depthTest: !0,
    side: THREE.DoubleSide,
});

let c = [0,0, 10, 0, 10, 10, 0, 10, 0, 0]

let posArr = [];

let uvrr = [];

let h = 10; //围墙拉伸高度

for (let i = 0; i < c.length - 2; i += 2) {

  // 矩形的三角形1
  posArr.push(c[i], c[i + 1], 0, c[i + 2], c[i + 3], 0, c[i + 2], c[i + 3], h);

  // 矩形的三角形2
  posArr.push(c[i], c[i + 1], 0, c[i + 2], c[i + 3], h, c[i], c[i + 1], h);

  // 注意顺序问题，和顶点位置坐标对应
  uvrr.push(0, 0, 1, 0, 1, 1);

  uvrr.push(0, 0, 1, 1, 0, 1);

}

const geometry = new THREE.BufferGeometry(); //声明一个空几何体对象

// 设置几何体attributes属性的位置position属性
geometry.attributes.position = new THREE.BufferAttribute(new Float32Array(posArr), 3);

// 设置几何体attributes属性的位置uv属性
geometry.attributes.uv = new THREE.BufferAttribute(new Float32Array(uvrr), 2);

geometry.computeVertexNormals()

const custMaterial = new  THREE.MeshLambertMaterial({

  color: 0X049ef4,

  side : THREE.DoubleSide

})

let mesh = new THREE.Mesh(geometry, custMaterial1); //网格模型对象Mesh

mesh.rotation.x = -Math.PI / 2;

scene.add(mesh);

animate()

/* 渲染函数 */
function animate() {

    if (custMaterial1) custMaterial1.uniforms.time.value += 0.03;

    requestAnimationFrame(animate)

}

`