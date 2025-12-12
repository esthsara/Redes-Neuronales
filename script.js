// ======== MÓDULO CONFIGURACIÓN ========
const CONFIG = {
  COLORS: {
    BACKGROUND: 0x333333,
    INPUT_LAYER: 0x4FC3F7,
    KERNEL: 0xFFFF00,
    CONV_FILTER_RED: 0xFF5252,
    CONV_FILTER_GREEN: 0x69F0AE,
    CONV_FILTER_BLUE: 0x448AFF,
    POOL_LAYER: 0xFFC107,
    FLATTEN_LAYER: 0x8BC34A,
    FC_LAYER: 0x9C27B0,
    OUTPUT_LAYER: 0xE91E63,
    SIGNAL: 0xFFFF00,
    CONNECTION: 0xaaaaaa,
    RELU_ACTIVE: 0x00E676,
    RELU_INACTIVE: 0xFF5252,
    FEATURE_MAP_1: 0xFF9800,
    FEATURE_MAP_2: 0xFFB74D,
    FEATURE_MAP_3: 0xFFCC80
  },
  
  LAYER_SIZES: {
    INPUT: { width: 3, height: 3, depth: 0.5 },
    KERNEL: { width: 0.6, height: 0.6, depth: 0.1 },
    CONV_FILTER: { width: 1.8, height: 1.8, depth: 0.3 },
    CONV1: { width: 2.5, height: 2.5, depth: 0.2 },
    POOL1: { width: 1.5, height: 1.5, depth: 0.2 },
    CONV2: { width: 1.2, height: 1.2, depth: 0.2 },
    POOL2: { width: 0.8, height: 0.8, depth: 0.2 },
    FLATTEN: { width: 0.3, height: 0.3, depth: 0.2 },
    OUTPUT: { width: 1, height: 0.5, depth: 0.2 }
  },
  
  LAYER_POSITIONS: {
    INPUT: { x: -15.5, y: 0, z: 0 },
    KERNEL: { x: -15, y: 0, z: 0.4 },

    CONV_FILTERS: [
      { x: -11, y: 0, z: -1 },
      { x: -11, y: 0, z: 0 },
      { x: -11, y: 0, z: 1 }
    ],
    FEATURE_MAPS_1: [
      { x: -7, y: 0, z: -1 },
      { x: -7, y: 0, z: 0 },
      { x: -7, y: 0, z: 1 }
    ],
    RELU_POSITIONS: [
      { x: -5, y: 1.5, z: 0 },
      { x: -5, y: 0, z: 0 },
      { x: -5, y: -1.5, z: 0 }
    ],
    POOL1_POSITIONS: [
      { x: -3, y: 1.5, z: 0 },
      { x: -3, y: 0, z: 0 },
      { x: -3, y: -1.5, z: 0 }
    ],
    CONV2_POSITIONS: [
      { x: -1, y: 0.5, z: 0 },
      { x: -1, y: -0.5, z: 0 }
    ],
    POOL2_POSITIONS: [
      { x: 1, y: 0.5, z: 0 },
      { x: 1, y: -0.5, z: 0 }
    ],
    FLATTEN_X: 3,
    FC_X: 5,
    OUTPUT_X: 7
  },
  
  OUTPUT_LABELS: ["Horse", "Zebra", "Dog"],
  
  ACTIVATION: {
    SIZE: { width: 0.2, height: 2, depth: 0.1 }
  }
};



// ======== MÓDULO GLOBAL ========
const State = {
  scene: null,
  camera: null,
  renderer: null,
  controls: null,
  layers: {
    input: [],
    kernel: null,
    convFilters: [],
    featureMaps1: [],
    relu1: [],
    pool1: [],
    conv2: [],
    pool2: [],
    flatten: [],
    fc: [],
    output: []
  },
  connections: [],
  signals: [],
  htmlLabels: [] // Para etiquetas HTML en lugar de 3D
};



