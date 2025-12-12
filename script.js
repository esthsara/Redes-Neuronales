// ======== MÓDULO GLOBAL ========
let scene, camera, renderer, controls;
let layers = {
  input: [],
  conv1: [],
  pool1: [],
  conv2: [],
  pool2: [],
  flatten: [],
  fc: [],
  output: []
};
let lineas = [];
let senales = [];

// ======== INICIALIZACIÓN ========
function init() {
  // Escena
  scene = new THREE.Scene();
  scene.background = new THREE.Color(0x0f0f15);

  // Cámara
  camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
  camera.position.set(0, 0, 15);

  // Renderizador
  renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(window.devicePixelRatio);
  document.getElementById('container').appendChild(renderer.domElement);

  // Controles
  controls = new THREE.OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;
  controls.dampingFactor = 0.05;

  // Luces
  const luz = new THREE.DirectionalLight(0xffffff, 1);
  luz.position.set(5, 5, 5);
  scene.add(luz);
  scene.add(new THREE.AmbientLight(0x404040));

  // Crear capas de la CNN
  createLayers();

  // Manejar redimensionamiento
  window.addEventListener('resize', onWindowResize);

  // Botones UI
  setupUI();
}

function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}

function animate() {
  requestAnimationFrame(animate);
  controls.update();
  renderer.render(scene, camera);
}

// ======== CREAR CAPAS DE LA CNN ========
function createLayers() {
  // --- INPUT LAYER ---
  const inputGeometry = new THREE.BoxGeometry(3, 3, 0.2);
  const inputMaterial = new THREE.MeshPhongMaterial({ color: 0x4FC3F7, transparent: true, opacity: 0.8 });
  const inputLayer = new THREE.Mesh(inputGeometry, inputMaterial);
  inputLayer.position.set(-8, 0, 0);
  scene.add(inputLayer);
  layers.input.push(inputLayer);

  // --- CONVOLUTION 1 ---
  for (let i = 0; i < 3; i++) {
    const convGeo = new THREE.BoxGeometry(2.5, 2.5, 0.2);
    const convMat = new THREE.MeshPhongMaterial({ color: 0xFF9800, transparent: true, opacity: 0.7 });
    const conv = new THREE.Mesh(convGeo, convMat);
    conv.position.set(-5, i - 1, 0);
    scene.add(conv);
    layers.conv1.push(conv);
  }

  // --- POOLING 1 ---
  for (let i = 0; i < 3; i++) {
    const poolGeo = new THREE.BoxGeometry(1.5, 1.5, 0.2);
    const poolMat = new THREE.MeshPhongMaterial({ color: 0xFFC107, transparent: true, opacity: 0.6 });
    const pool = new THREE.Mesh(poolGeo, poolMat);
    pool.position.set(-3, i - 1, 0);
    scene.add(pool);
    layers.pool1.push(pool);
  }

  // --- CONVOLUTION 2 ---
  for (let i = 0; i < 2; i++) {
    const convGeo = new THREE.BoxGeometry(1.2, 1.2, 0.2);
    const convMat = new THREE.MeshPhongMaterial({ color: 0xFF9800, transparent: true, opacity: 0.7 });
    const conv = new THREE.Mesh(convGeo, convMat);
    conv.position.set(-1, i - 0.5, 0);
    scene.add(conv);
    layers.conv2.push(conv);
  }

  // --- POOLING 2 ---
  for (let i = 0; i < 2; i++) {
    const poolGeo = new THREE.BoxGeometry(0.8, 0.8, 0.2);
    const poolMat = new THREE.MeshPhongMaterial({ color: 0xFFC107, transparent: true, opacity: 0.6 });
    const pool = new THREE.Mesh(poolGeo, poolMat);
    pool.position.set(0.5, i - 0.5, 0);
    scene.add(pool);
    layers.pool2.push(pool);
  }

  // --- FLATTEN LAYER ---
  for (let i = 0; i < 5; i++) {
    const flatGeo = new THREE.BoxGeometry(0.3, 0.3, 0.2);
    const flatMat = new THREE.MeshPhongMaterial({ color: 0x8BC34A, transparent: true, opacity: 0.5 });
    const flat = new THREE.Mesh(flatGeo, flatMat);
    flat.position.set(2, i - 2, 0);
    scene.add(flat);
    layers.flatten.push(flat);
  }

  // --- FULLY CONNECTED ---
  for (let i = 0; i < 4; i++) {
    const fcGeo = new THREE.SphereGeometry(0.2, 8, 8);
    const fcMat = new THREE.MeshPhongMaterial({ color: 0x9C27B0 });
    const fc = new THREE.Mesh(fcGeo, fcMat);
    fc.position.set(4, i - 1.5, 0);
    scene.add(fc);
    layers.fc.push(fc);
  }

  // --- OUTPUT LAYER ---
  const outputLabels = ["Horse", "Zebra", "Dog"];
  for (let i = 0; i < 3; i++) {
    const outGeo = new THREE.BoxGeometry(1, 0.5, 0.2);
    const outMat = new THREE.MeshPhongMaterial({ color: 0xE91E63, transparent: true, opacity: 0.9 });
    const out = new THREE.Mesh(outGeo, outMat);
    out.position.set(7, i - 1, 0);
    scene.add(out);
    layers.output.push(out);

    // Etiqueta
    const label = document.createElement('div');
    label.style.position = 'absolute';
    label.style.color = 'white';
    label.style.fontSize = '12px';
    label.style.top = `${window.innerHeight - 100 - i * 40}px`;
    label.style.left = '20px';
    label.innerText = outputLabels[i];
    document.body.appendChild(label);
  }

  // --- CONEXIONES ENTRE CAPAS ---
  connectLayers(layers.input, layers.conv1);
  connectLayers(layers.conv1, layers.pool1);
  connectLayers(layers.pool1, layers.conv2);
  connectLayers(layers.conv2, layers.pool2);
  connectLayers(layers.pool2, layers.flatten);
  connectLayers(layers.flatten, layers.fc);
  connectLayers(layers.fc, layers.output);
}