// ======== MÓDULO DE CREACIÓN DE ETIQUETAS HTML ========
const LabelModule = {
  createHTMLLabel(text, position3D, className = 'layer-label') {
    const label = document.createElement('div');
    label.className = className;
    label.textContent = text;
    label.style.cssText = `
      position: absolute;
      color: white;
      font-family: Arial, sans-serif;
      font-weight: bold;
      text-shadow: 1px 1px 2px black;
      pointer-events: none;
      white-space: nowrap;
      z-index: 1000;
    `;
    
    document.body.appendChild(label);
    
    // Guardar referencia para actualizar posición
    label.userData = { position3D };
    State.htmlLabels.push(label);
    
    return label;
  },

  createLayerLabel(text, position3D) {
    return this.createHTMLLabel(text, position3D, 'layer-label');
  },

  createSectionLabel(text, position3D) {
    return this.createHTMLLabel(text, position3D, 'section-label');
  },

  updateHTMLLabelsPosition() {
    if (!State.htmlLabels.length || !State.camera) return;
    
    State.htmlLabels.forEach(label => {
      const vector = new THREE.Vector3(
        label.userData.position3D.x,
        label.userData.position3D.y,
        label.userData.position3D.z
      );
      
      // Proyectar coordenadas 3D a 2D
      vector.project(State.camera);
      
      const widthHalf = window.innerWidth / 2;
      const heightHalf = window.innerHeight / 2;
      
      const x = (vector.x * widthHalf) + widthHalf;
      const y = -(vector.y * heightHalf) + heightHalf;
      
      // Ajustar posición
      label.style.left = `${x - 50}px`;
      label.style.top = `${y}px`;
      
      // Estilos específicos
      if (label.className === 'section-label') {
        label.style.color = '#FFFF00';
        label.style.fontSize = '14px';
        label.style.background = 'rgba(0,0,0,0.7)';
        label.style.padding = '5px 10px';
        label.style.borderRadius = '5px';
      } else {
        label.style.color = '#FFFFFF';
        label.style.fontSize = '12px';
        label.style.background = 'rgba(0,0,0,0.5)';
        label.style.padding = '3px 8px';
        label.style.borderRadius = '3px';
      }
    });
  }
};


// ======== MÓDULO DE CREACIÓN DE CAPAS ========
const LayerBuilder = {
  createAllLayers() {
    this.createInputSection();
    this.createConvolutionSection();
    this.createActivationSection();
    this.createPoolingSection();
    this.createSecondConvolutionSection();
    this.createFlattenSection();
    this.createFullyConnectedSection();
    this.createOutputSection();
    this.createConnections();
  },

  createInputSection() {
    // Capa de entrada
    const inputLayer = this.createBoxLayer(
      CONFIG.LAYER_SIZES.INPUT,
      CONFIG.COLORS.INPUT_LAYER,
      0.8,
      CONFIG.LAYER_POSITIONS.INPUT
    );
    State.layers.input.push(inputLayer);
    
    // Etiqueta "Input"
    LabelModule.createLayerLabel("INPUT", {
      x: CONFIG.LAYER_POSITIONS.INPUT.x ,
      y: CONFIG.LAYER_POSITIONS.INPUT.y - 1.5,
      z: CONFIG.LAYER_POSITIONS.INPUT.z
    });
    
    // Kernel
    const kernel = this.createBoxLayer(
      CONFIG.LAYER_SIZES.KERNEL,
      CONFIG.COLORS.KERNEL,
      0.5,
      CONFIG.LAYER_POSITIONS.KERNEL
    );
    kernel.material.side = THREE.DoubleSide;
    State.layers.kernel = kernel;
    
    // Etiqueta "Kernel"
    LabelModule.createLayerLabel("Kernel", {
      x: CONFIG.LAYER_POSITIONS.KERNEL.x,
      y: CONFIG.LAYER_POSITIONS.KERNEL.y - 0.005,
      z: CONFIG.LAYER_POSITIONS.KERNEL.z
    });
  },

  createConvolutionSection() {
    // Título de sección "Convolution"
    LabelModule.createSectionLabel("Convolucion", { x: -11, y: 3, z: 0 });
    
    // Crear 3 filtros de convolución
    const filterColors = [
      CONFIG.COLORS.CONV_FILTER_RED,
      CONFIG.COLORS.CONV_FILTER_GREEN,
      CONFIG.COLORS.CONV_FILTER_BLUE
    ];
    
    filterColors.forEach((color, index) => {
      // Filtro de convolución
      const filter = this.createBoxLayer(
        CONFIG.LAYER_SIZES.CONV_FILTER,
        color,
        0.8,//opacidad
        CONFIG.LAYER_POSITIONS.CONV_FILTERS[index]
      );
      State.layers.convFilters.push(filter);
      
      // Etiqueta "Convolution" para cada filtro
      LabelModule.createLayerLabel("Convolution", {
        x: CONFIG.LAYER_POSITIONS.CONV_FILTERS[index].x,
        y: CONFIG.LAYER_POSITIONS.CONV_FILTERS[index].y - 1.5,
        z: CONFIG.LAYER_POSITIONS.CONV_FILTERS[index].z
      });
      
      // Feature Map resultante
      const featureMap = this.createBoxLayer(
        CONFIG.LAYER_SIZES.CONV1,
        [CONFIG.COLORS.FEATURE_MAP_1, 
         CONFIG.COLORS.FEATURE_MAP_2, 
         CONFIG.COLORS.FEATURE_MAP_3][index],
        0.7,
        CONFIG.LAYER_POSITIONS.FEATURE_MAPS_1[index]
      );
      State.layers.featureMaps1.push(featureMap);
      
      // Etiqueta "Feature Maps" solo en el centro
      if (index === 1) {
        LabelModule.createSectionLabel("Feature Maps", { x: -7, y: 3, z: 0 });
      }
    });
  },



  createActivationSection() {
    // Título de sección "ReLU"
    LabelModule.createSectionLabel("ReLU", { x: -5, y: 3, z: 0 });
    
    // Crear 3 capas ReLU
    CONFIG.LAYER_POSITIONS.RELU_POSITIONS.forEach((position, index) => {
      const relu = this.createActivationLayer(position, index);
      State.layers.relu1.push(relu);
      
      // Etiqueta "ReLU" para cada capa
      LabelModule.createLayerLabel("ReLU", {
        x: position.x,
        y: position.y - 1.5,
        z: position.z
      });
    });
  },

  createActivationLayer(position, index) {
    const geometry = new THREE.PlaneGeometry(
      CONFIG.ACTIVATION.SIZE.width,
      CONFIG.ACTIVATION.SIZE.height
    );
    
    const material = new THREE.MeshBasicMaterial({
      color: index === 1 ? CONFIG.COLORS.RELU_ACTIVE : CONFIG.COLORS.RELU_INACTIVE,
      transparent: true,
      opacity: 0.6,
      side: THREE.DoubleSide
    });
    
    const plane = new THREE.Mesh(geometry, material);
    plane.position.set(position.x, position.y, position.z);
    plane.rotation.y = Math.PI / 2;
    
    // Animación
    plane.userData = {
      blinkInterval: Math.random() * 2 + 1,
      blinkTime: 0,
      isActive: index === 1
    };
    
    State.scene.add(plane);
    return plane;
  },

  createPoolingSection() {
    // Título de sección "Pooling"
    LabelModule.createSectionLabel("Pooling", { x: -3, y: 3, z: 0 });
    
    // Crear 3 capas de pooling
    CONFIG.LAYER_POSITIONS.POOL1_POSITIONS.forEach((position, index) => {
      const pool = this.createBoxLayer(
        CONFIG.LAYER_SIZES.POOL1,
        CONFIG.COLORS.POOL_LAYER,
        0.6,
        position
      );
      State.layers.pool1.push(pool);
      
      // Etiqueta "Pooling" para cada capa
      LabelModule.createLayerLabel("Pooling", {
        x: position.x,
        y: position.y - 1.5,
        z: position.z
      });
    });
  },

  createSecondConvolutionSection() {
    // Segunda convolución (2 capas)
    CONFIG.LAYER_POSITIONS.CONV2_POSITIONS.forEach((position, index) => {
      const conv = this.createBoxLayer(
        CONFIG.LAYER_SIZES.CONV2,
        CONFIG.COLORS.CONV_LAYER,
        0.7,
        position
      );
      State.layers.conv2.push(conv);
      
      // Etiqueta "Convolution" solo en el primero
      if (index === 0) {
        LabelModule.createLayerLabel("Convolution", {
          x: position.x,
          y: position.y + 1.5,
          z: position.z
        });
      }
    });
    
    // Segundo pooling (2 capas)
    CONFIG.LAYER_POSITIONS.POOL2_POSITIONS.forEach((position, index) => {
      const pool = this.createBoxLayer(
        CONFIG.LAYER_SIZES.POOL2,
        CONFIG.COLORS.POOL_LAYER,
        0.6,
        position
      );
      State.layers.pool2.push(pool);
      
      // Etiqueta "Pooling" solo en el primero
      if (index === 0) {
        LabelModule.createLayerLabel("Pooling", {
          x: position.x,
          y: position.y + 1.5,
          z: position.z
        });
      }
    });
  },

  createFlattenSection() {
    // Título "Feature Extraction"
    LabelModule.createSectionLabel("Feature Extraction", { x: 3, y: 2, z: 0 });
    
    // Capa Flatten
    for (let i = 0; i < 5; i++) {
      const flat = this.createBoxLayer(
        CONFIG.LAYER_SIZES.FLATTEN,
        CONFIG.COLORS.FLATTEN_LAYER,
        0.5,
        { x: CONFIG.LAYER_POSITIONS.FLATTEN_X, y: i - 2, z: 0 }
      );
      State.layers.flatten.push(flat);
    }
    
    // Etiqueta "Flatten"
    LabelModule.createLayerLabel("Flatten", {
      x: CONFIG.LAYER_POSITIONS.FLATTEN_X,
      y: 2.5,
      z: 0
    });
  },

  createFullyConnectedSection() {
    // Capas Fully Connected
    for (let i = 0; i < 4; i++) {
      const sphere = new THREE.Mesh(
        new THREE.SphereGeometry(0.2, 16, 16),
        new THREE.MeshPhongMaterial({ 
          color: CONFIG.COLORS.FC_LAYER
        })
      );
      sphere.position.set(CONFIG.LAYER_POSITIONS.FC_X, i - 1.5, 0);
      State.scene.add(sphere);
      State.layers.fc.push(sphere);
    }
    
    // Etiqueta "Fully Connected"
    LabelModule.createLayerLabel("Fully Connected", {
      x: CONFIG.LAYER_POSITIONS.FC_X,
      y: 2.5,
      z: 0
    });
  },

  createOutputSection() {
    // Capa de salida
    CONFIG.OUTPUT_LABELS.forEach((label, i) => {
      const output = this.createBoxLayer(
        CONFIG.LAYER_SIZES.OUTPUT,
        CONFIG.COLORS.OUTPUT_LAYER,
        0.9,
        { x: CONFIG.LAYER_POSITIONS.OUTPUT_X, y: i - 1, z: 0 }
      );
      State.layers.output.push(output);
      
      // Etiqueta con el nombre de la clase
      LabelModule.createLayerLabel(label, {
        x: CONFIG.LAYER_POSITIONS.OUTPUT_X,
        y: i - 1 - 0.8,
        z: 0
      });
    });
    
    // Título "Output"
    LabelModule.createSectionLabel("Output", {
      x: CONFIG.LAYER_POSITIONS.OUTPUT_X,
      y: 2.5,
      z: 0
    });
  },

  createBoxLayer(size, color, opacity, position) {
    const geometry = new THREE.BoxGeometry(size.width, size.height, size.depth);
    const material = new THREE.MeshPhongMaterial({ 
      color: color, 
      transparent: true, 
      opacity: opacity
    });
    const mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(position.x, position.y, position.z);
    State.scene.add(mesh);
    return mesh;
  },

  createConnections() {
    // Conexión Input → Filtros
    if (State.layers.input[0]) {
      State.layers.convFilters.forEach(filter => {
        this.createSimpleConnection(State.layers.input[0], filter);
      });
    }
    
    // Conexiones Filtros → Feature Maps
    State.layers.convFilters.forEach((filter, index) => {
      if (State.layers.featureMaps1[index]) {
        this.createSimpleConnection(filter, State.layers.featureMaps1[index]);
      }
    });
    
    // Conexiones Feature Maps → ReLU
    State.layers.featureMaps1.forEach((featureMap, index) => {
      if (State.layers.relu1[index]) {
        this.createSimpleConnection(featureMap, State.layers.relu1[index]);
      }
    });
    
    // Conexiones ReLU → Pooling
    State.layers.relu1.forEach((relu, index) => {
      if (State.layers.pool1[index]) {
        this.createSimpleConnection(relu, State.layers.pool1[index]);
      }
    });
    
    // Conexiones Pooling → Convolution 2
    if (State.layers.pool1[0] && State.layers.conv2[0]) {
      this.createSimpleConnection(State.layers.pool1[0], State.layers.conv2[0]);
    }
    
    // Conexiones Convolution 2 → Pooling 2
    if (State.layers.conv2[0] && State.layers.pool2[0]) {
      this.createSimpleConnection(State.layers.conv2[0], State.layers.pool2[0]);
    }
    
    // Conexiones Pooling 2 → Flatten
    if (State.layers.pool2[0]) {
      State.layers.flatten.forEach(flat => {
        this.createSimpleConnection(State.layers.pool2[0], flat);
      });
    }
    
    // Conexiones Flatten → Fully Connected
    State.layers.flatten.forEach(flat => {
      State.layers.fc.forEach(fc => {
        this.createSimpleConnection(flat, fc);
      });
    });
    
    // Conexiones Fully Connected → Output
    State.layers.fc.forEach(fc => {
      State.layers.output.forEach(output => {
        this.createSimpleConnection(fc, output);
      });
    });
  },

  createSimpleConnection(from, to) {
    const geometry = new THREE.Geometry();
    geometry.vertices.push(
      from.position.clone(),
      to.position.clone()
    );
    
    const material = new THREE.LineBasicMaterial({
      color: CONFIG.COLORS.CONNECTION,
      transparent: true,
      opacity: 0.2
    });
    
    const line = new THREE.Line(geometry, material);
    State.scene.add(line);
    State.connections.push(line);
  }
};