function connectLayers(from, to) {
  from.forEach(nodo1 => {
    to.forEach(nodo2 => {
      const points = [nodo1.position.clone(), nodo2.position.clone()];
      const geometry = new THREE.Geometry();
        geometry.vertices.push(points[0], points[1]);
      const material = new THREE.LineBasicMaterial({ color: 0xaaaaaa, transparent: true, opacity: 0.3 });
      const linea = new THREE.Line(geometry, material);
      scene.add(linea);
      lineas.push(linea);
    });
  });
}

// ======== ANIMACIÓN DE DATOS ========
function animateDataFlow() {
  document.getElementById('resultado').innerText = "Procesando...";

  // Reiniciar colores de salida
  layers.output.forEach(n => n.material.color.set(0xE91E63));

  // Simular 3 señales viajando
  let count = 0;
  const total = 3;

  function enviarSiguiente() {
    if (count >= total) {
      setTimeout(() => {
        layers.output[1].material.color.set(0x00FF00); // Zebra
        document.getElementById('resultado').innerHTML = "<strong>Resultado:</strong> Zebra 🦓";
      }, 800);
      return;
    }

    const inicio = layers.input[0].position.clone();
    const fin = layers.output[1].position.clone(); // Siempre va a "Zebra" para simulación

    const senal = new THREE.Mesh(
      new THREE.BoxGeometry(0.1, 0.1, 0.1),
      new THREE.MeshBasicMaterial({ color: 0xFFFF00 })
    );
    senal.position.copy(inicio);
    scene.add(senal);
    senales.push(senal);

    let t = 0;
    function mover() {
      if (t <= 1) {
        senal.position.lerpVectors(inicio, fin, t);
        t += 0.02;
        requestAnimationFrame(mover);
      } else {
        scene.remove(senal);
        count++;
        if (count < total) {
          setTimeout(enviarSiguiente, 300);
        } else {
          enviarSiguiente();
        }
      }
    }
    mover();
  }

  enviarSiguiente();
}

// ======== INTERFAZ DE USUARIO ========
function setupUI() {
  // Panel de control
  const ui = document.createElement('div');
  ui.id = 'ui';
  ui.style.position = 'absolute';
  ui.style.top = '20px';
  ui.style.left = '20px';
  ui.style.background = 'rgba(0,0,0,0.7)';
  ui.style.color = 'white';
  ui.style.padding = '12px';
  ui.style.borderRadius = '8px';
  ui.innerHTML = `
    <h3>🧠 Red Neuronal Convolucional</h3>
    <p>Simulación visual de flujo de datos.</p>
    <button id="btnStart">🚀 Clasificar Imagen</button>
    <div id="resultado" style="margin-top: 10px; font-weight: bold;">Esperando...</div>
  `;
  document.body.appendChild(ui);

  // Botón
  document.getElementById('btnStart').addEventListener('click', animateDataFlow);

  // Texto de resultado
  const resultadoDiv = document.createElement('div');
  resultadoDiv.id = 'resultado';
  resultadoDiv.style.position = 'absolute';
  resultadoDiv.style.top = '80px';
  resultadoDiv.style.left = '20px';
  resultadoDiv.style.color = 'white';
  resultadoDiv.style.fontWeight = 'bold';
  document.body.appendChild(resultadoDiv);
}

// ======== INICIAR ========
init();
animate();