// ======== MÓDULO DE INICIALIZACIÓN ========
const InitializationModule = {
  init() {
    this.createScene();
    this.createCamera();
    this.createRenderer();
    this.createControls();
    this.addLights();
    this.setupEventListeners();
    return State;
  },

  createScene() {
    State.scene = new THREE.Scene();
    State.scene.background = new THREE.Color(CONFIG.COLORS.BACKGROUND);
  },

  createCamera() {
    State.camera = new THREE.PerspectiveCamera(
      60, 
      window.innerWidth / window.innerHeight, 
      0.1, 
      1000
    );
    State.camera.position.set(0, 0, 25);
  },

  createRenderer() {
    State.renderer = new THREE.WebGLRenderer({ antialias: true });
    State.renderer.setSize(window.innerWidth, window.innerHeight);
    State.renderer.setPixelRatio(window.devicePixelRatio);
    document.getElementById('container').appendChild(State.renderer.domElement);
  },

  createControls() {
    // Para versión r71, OrbitControls puede ser diferente
    try {
      State.controls = new THREE.OrbitControls(State.camera, State.renderer.domElement);
      State.controls.enableDamping = true;
      State.controls.dampingFactor = 0.05;
    } catch (error) {
      console.warn('OrbitControls no disponible:', error);
    }
  },

  addLights() {
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(10, 10, 10);
    State.scene.add(directionalLight);
    
    State.scene.add(new THREE.AmbientLight(0x404040));
  },

  setupEventListeners() {
    window.addEventListener('resize', this.onWindowResize);
  },

  onWindowResize() {
    State.camera.aspect = window.innerWidth / window.innerHeight;
    State.camera.updateProjectionMatrix();
    State.renderer.setSize(window.innerWidth, window.innerHeight);
    LabelModule.updateHTMLLabelsPosition();
  }
};

// ======== MÓDULO DE ANIMACIÓN DE DATOS ========
const DataFlowAnimator = {
  isAnimating: false,
  
  startAnimation() {
    if (this.isAnimating) return;
    
    this.isAnimating = true;
    this.updateUI("Iniciando procesamiento...");
    this.resetOutputColors();
    this.animateConvolutionProcess();
  },

  animateConvolutionProcess() {
    // 1. Animar kernel
    this.animateKernel();
    
    // 2. Flujo a filtros
    setTimeout(() => {
      this.animateToFilters();
    }, 1000);
    
    // 3. Flujo completo
    setTimeout(() => {
      this.animateCompleteFlow();
    }, 3000);
  },

  animateKernel() {
    if (!State.layers.kernel) return;
    
    const startPos = State.layers.kernel.position.clone();
    const targetPos = startPos.clone();
    targetPos.x += 2;
    
    this.animateMovement(State.layers.kernel, startPos, targetPos, 1000, () => {
      this.animateMovement(State.layers.kernel, targetPos, startPos, 500);
    });
  },

  animateToFilters() {
    if (!State.layers.input[0] || !State.layers.convFilters.length) return;
    
    State.layers.convFilters.forEach((filter, index) => {
      for (let i = 0; i < 3; i++) {
        setTimeout(() => {
          this.createFlowParticle(
            State.layers.input[0].position,
            filter.position,
            [0xFF5252, 0x69F0AE, 0x448AFF][index]
          );
        }, i * 200);
      }
    });
  },

  animateCompleteFlow() {
    const totalSignals = 3;
    this.sendSignalsSequentially(totalSignals);
  },

  sendSignalsSequentially(total, current = 0) {
    if (current >= total) {
      setTimeout(() => {
        this.showFinalResult();
        this.isAnimating = false;
      }, 1000);
      return;
    }

    const signal = this.createSignal();
    const path = this.createSignalPath(current);
    
    this.animateSignalAlongPath(signal, path, () => {
      setTimeout(() => {
        this.sendSignalsSequentially(total, current + 1);
      }, 500);
    });
  },

  createSignal() {
    const geometry = new THREE.SphereGeometry(0.08, 8, 8);
    const material = new THREE.MeshBasicMaterial({ 
      color: CONFIG.COLORS.SIGNAL
    });
    const signal = new THREE.Mesh(geometry, material);
    signal.position.copy(State.layers.input[0].position);
    State.scene.add(signal);
    State.signals.push(signal);
    return signal;
  },

  createSignalPath(signalIndex) {
    const path = [];
    
    path.push(State.layers.input[0].position.clone());
    path.push(State.layers.convFilters[signalIndex % 3].position.clone());
    path.push(State.layers.featureMaps1[signalIndex % 3].position.clone());
    path.push(State.layers.relu1[signalIndex % 3].position.clone());
    path.push(State.layers.pool1[signalIndex % 3].position.clone());
    
    if (State.layers.conv2[0]) {
      path.push(State.layers.conv2[0].position.clone());
    }
    
    if (State.layers.pool2[0]) {
      path.push(State.layers.pool2[0].position.clone());
    }
    
    if (State.layers.flatten[signalIndex % 5]) {
      path.push(State.layers.flatten[signalIndex % 5].position.clone());
    }
    
    if (State.layers.fc[signalIndex % 4]) {
      path.push(State.layers.fc[signalIndex % 4].position.clone());
    }
    
    const outputIndex = signalIndex % 3;
    if (State.layers.output[outputIndex]) {
      path.push(State.layers.output[outputIndex].position.clone());
    }
    
    return path;
  },

  animateSignalAlongPath(signal, path, onComplete) {
    let currentSegment = 0;
    
    const animateSegment = () => {
      if (currentSegment >= path.length - 1) {
        this.cleanupSignal(signal);
        onComplete();
        return;
      }
      
      const startPos = path[currentSegment];
      const endPos = path[currentSegment + 1];
      let progress = 0;
      
      const animate = () => {
        if (progress <= 1) {
          signal.position.lerpVectors(startPos, endPos, progress);
          progress += 0.03;
          requestAnimationFrame(animate);
        } else {
          currentSegment++;
          animateSegment();
        }
      };
      
      animate();
    };
    
    animateSegment();
  },

  createFlowParticle(startPos, endPos, color) {
    const geometry = new THREE.SphereGeometry(0.05, 6, 6);
    const material = new THREE.MeshBasicMaterial({ color: color });
    const particle = new THREE.Mesh(geometry, material);
    particle.position.copy(startPos);
    State.scene.add(particle);
    
    let progress = 0;
    const animate = () => {
      if (progress <= 1) {
        particle.position.lerpVectors(startPos, endPos, progress);
        progress += 0.04;
        requestAnimationFrame(animate);
      } else {
        State.scene.remove(particle);
      }
    };
    animate();
  },

  animateMovement(object, startPos, endPos, duration, onComplete) {
    let startTime = null;
    
    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      object.position.lerpVectors(startPos, endPos, progress);
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      } else if (onComplete) {
        onComplete();
      }
    };
    
    requestAnimationFrame(animate);
  },

  cleanupSignal(signal) {
    State.scene.remove(signal);
    const index = State.signals.indexOf(signal);
    if (index > -1) {
      State.signals.splice(index, 1);
    }
  },

  resetOutputColors() {
    State.layers.output.forEach(node => {
      node.material.color.setHex(CONFIG.COLORS.OUTPUT_LAYER);
    });
  },

  showFinalResult() {
    // Resaltar "Zebra"
    if (State.layers.output[1]) {
      State.layers.output[1].material.color.setHex(0x00FF00);
    }
    
    this.updateUI("<strong>✅ Resultado:</strong> Zebra detectada 🦓");
  },

  updateUI(text) {
    const resultElement = document.getElementById('resultado');
    if (resultElement) {
      resultElement.innerHTML = text;
    }
  }
};

// ======== MÓDULO DE ANIMACIÓN PRINCIPAL ========
const AnimationLoop = {
  clock: new THREE.Clock(),
  
  start() {
    this.animate();
  },

  animate() {
    requestAnimationFrame(() => this.animate());
    
    const deltaTime = this.clock.getDelta();
    
    // Actualizar controles
    if (State.controls && State.controls.update) {
      State.controls.update();
    }
    
    // Actualizar etiquetas HTML
    LabelModule.updateHTMLLabelsPosition();
    
    // Actualizar animaciones ReLU
    if (State.layers.relu1) {
      State.layers.relu1.forEach((layer) => {
        if (layer.userData) {
          layer.userData.blinkTime += deltaTime;
          
          if (layer.userData.blinkTime > layer.userData.blinkInterval) {
            layer.userData.isActive = !layer.userData.isActive;
            layer.material.color.setHex(
              layer.userData.isActive 
                ? CONFIG.COLORS.RELU_ACTIVE 
                : CONFIG.COLORS.RELU_INACTIVE
            );
            layer.userData.blinkTime = 0;
            layer.userData.blinkInterval = Math.random() * 1.5 + 0.5;
          }
        }
      });
    }
    
    // Renderizar
    if (State.renderer && State.scene && State.camera) {
      State.renderer.render(State.scene, State.camera);
    }
  }
};

// ======== MÓDULO DE INTERFAZ DE USUARIO ========
const UIModule = {
  init() {
    this.createUIContainer();
    this.createResultDisplay();
    this.setupEventHandlers();
  },

  createUIContainer() {
    const ui = document.createElement('div');
    ui.id = 'cnn-ui';
    ui.style.cssText = `
      position: absolute;
      top: 20px;
      left: 20px;
      background: rgba(0,0,0,0.8);
      color: white;
      padding: 15px;
      border-radius: 10px;
      font-family: Arial, sans-serif;
      max-width: 350px;
      border: 1px solid rgba(255,255,255,0.2);
      z-index: 1001;
    `;
    
    ui.innerHTML = `
      <h3 style="margin: 0 0 10px 0; color: #4FC3F7;">
        🧠 CNN Visualization
      </h3>
      <p style="margin: 0 0 15px 0; font-size: 14px; color: #ccc;">
        Visualización de Red Neuronal Convolucional
      </p>
      <button id="start-classification" 
              style="padding: 10px 20px; 
                     background: #4CAF50; 
                     color: white; 
                     border: none; 
                     border-radius: 5px; 
                     cursor: pointer;
                     font-weight: bold;
                     width: 100%;
                     margin-bottom: 10px;">
        🚀 Iniciar Clasificación
      </button>
      <div id="resultado" style="padding: 10px; background: rgba(0,0,0,0.3); border-radius: 5px; border-left: 3px solid #4CAF50;">
        Esperando inicio...
      </div>
      <div style="margin-top: 15px; font-size: 12px; color: #888;">
        <div>🟦 Input Layer</div>
        <div>🟨 Kernel</div>
        <div>🔴🟢🔵 Convolution Filters</div>
        <div>🟠 Feature Maps</div>
        <div>⚡ ReLU Activation</div>
        <div>🟡 Pooling</div>
      </div>
    `;
    
    document.body.appendChild(ui);
  },

  createResultDisplay() {
    // Ya creado en el contenedor
  },

  setupEventHandlers() {
    document.getElementById('start-classification').addEventListener('click', () => {
      DataFlowAnimator.startAnimation();
    });
  }
};

// ======== INICIALIZACIÓN DE LA APLICACIÓN ========
class CNNVisualizer {
  constructor() {
    this.initialize();
  }

  initialize() {
    try {
      // Verificar Three.js
      if (typeof THREE === 'undefined') {
        throw new Error('Three.js no está cargado');
      }
      
      // Verificar versión
      console.log('Three.js version:', THREE.REVISION);
      
      // Verificar contenedor
      const container = document.getElementById('container');
      if (!container) {
        throw new Error('No se encontró el elemento con id "container"');
      }
      
      // Inicializar
      InitializationModule.init();
      LayerBuilder.createAllLayers();
      UIModule.init();
      AnimationLoop.start();
      
      console.log('✅ CNN Visualizer inicializado correctamente');
      
    } catch (error) {
      console.error('❌ Error:', error);
      alert('Error: ' + error.message);
    }
  }
}

// ======== INICIAR APLICACIÓN ========
document.addEventListener('DOMContentLoaded', () => {
  // Estilos globales
  const style = document.createElement('style');
  style.textContent = `
    body { 
      margin: 0; 
      overflow: hidden; 
      font-family: Arial, sans-serif;
      background: #333;
    }
    #container { 
      width: 100vw; 
      height: 100vh; 
      display: block; 
    }
    .layer-label, .section-label {
      transition: opacity 0.3s;
    }
  `;
  document.head.appendChild(style);
  
  // Iniciar
  new CNNVisualizer();
});

// Para debugging
window.CNNVisualizer = {
  State,
  CONFIG
};