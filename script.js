// ======== MÓDULO CONFIGURACIÓN ========
const CONFIG = {
  COLORS: {
    BACKGROUND: 0x333333,//color de fondo
    INPUT_LAYER: 0x4FC3F7, 
    KERNEL: 0xFFFF00,
    INPUT_RED: 0xFF5252,
    INPUT_GREEN: 0x69F0AE,
    INPUT_BLUE: 0x448AFF,
    CONV_FILTER_1: 0xFF9800,
    CONV_FILTER_2: 0xFFB74D,
    CONV_FILTER_3: 0xFFCC80,
    CONV_FILTER_4: 0xFFE0B2,
    CONV_FILTER_5: 0xFFECB3,
    CONV_FILTER_6: 0xFFF8E1,
    ///mapas de caracteriticas
    FEATURE_MAP: 0x4CAF50,
    //SIMULACION DEL RELU
    RELU_ACTIVE: 0x00E676,
    RELU_INACTIVE: 0xFF5252,

    POOL_LAYER: 0xFFC107,
    FLATTEN_LAYER: 0x8BC34A,
    //BOLITAS
    FC_LAYER: 0x9C27B0,
    
    OUTPUT_LAYER: 0xE91E63,
    
    SIGNAL_RED: 0xFF5252,
    SIGNAL_GREEN: 0x69F0AE,
    SIGNAL_BLUE: 0x448AFF,
    //lineas de conexion
    CONNECTION: 0XFFFFFF
  },
  LAYER_SIZES: {
    //ANCHO , ALTO, GROSOR
    INPUT_CHANNEL: { width: 3, height: 3, depth: 0.3 },
    KERNEL: { width: 0.6, height: 0.6, depth: 0.5 },
    //TAMAÑOS DE LOS FILTROS
    CONV1_FILTER: { width: 1.4, height: 1.5, depth: 0.3 },
    FEATURE_MAP_1: { width: 2, height: 2, depth: 0.2 },
    CONV2_FILTER: { width: 1.2, height: 1.2, depth: 0.25 },
    FEATURE_MAP_2: { width: 1.5, height: 1.5, depth: 0.18 },
    //TAMAÑO DE LSO MASPA TRAS POLING
    POOL_1: { width: 1, height: 1, depth: 0.15 },
    POOL_2: { width: 0.8, height: 0.8, depth: 0.12 },
    FLATTEN: { width: 0.25, height: 0.25, depth: 0.1 },
    //RADIO DE LAS BOLITAS O NEURONAS
    FC_NEURON: { radius: 0.15 },
    //ETIQUETA DE SALIDA
    OUTPUT: { width: 1.2, height: 0.6, depth: 0.5 }
  },
  //TODAS LAS POSICIONES
  LAYER_POSITIONS: {
    
    INPUT_CHANNELS: [
      { x: -15, y: 0, z: -0.8 },
      { x: -15, y: 0, z: 0 },
      { x: -15, y: 0, z: 0.8 }
    ],
    
    KERNEL: { x: -16, y: 0, z:0.8 },
    
    CONV1_FILTERS: [
      { x: -11, y: 0, z: -1.5 },
      { x: -11, y: 0, z: -0.9 },
      { x: -11, y: 0, z: -0.3 },
      { x: -11, y: 0, z: 0.3 },
      { x: -11, y: 0, z: 0.9 },
      { x: -11, y: 0, z: 1.5 }
    ],
    
    FEATURE_MAPS_1: [
      { x: -8, y: 0, z: -1.5 },
      { x: -8, y: 0, z: -0.9 },
      { x: -8, y: 0, z: -0.3 },
      { x: -8, y: 0, z: 0.3 },
      { x: -8, y: 0, z: 0.9 },
      { x: -8, y: 0, z: 1.5 }
    ],
    
    RELU_1: [
      { x: -6, y: 0, z: -1.5 },
      { x: -6, y: 0, z: -0.9 },
      { x: -6, y: 0, z: -0.3 },
      { x: -6, y: 0, z: 0.3 },
      { x: -6, y: 0, z: 0.9 },
      { x: -6, y: 0, z: 1.5 }
    ],
    
    POOL_1: [
      { x: -4, y: 0, z: -1.5 },
      { x: -4, y: 0, z: -0.9 },
      { x: -4, y: 0, z: -0.3 },
      { x: -4, y: 0, z: 0.3 },
      { x: -4, y: 0, z: 0.9 },
      { x: -4, y: 0, z: 1.5 }
    ],
    
    CONV2_FILTERS: [
      { x: -2, y: 0, z: -2.1 },
      { x: -2, y: 0, z: -1.5 },
      { x: -2, y: 0, z: -0.9 },
      { x: -2, y: 0, z: -0.3 },
      { x: -2, y: 0, z: 0.3 },
      { x: -2, y: 0, z: 0.9 },
      { x: -2, y: 0, z: 1.5 },
      { x: -2, y: 0, z: 2.1 },
      { x: -2, y: 0, z: -2.7 },
      { x: -2, y: 0, z: -1.8 },
      { x: -2, y: 0, z: 1.8 },
      { x: -2, y: 0, z: 2.7 }
    ],
    
    FEATURE_MAPS_2: [
      { x: 1, y: 0, z: -2.1 },
      { x: 1, y: 0, z: -1.5 },
      { x: 1, y: 0, z: -0.9 },
      { x: 1, y: 0, z: -0.3 },
      { x: 1, y: 0, z: 0.3 },
      { x: 1, y: 0, z: 0.9 },
      { x: 1, y: 0, z: 1.5 },
      { x: 1, y: 0, z: 2.1 },
      { x: 1, y: 0, z: -2.7 },
      { x: 1, y: 0, z: -1.8 },
      { x: 1, y: 0, z: 1.8 },
      { x: 1, y: 0, z: 2.7 }
    ],
    POOL_2: [
      { x: 3, y: 0, z: -2.1 },
      { x: 3, y: 0, z: -1.5 },
      { x: 3, y: 0, z: -0.9 },
      { x: 3, y: 0, z: -0.3 },
      { x: 3, y: 0, z: 0.3 },
      { x: 3, y: 0, z: 0.9 },
      { x: 3, y: 0, z: 1.5 },
      { x: 3, y: 0, z: 2.1 },
      { x: 3, y: 0, z: -2.7 },
      { x: 3, y: 0, z: -1.8 },
      { x: 3, y: 0, z: 1.8 },
      { x: 3, y: 0, z: 2.7 }
    ],
    FLATTEN_GRID: Array.from({length: 12}, (_, i) => ({
      x: 5,             // todos en el mismo X
      y: i * 0.3,       // avanza en Y
      z: 0
    })),
    FC_COLUMNS: {
      // Columna 1: 11 neuronas 
      COL1: Array.from({length: 11}, (_, i) => ({
        x: 8,
        y: (i - 5) * 0.45,  
        z: 0
      })),
      // Columna 2: 7 neuronas 
      COL2: Array.from({length: 7}, (_, i) => ({
        x: 9,  
        y: (i - 3) * 0.45,  
        z: 0
      })),
      // Columna 3: 5 neuronas
      COL3: Array.from({length: 5}, (_, i) => ({
        x: 10,  
        y: (i - 2) * 0.45,  
        z: 0
      })),
      // Columna 4: 3 neuronas
      COL4: Array.from({length: 3}, (_, i) => ({
        x: 11,  
        y: (i - 1) * 0.45,  
        z: 0
      }))
    },
 
    OUTPUT_CLASSES: [
      { x: 13, y: -0.8, z: 0 },  
      { x: 13, y: 0, z: 0 },    
      { x: 13, y: 0.8, z: 0 }   
    ]
  },
  
  OUTPUT_LABELS: ["Caballo", "Cebra", "Perro"],
  
  ACTIVATION: {
    SIZE: { width: 0.35, height: 1, depth: 0.05 }
  }
};

// ======== MÓDULO GLOBAL ========
const State = {
  scene: null,
  camera: null,
  renderer: null,
  controls: null,
  layers: {
    //LA ENTRADA
    inputImage:[],
    inputChannels: [],
    kernel: null,
    conv1Filters: [],
    featureMaps1: [],
    relu1: [],
    pool1: [],
    conv2Filters: [],
    featureMaps2: [],
    pool2: [],
    flatten: [],
    fcColumn1: [],  // 11 neuronas
    fcColumn2: [],  // 7 neuronas
    fcColumn3: [],  // 5 neuronas
    fcColumn4: [],  // 3 neuronas
    outputClasses: []
    //CADA AARRAY  TIENE MESHES
  },
  //AQUI TENGO LAS CONEXIONES O LINEAS
  connections: [],
  //LAS ANIMACIONES
  signals: [],
  //LOS LABELS TEXTOS
  htmlLabels: []
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
      opacity: 0.9;
    `;
    
    document.body.appendChild(label);
    
    label.userData = { position3D };
    State.htmlLabels.push(label);
    
    return label;
  },
  //CAMBIAMOS LAS COORDENADAS EN 3D
  updateHTMLLabelsPosition() {
    if (!State.htmlLabels.length || !State.camera) return;
    
    State.htmlLabels.forEach(label => {
      const vector = new THREE.Vector3(
        label.userData.position3D.x,
        label.userData.position3D.y,
        label.userData.position3D.z
      );
      
      vector.project(State.camera);
      
      const widthHalf = window.innerWidth / 2;
      const heightHalf = window.innerHeight / 2;
      
      const x = (vector.x * widthHalf) + widthHalf;
      const y = -(vector.y * heightHalf) + heightHalf;
      
      label.style.left = `${x - label.offsetWidth / 2}px`;
      label.style.top = `${y - 20}px`;
      
      if (label.className.includes('section')) {
        label.style.color = '#ff0000ff';
        label.style.fontSize = '10px';
        label.style.background = 'rgba(0,0,0,0.8)';
        label.style.padding = '4px 8px';
        label.style.borderRadius = '4px';
      } else {
        label.style.color = '#FFFFFF';
        label.style.fontSize = '8px';
        label.style.background = 'rgba(0,0,0,0.6)';
        label.style.padding = '2px 6px';
        label.style.borderRadius = '3px';
      }
    });
  }
};
// ======== MÓDULO DE CREACIÓN DE CAPAS ========
const LayerBuilder = {
  createAllLayers() {
    this.createInputPrin();
    this.createInputSection();
    this.createConvolution1Section();
    this.createActivationSection();
    this.createPooling1Section();
    this.createConvolution2Section();
    this.createPooling2Section();
    this.createFlattenSection();
    this.createFullyConnectedSection();
    this.createOutputSection();
    this.createAllConnections();
  },
  createInputPrin() {
  // Label cerca del plano
  LabelModule.createHTMLLabel("INPUT", 
    { x: -19, y: 2, z: 0 }, 
    'section-label'
  );

  // Crear plano con imagen
  const geometry = new THREE.PlaneGeometry(3, 3);
  
  // Usar una imagen por defecto (puedes cambiarla por tu URL local)
  // Si usas localhost:3000, asegúrate de que el servidor esté corriendo
  const textureLoader = new THREE.TextureLoader();
  
  // URL de ejemplo (imagen de zorro de prueba)
  const testImageUrl = 'https://images.unsplash.com/photo-1550358864-518f202c02ba?w=300&h=300&fit=crop';
  
  // O usar una imagen local (descomenta esta línea y comenta la anterior)
  // const testImageUrl = 'http://localhost:3000/imagen/cebra.jpg';
  
  const texture = textureLoader.load(
    testImageUrl,
    // Función cuando se carga
    () => {
      console.log('Imagen cargada correctamente');
    },
    // Función de progreso
    undefined,
    // Función de error
    (error) => {
      console.error('Error cargando imagen:', error);
      
      // Crear imagen por defecto si falla
      const canvas = document.createElement('canvas');
      canvas.width = 256;
      canvas.height = 256;
      const context = canvas.getContext('2d');
      
      // Fondo
      context.fillStyle = '#4FC3F7';
      context.fillRect(0, 0, 256, 256);
      
      // Texto
      context.fillStyle = 'white';
      context.font = '30px Arial';
      context.textAlign = 'center';
      context.fillText('CNN VISUAL', 128, 100);
      context.font = '20px Arial';
      context.fillText('Imagen de entrada', 128, 140);
      context.fillText('3 canales RGB', 128, 170);
      
      const defaultTexture = new THREE.CanvasTexture(canvas);
      material.map = defaultTexture;
      material.needsUpdate = true;
    }
  );

  const material = new THREE.MeshBasicMaterial({
    map: texture,
    side: THREE.DoubleSide,
    transparent: true,
    opacity: 0.9
  });

  const plane = new THREE.Mesh(geometry, material);
  plane.position.set(-19, 0, 0);
  plane.userData = { type: 'inputImage' };
  State.scene.add(plane);

  State.layers.inputImage = plane;
  
  // Añadir etiqueta de imagen
  LabelModule.createHTMLLabel("Imagen: Cebra", 
    { x: -19, y: -1.8, z: 0 }
  );
},


  createInputSection() {
    LabelModule.createHTMLLabel("CONVOLUCION", 
      { x: CONFIG.LAYER_POSITIONS.INPUT_CHANNELS[1].x, y: 2, z: 0 }, 
      'section-label'
    );
    
    const channelColors = [
      CONFIG.COLORS.INPUT_RED,
      CONFIG.COLORS.INPUT_GREEN,
      CONFIG.COLORS.INPUT_BLUE
    ];
    
    const channelNames = ["R", "G", "B"];
    
    CONFIG.LAYER_POSITIONS.INPUT_CHANNELS.forEach((position, index) => {
      //AQUI CREAMOS EL CON OX GEOMETRY
      const channel = this.createBoxLayer(
        CONFIG.LAYER_SIZES.INPUT_CHANNEL,//TAMAÑO
        channelColors[index],//COLOR SEGUN EL INDICE
        0.9,//OPACIDAD
        position//POSICION
      );
      State.layers.inputChannels.push(channel);
      
      LabelModule.createHTMLLabel(channelNames[index], 
        { x: position.x, y: position.y - 1, z: position.z }
      );
    });
    
    const kernel = this.createBoxLayer(
      CONFIG.LAYER_SIZES.KERNEL,
      CONFIG.COLORS.KERNEL,
      0.7,
      CONFIG.LAYER_POSITIONS.KERNEL
    );
    kernel.material.side = THREE.DoubleSide;
    State.layers.kernel = kernel;
    
    LabelModule.createHTMLLabel("Kernel 3x3", 
      { x: CONFIG.LAYER_POSITIONS.KERNEL.x, y: -0.8, z: 0 }
    );
    
  },

  createConvolution1Section() {
    LabelModule.createHTMLLabel("CONVOLUCION", 
      { x: CONFIG.LAYER_POSITIONS.CONV1_FILTERS[3].x, y: 2, z: 0 }, 
      'section-label'
    );
    
    const conv1Colors = [
      CONFIG.COLORS.CONV_FILTER_1,
      CONFIG.COLORS.CONV_FILTER_2,
      CONFIG.COLORS.CONV_FILTER_3,
      CONFIG.COLORS.CONV_FILTER_4,
      CONFIG.COLORS.CONV_FILTER_5,
      CONFIG.COLORS.CONV_FILTER_6
    ];
    
    CONFIG.LAYER_POSITIONS.CONV1_FILTERS.forEach((position, index) => {
      const filter = this.createBoxLayer(
        CONFIG.LAYER_SIZES.CONV1_FILTER,
        conv1Colors[index],
        0.8,
        position
      );
      State.layers.conv1Filters.push(filter);
      
      LabelModule.createHTMLLabel(`Filter ${index + 1}`, 
        { x: position.x, y: position.y - 0.8, z: position.z }
      );
    });
    
    LabelModule.createHTMLLabel("FEATURE MAPS", 
      { x: CONFIG.LAYER_POSITIONS.FEATURE_MAPS_1[3].x, y: 2, z: 0 }, 
      'section-label'
    );
    
    CONFIG.LAYER_POSITIONS.FEATURE_MAPS_1.forEach((position, index) => {
      const featureMap = this.createBoxLayer(
        CONFIG.LAYER_SIZES.FEATURE_MAP_1,
        CONFIG.COLORS.FEATURE_MAP,
        0.7,
        position
      );
      State.layers.featureMaps1.push(featureMap);
    });
  },

  createActivationSection() {
    LabelModule.createHTMLLabel("ReLU ACTIVACION", 
      { x: CONFIG.LAYER_POSITIONS.RELU_1[3].x, y: 2, z: 0 }, 
      'section-label'
    );
    
    CONFIG.LAYER_POSITIONS.RELU_1.forEach((position, index) => {
      const relu = this.createActivationLayer(position, index);
      State.layers.relu1.push(relu);
    });
  },

  createActivationLayer(position, index) {
    const geometry = new THREE.PlaneGeometry(
      CONFIG.ACTIVATION.SIZE.width,
      CONFIG.ACTIVATION.SIZE.height
    );
    //NO DEPENDE DE LUCES SIEMPRE VISIBLE
    const material = new THREE.MeshBasicMaterial({
      color: index % 3 === 0 ? CONFIG.COLORS.RELU_ACTIVE : CONFIG.COLORS.RELU_INACTIVE,
      transparent: true,
      opacity: 0.7,
      side: THREE.DoubleSide
    });
    
    const plane = new THREE.Mesh(geometry, material);
    plane.position.set(position.x, position.y, position.z);
    plane.rotation.y = Math.PI / 2;
    
    plane.userData = {
      blinkInterval: Math.random() * 1.5 + 0.5,
      blinkTime: 0,
      isActive: true
    };
    
    State.scene.add(plane);
    return plane;
  },

  createPooling1Section() {
    LabelModule.createHTMLLabel("MAX POOLING", 
      { x: CONFIG.LAYER_POSITIONS.POOL_1[3].x, y: 2, z: 0 }, 
      'section-label'
    );
    
    CONFIG.LAYER_POSITIONS.POOL_1.forEach((position, index) => {
      const pool = this.createBoxLayer(
        CONFIG.LAYER_SIZES.POOL_1,
        CONFIG.COLORS.POOL_LAYER,
        0.6,
        position
      );
      State.layers.pool1.push(pool);
    });
  },

  createConvolution2Section() {
    LabelModule.createHTMLLabel("CONVOLUCION", 
      { x: CONFIG.LAYER_POSITIONS.CONV2_FILTERS[6].x, y: 2, z: 0 }, 
      'section-label'
    );
    
    CONFIG.LAYER_POSITIONS.CONV2_FILTERS.forEach((position, index) => {
      const colorIndex = index % 6;
      const filterColors = [
        CONFIG.COLORS.CONV_FILTER_1,
        CONFIG.COLORS.CONV_FILTER_2,
        CONFIG.COLORS.CONV_FILTER_3,
        CONFIG.COLORS.CONV_FILTER_4,
        CONFIG.COLORS.CONV_FILTER_5,
        CONFIG.COLORS.CONV_FILTER_6
      ];
      
      const filter = this.createBoxLayer(
        CONFIG.LAYER_SIZES.CONV2_FILTER,
        filterColors[colorIndex],
        0.75,
        position
      );
      State.layers.conv2Filters.push(filter);
    });
    
    LabelModule.createHTMLLabel("FEATURE MAPS 2", 
      { x: CONFIG.LAYER_POSITIONS.FEATURE_MAPS_2[6].x, y: 2, z: 0 }, 
      'section-label'
    );
    
    CONFIG.LAYER_POSITIONS.FEATURE_MAPS_2.forEach((position, index) => {
      const featureMap = this.createBoxLayer(
        CONFIG.LAYER_SIZES.FEATURE_MAP_2,
        CONFIG.COLORS.FEATURE_MAP,
        0.65,
        position
      );
      State.layers.featureMaps2.push(featureMap);
    });
  },

  createPooling2Section() {
    LabelModule.createHTMLLabel("MAX POOLING", 
      { x: CONFIG.LAYER_POSITIONS.POOL_2[6].x, y: 2, z: 0 }, 
      'section-label'
    );
    
    CONFIG.LAYER_POSITIONS.POOL_2.forEach((position, index) => {
      const pool = this.createBoxLayer(
        CONFIG.LAYER_SIZES.POOL_2,
        CONFIG.COLORS.POOL_LAYER,
        0.55,
        position
      );
      State.layers.pool2.push(pool);
    });
  },

  createFlattenSection() {
    LabelModule.createHTMLLabel("FLATTEN", 
      { x: 5, y: 2, z: 0 }, 
      'section-label'
    );
    
    CONFIG.LAYER_POSITIONS.FLATTEN_GRID.forEach((position, index) => {
      const neuron = this.createBoxLayer(
        CONFIG.LAYER_SIZES.FLATTEN,
        CONFIG.COLORS.FLATTEN_LAYER,
        0.7,
        position
      );
      State.layers.flatten.push(neuron);
    });
  },

  createFullyConnectedSection() {
    LabelModule.createHTMLLabel("FULLY CONNECTED", 
      { x: 8.5, y: 3, z: 0 },  // Ajustar posición Y para mayor espacio
      'section-label'
    );
    

    // Crear Columna 1: 11 neuronas
    CONFIG.LAYER_POSITIONS.FC_COLUMNS.COL1.forEach((position, index) => {
      const neuron = new THREE.Mesh(
        new THREE.SphereGeometry(CONFIG.LAYER_SIZES.FC_NEURON.radius, 12, 12),
        new THREE.MeshPhongMaterial({ 
          color: CONFIG.COLORS.FC_LAYER,
          shininess: 100
        })
      );
      neuron.position.set(position.x, position.y, position.z);
      State.scene.add(neuron);
      State.layers.fcColumn1.push(neuron);
    });
    
    // Crear Columna 2: 7 neuronas
    CONFIG.LAYER_POSITIONS.FC_COLUMNS.COL2.forEach((position, index) => {
      const neuron = new THREE.Mesh(
        new THREE.SphereGeometry(CONFIG.LAYER_SIZES.FC_NEURON.radius, 12, 12),
        new THREE.MeshPhongMaterial({ 
          color: CONFIG.COLORS.FC_LAYER,
          shininess: 100
        })
      );
      neuron.position.set(position.x, position.y, position.z);
      State.scene.add(neuron);
      State.layers.fcColumn2.push(neuron);
    });
    
    // Crear Columna 3: 5 neuronas
    CONFIG.LAYER_POSITIONS.FC_COLUMNS.COL3.forEach((position, index) => {
      const neuron = new THREE.Mesh(
        new THREE.SphereGeometry(CONFIG.LAYER_SIZES.FC_NEURON.radius, 12, 12),
        new THREE.MeshPhongMaterial({ 
          color: CONFIG.COLORS.FC_LAYER,
          shininess: 100
        })
      );
      neuron.position.set(position.x, position.y, position.z);
      State.scene.add(neuron);
      State.layers.fcColumn3.push(neuron);
    });
    
    // Crear Columna 4: 3 neuronas
    CONFIG.LAYER_POSITIONS.FC_COLUMNS.COL4.forEach((position, index) => {
      const neuron = new THREE.Mesh(
        new THREE.SphereGeometry(CONFIG.LAYER_SIZES.FC_NEURON.radius, 12, 12),
        new THREE.MeshPhongMaterial({ 
          color: CONFIG.COLORS.FC_LAYER,
          shininess: 100
        })
      );
      neuron.position.set(position.x, position.y, position.z);
      State.scene.add(neuron);
      State.layers.fcColumn4.push(neuron);
    });
  },

  createOutputSection() {
    LabelModule.createHTMLLabel("OUTPUT LAYER", 
      { x: 13, y: 2, z: 0 }, 
      'section-label'
    );
    
    CONFIG.OUTPUT_LABELS.forEach((label, index) => {
      const output = this.createBoxLayer(
        CONFIG.LAYER_SIZES.OUTPUT,
        CONFIG.COLORS.OUTPUT_LAYER,
        0.9,
        CONFIG.LAYER_POSITIONS.OUTPUT_CLASSES[index]
      );
      State.layers.outputClasses.push(output);
      
      LabelModule.createHTMLLabel(label, 
        { 
          x: CONFIG.LAYER_POSITIONS.OUTPUT_CLASSES[index].x, 
          y: CONFIG.LAYER_POSITIONS.OUTPUT_CLASSES[index].y - 0.6, 
          z: 0 
        }
      );
    });
  },

  createBoxLayer(size, color, opacity, position) {
    const geometry = new THREE.BoxGeometry(size.width, size.height, size.depth);
    const material = new THREE.MeshPhongMaterial({ 
      color: color, 
      transparent: true, 
      opacity: opacity,
      shininess: 50
    });
    const mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(position.x, position.y, position.z);
    State.scene.add(mesh);
    return mesh;
  },

  createAllConnections() {
    // Conectar la imagen de entrada con cada canal RGB
  if (State.layers.inputImage) {
    State.layers.inputChannels.forEach(channel => {
      this.createConnection(State.layers.inputImage, channel);
    });
  }

    State.layers.inputChannels.forEach(channel => {
      State.layers.conv1Filters.forEach(filter => {
        this.createConnection(channel, filter);
      });
    });
    
    State.layers.conv1Filters.forEach((filter, index) => {
      if (State.layers.featureMaps1[index]) {
        this.createConnection(filter, State.layers.featureMaps1[index]);
      }
    });
    
    State.layers.featureMaps1.forEach((featureMap, index) => {
      if (State.layers.relu1[index]) {
        this.createConnection(featureMap, State.layers.relu1[index]);
      }
    });
    
    State.layers.relu1.forEach((relu, index) => {
      if (State.layers.pool1[index]) {
        this.createConnection(relu, State.layers.pool1[index]);
      }
    });
    
    State.layers.pool1.forEach(pool => {
      State.layers.conv2Filters.forEach(filter => {
        this.createConnection(pool, filter);
      });
    });
    
    State.layers.conv2Filters.forEach((filter, index) => {
      if (State.layers.featureMaps2[index]) {
        this.createConnection(filter, State.layers.featureMaps2[index]);
      }
    });
    
    State.layers.featureMaps2.forEach((featureMap, index) => {
      if (State.layers.pool2[index]) {
        this.createConnection(featureMap, State.layers.pool2[index]);
      }
    });
    
    State.layers.pool2.forEach((pool, index) => {
      if (State.layers.flatten[index]) {
        this.createConnection(pool, State.layers.flatten[index]);
      }
    });
    // ======== CONEXIONES FULLY CONNECTED (4 CAPAS) ========
    
    // Conexiones: Flatten → Columna 1 (12 flatten → 11 neuronas)
    State.layers.flatten.forEach(flatten => {
      State.layers.fcColumn1.forEach(neuron => {
        this.createConnection(flatten, neuron);
      });
    });
    
    // Conexiones BIDIRECCIONALES entre columnas adyacentes
    // Columna 1 ↔ Columna 2
    State.layers.fcColumn1.forEach(neuron1 => {
      State.layers.fcColumn2.forEach(neuron2 => {
        this.createConnection(neuron1, neuron2);
      });
    });
    
    // Columna 2 ↔ Columna 3 
    State.layers.fcColumn2.forEach(neuron1 => {
      State.layers.fcColumn3.forEach(neuron2 => {
        this.createConnection(neuron1, neuron2);
      });
    });
    
    // Columna 3 ↔ Columna 4 
    State.layers.fcColumn3.forEach(neuron1 => {
      State.layers.fcColumn4.forEach(neuron2 => {
        this.createConnection(neuron1, neuron2);
      });
    });
    
    // ======== CONEXIONES DIRECTAS COL4 ========
    // Bolita superior  -> HORSE 
    if (State.layers.fcColumn4[0] && State.layers.outputClasses[0]) {
      this.createConnection(State.layers.fcColumn4[0], State.layers.outputClasses[0]);
    }
    
    // Bolita medio  -> ZEBRA  
    if (State.layers.fcColumn4[1] && State.layers.outputClasses[1]) {
      this.createConnection(State.layers.fcColumn4[1], State.layers.outputClasses[1]);
    }
    
    // Bolita inferior  -> DOG 
    if (State.layers.fcColumn4[2] && State.layers.outputClasses[2]) {
      this.createConnection(State.layers.fcColumn4[2], State.layers.outputClasses[2]);
    }
  },

  createConnection(from, to, color = CONFIG.COLORS.CONNECTION) {
    const geometry = new THREE.Geometry();
    geometry.vertices.push(
      from.position.clone(),
      to.position.clone()
    );
    
    const material = new THREE.LineBasicMaterial({
      color: color,
      transparent: true,
      opacity: 0.15
    });
    
    const line = new THREE.Line(geometry, material);
    State.scene.add(line);
    State.connections.push(line);
  }

};



// ======== MÓDULO DE ANIMACIÓN DE DATOS ========
const DataFlowAnimator = {
  isAnimating: false,
  activeParticles: [],
  animationSpeed: 1,
  
  startAnimation() {
    if (this.isAnimating) return;
    
    this.isAnimating = true;
    this.updateStatusIndicator(true);
    this.updateUI(" Iniciando clasificación de imagen...");
    this.resetOutputColors();
    
    // Iniciar flujo por cada canal RGB
    this.animateRGBFlow();
  },

  updateAnimationSpeed(speed) {
    this.animationSpeed = speed;
  },

  updateStatusIndicator(isActive) {
    if (typeof window.updateStatusIndicator === 'function') {
      window.updateStatusIndicator(isActive);
    }
  },

  animateRGBFlow() {
    const channelColors = [
      { color: CONFIG.COLORS.SIGNAL_RED, name: "Rojo" },
      { color: CONFIG.COLORS.SIGNAL_GREEN, name: "Verde" },
      { color: CONFIG.COLORS.SIGNAL_BLUE, name: "Azul" }
    ];
    
    let channelIndex = 0;
    
    const animateNextChannel = () => {
      if (channelIndex >= channelColors.length) {
        this.updateUI("Canales RGB procesados. Combinando características...");
        setTimeout(() => {
          this.animateCompleteFlow();
        }, 1000 * this.animationSpeed);
        return;
      }
      
      const channelColor = channelColors[channelIndex];
      this.updateUI(`Procesando canal ${channelColor.name}...`);
      
      this.animateKernelOnChannel(channelIndex, () => {
        this.animateChannelToFilters(channelIndex, channelColor.color, () => {
          channelIndex++;
          setTimeout(animateNextChannel, 800 * this.animationSpeed);
        });
      });
    };
    
    animateNextChannel();
  },

  animateKernelOnChannel(channelIndex, onComplete) {
    if (!State.layers.kernel || !State.layers.inputChannels[channelIndex]) return;
    
    const kernel = State.layers.kernel;
    const channel = State.layers.inputChannels[channelIndex];
    
    const originalPos = kernel.position.clone();
    const targetPos = channel.position.clone();
    targetPos.x += 1;
    
    this.animateMovement(kernel, originalPos, targetPos, 800 * this.animationSpeed, () => {
      this.animateMovement(kernel, targetPos, originalPos, 500 * this.animationSpeed, onComplete);
    });
  },

  animateChannelToFilters(channelIndex, color, onComplete) {
    const channel = State.layers.inputChannels[channelIndex];
    if (!channel) return;
    
    let particlesSent = 0;
    const totalParticles = 4;
    
    const sendParticle = () => {
      if (particlesSent >= totalParticles) {
        onComplete();
        return;
      }
      
      const filterIndex = Math.floor(Math.random() * State.layers.conv1Filters.length);
      const filter = State.layers.conv1Filters[filterIndex];
      
      this.createAnimatedParticle(
        channel.position,
        filter.position,
        color,
        () => {
          particlesSent++;
          setTimeout(sendParticle, 200 * this.animationSpeed);
        }
      );
    };
    
    sendParticle();
  },

  animateCompleteFlow() {
    this.updateUI("Combinando características y propagando...");
    
    const selectedFeatures = [];
    for (let i = 0; i < 3; i++) {
      const filterIndex = Math.floor(Math.random() * State.layers.conv1Filters.length);
      const featureIndex = Math.floor(Math.random() * State.layers.featureMaps1.length);
      selectedFeatures.push({
        startFilter: filterIndex,
        featureIndex: featureIndex
      });
    }
    
    let featureIndex = 0;
    
    const animateNextFeature = () => {
      if (featureIndex >= selectedFeatures.length) {
        setTimeout(() => {
          this.showFinalResult();
          this.isAnimating = false;
          this.updateStatusIndicator(false);
        }, 1500 * this.animationSpeed);
        return;
      }
      
      const feature = selectedFeatures[featureIndex];
      this.animateSingleFeatureFlow(feature.startFilter, feature.featureIndex, () => {
        featureIndex++;
        setTimeout(animateNextFeature, 1000 * this.animationSpeed);
      });
    };
    
    animateNextFeature();
  },

  animateSingleFeatureFlow(startFilterIndex, featureIndex, onComplete) {
    const path = this.createRealisticPath(startFilterIndex, featureIndex);
    
    const particle = this.createSignalParticle(path[0], CONFIG.COLORS.SIGNAL_GREEN);
    
    this.animateParticleAlongPath(particle, path, () => {
      this.cleanupParticle(particle);
      onComplete();
    });
  },

  createRealisticPath(startFilterIndex, featureIndex) {
    const path = [];
    
    if (State.layers.conv1Filters[startFilterIndex]) {
      path.push(State.layers.conv1Filters[startFilterIndex].position.clone());
    }
    
    if (State.layers.featureMaps1[featureIndex]) {
      path.push(State.layers.featureMaps1[featureIndex].position.clone());
    }
    
    if (State.layers.relu1[featureIndex]) {
      path.push(State.layers.relu1[featureIndex].position.clone());
    }
    
    if (State.layers.pool1[featureIndex]) {
      path.push(State.layers.pool1[featureIndex].position.clone());
    }
    
    const conv2FilterIndex = Math.floor(Math.random() * State.layers.conv2Filters.length);
    if (State.layers.conv2Filters[conv2FilterIndex]) {
      path.push(State.layers.conv2Filters[conv2FilterIndex].position.clone());
    }
    
    if (State.layers.featureMaps2[conv2FilterIndex]) {
      path.push(State.layers.featureMaps2[conv2FilterIndex].position.clone());
    }
    
    if (State.layers.pool2[conv2FilterIndex]) {
      path.push(State.layers.pool2[conv2FilterIndex].position.clone());
    }

    if (State.layers.flatten[conv2FilterIndex]) {
      path.push(State.layers.flatten[conv2FilterIndex].position.clone());
    }
    
    // ======== NUEVA RUTA PARA LAS 4 CAPAS FULLY CONNECTED ========
    // El flujo pasa por UNA neurona aleatoria de cada columna
    const col1Index = Math.floor(Math.random() * State.layers.fcColumn1.length);
    if (State.layers.fcColumn1[col1Index]) {
      path.push(State.layers.fcColumn1[col1Index].position.clone());
    }
    
    const col2Index = Math.floor(Math.random() * State.layers.fcColumn2.length);
    if (State.layers.fcColumn2[col2Index]) {
      path.push(State.layers.fcColumn2[col2Index].position.clone());
    }
    
    const col3Index = Math.floor(Math.random() * State.layers.fcColumn3.length);
    if (State.layers.fcColumn3[col3Index]) {
      path.push(State.layers.fcColumn3[col3Index].position.clone());
    }
    
    const col4Index = Math.floor(Math.random() * State.layers.fcColumn4.length);
    if (State.layers.fcColumn4[col4Index]) {
      path.push(State.layers.fcColumn4[col4Index].position.clone());
    }
    
    if (State.layers.outputClasses[1]) {
      path.push(State.layers.outputClasses[1].position.clone());
    }
    return path;
  },

  createSignalParticle(position, color) {
    const geometry = new THREE.SphereGeometry(0.07, 10, 10);
    const material = new THREE.MeshBasicMaterial({ 
      color: color
    });
    const particle = new THREE.Mesh(geometry, material);
    particle.position.copy(position);
    State.scene.add(particle);
    State.signals.push(particle);
    this.activeParticles.push(particle);
    return particle;
  },

  createAnimatedParticle(startPos, endPos, color, onComplete) {
    const particle = this.createSignalParticle(startPos, color);
    
    let progress = 0;
    const speed = 0.03 * this.animationSpeed;
    
    const animate = () => {
      if (progress <= 1) {
        particle.position.lerpVectors(startPos, endPos, progress);
        progress += speed;
        requestAnimationFrame(animate);
      } else {
        this.cleanupParticle(particle);
        if (onComplete) onComplete();
      }
    };
    
    animate();
  },

  animateParticleAlongPath(particle, path, onComplete) {
    let currentSegment = 0;
    
    const animateSegment = () => {
      if (currentSegment >= path.length - 1) {
        this.createFlashEffect(particle.position);
        if (onComplete) onComplete();
        return;
      }
      
      const startPos = path[currentSegment];
      const endPos = path[currentSegment + 1];
      let progress = 0;
      const speed = 0.02 * this.animationSpeed;
      
      const animate = () => {
        if (progress <= 1) {
          particle.position.lerpVectors(startPos, endPos, progress);
          progress += speed;
          requestAnimationFrame(animate);
        } else {
          currentSegment++;
          setTimeout(animateSegment, 50 * this.animationSpeed);
        }
      };
      
      animate();
    };
    
    animateSegment();
  },

  createFlashEffect(position) {
    const flashGeometry = new THREE.SphereGeometry(0.15, 16, 16);
    const flashMaterial = new THREE.MeshBasicMaterial({
      color: 0xFFFFFF,
      transparent: true,
      opacity: 0.8
    });
    const flash = new THREE.Mesh(flashGeometry, flashMaterial);
    flash.position.copy(position);
    State.scene.add(flash);
    
    let scale = 1;
    let opacity = 0.8;
    
    const animateFlash = () => {
      scale += 0.1;
      opacity -= 0.05;
      flash.scale.setScalar(scale);
      flashMaterial.opacity = opacity;
      
      if (opacity > 0) {
        requestAnimationFrame(animateFlash);
      } else {
        State.scene.remove(flash);
      }
    };
    
    animateFlash();
  },

  animateMovement(object, startPos, endPos, duration, onComplete) {
    let startTime = null;
    
    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      const easedProgress = progress < 0.5 
        ? 2 * progress * progress 
        : -1 + (4 - 2 * progress) * progress;
      
      object.position.lerpVectors(startPos, endPos, easedProgress);
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      } else if (onComplete) {
        onComplete();
      }
    };
    
    requestAnimationFrame(animate);
  },

  cleanupParticle(particle) {
    State.scene.remove(particle);
    const index = State.signals.indexOf(particle);
    if (index > -1) {
      State.signals.splice(index, 1);
    }
    const activeIndex = this.activeParticles.indexOf(particle);
    if (activeIndex > -1) {
      this.activeParticles.splice(activeIndex, 1);
    }
  },
  resetOutputColors() {
    State.layers.outputClasses.forEach(output => {
      output.material.color.setHex(CONFIG.COLORS.OUTPUT_LAYER);
      output.scale.setScalar(1);
    });
    
    // Resetear secuencia de activación
    ActivationSequence.resetAll();
  },
  
  showFinalResult() {
    // 1. Iniciar secuencia de activación
    ActivationSequence.runSequence();
    
    // 3. Actualizar UI
    this.updateUI("<strong> CLASIFICACIÓN COMPLETA:</strong><br>La imagen ha sido identificada como <span style='color:#00FF00; font-weight:bold;'>ZEBRA</span> 🦓<br><small>Secuencia de activación: Col1 → Col2 → Col3 → Col4 → Output</small>");
    
    // 4. Marcar animación como completada después de la secuencia
    setTimeout(() => {
      this.isAnimating = false;
      this.updateStatusIndicator(false);
    },  10000);
  },

  updateUI(text) {
    const resultElement = document.getElementById('resultado');
    if (resultElement) {
      resultElement.innerHTML = text;
    }
  }
};
// ======== MÓDULO DE ACTIVACIÓN SECUENCIAL DE LUCES DE LA SECCION DE BOLITAS========
const ActivationSequence = {
  //definicion del color que cambiara cada neurona al activarse
  ACTIVATION_COLOR: 0xFFD700,
  // Neuronas fijas que se activarán en cada columna
  FIXED_NEURONS: {
    COL1: 8,  
    COL2: 1, 
    COL3: 4,  
    COL4: 1,  
    OUTPUT: 1
  },
  // Material original de las neuronas (para restaurar)
  originalMaterials: new Map(),
  
  // Activar una neurona específica
  activateNeuron(columnArray, index, color = this.ACTIVATION_COLOR) {
    if (!columnArray || !columnArray[index]) return;
    
    const neuron = columnArray[index];
    
    // Guardar material original si no está guardado
    if (!this.originalMaterials.has(neuron)) {
      this.originalMaterials.set(neuron, {
        color: neuron.material.color.getHex(),
        shininess: neuron.material.shininess
      });
    }
    
    // Cambiar a color de activación
    neuron.material.color.setHex(color);
    neuron.material.shininess = 150; 
    
    // Efecto de pulso
    neuron.userData = neuron.userData || {};
    neuron.userData.isActivated = true;
    neuron.userData.pulseTime = 0;
  },
  
  // Desactivar una neurona (volver al color original)
  deactivateNeuron(columnArray, index) {
    if (!columnArray || !columnArray[index]) return;
    
    const neuron = columnArray[index];
    const original = this.originalMaterials.get(neuron);
    
    if (original) {
      neuron.material.color.setHex(original.color);
      neuron.material.shininess = original.shininess;
    } else {
      // Si no hay original, volver al color morado por defecto
      neuron.material.color.setHex(CONFIG.COLORS.FC_LAYER);
      neuron.material.shininess = 100;
    }
    
    if (neuron.userData) {
      neuron.userData.isActivated = false;
    }
  },
  
  // Ejecutar secuencia completa de activación
  runSequence() {
    // Secuencia con delays (500ms entre cada paso)
    // Paso 1: Activar Columna 1
    setTimeout(() => {
      console.log(" Paso 1: Activando Col1[5]");
      this.activateNeuron(State.layers.fcColumn1, this.FIXED_NEURONS.COL1);
    }, 500);
    
    // Paso 2: Desactivar Col1 y activar Col2
    setTimeout(() => {
      console.log(" Paso 2: Col1[5] → OFF, Col2[3] → ON");
      this.deactivateNeuron(State.layers.fcColumn1, this.FIXED_NEURONS.COL1);
      this.activateNeuron(State.layers.fcColumn2, this.FIXED_NEURONS.COL2);
    }, 1000);
    
    // Paso 3: Desactivar Col2 y activar Col3
    setTimeout(() => {
      console.log(" Paso 3: Col2[3] → OFF, Col3[2] → ON");
      this.deactivateNeuron(State.layers.fcColumn2, this.FIXED_NEURONS.COL2);
      this.activateNeuron(State.layers.fcColumn3, this.FIXED_NEURONS.COL3);
    }, 1500);
    
    // Paso 4: Desactivar Col3 y activar Col4
    setTimeout(() => {
       console.log(" Paso 4: Col3[2] → OFF, Col4[1] → ON");
      this.deactivateNeuron(State.layers.fcColumn3, this.FIXED_NEURONS.COL3);
      this.activateNeuron(State.layers.fcColumn4, this.FIXED_NEURONS.COL4);
    }, 2000);
    
    // Paso 5: Desactivar Col4 y activar Output (ZEBRA)
    setTimeout(() => {
      console.log(" Paso 5: Col4[1] → OFF, Output[1] (ZEBRA) → ON");
      this.deactivateNeuron(State.layers.fcColumn4, this.FIXED_NEURONS.COL4);
      this.activateOutput();
    }, 2500);
  },
  
  // Activar el output (ZEBRA)
  activateOutput() {
    const zebraOutput = State.layers.outputClasses[this.FIXED_NEURONS.OUTPUT];
    if (zebraOutput) {
      // Guardar color original
      if (!this.originalMaterials.has(zebraOutput)) {
        this.originalMaterials.set(zebraOutput, {
          color: zebraOutput.material.color.getHex(),
          opacity: zebraOutput.material.opacity
        });
      }
      
      // Cambiar a color de activación (dorado)
      zebraOutput.material.color.setHex(this.ACTIVATION_COLOR);
      zebraOutput.material.opacity = 1.0;
      
      // CORRECCIÓN: Para BoxGeometry, escala es un Vector3, no tiene setScalar
      let pulseTime = 0;
      const originalScale = { 
        x: zebraOutput.scale.x, 
        y: zebraOutput.scale.y, 
        z: zebraOutput.scale.z 
      };
      
      const pulse = () => {
        pulseTime += 0.05;
        const intensity = 0.5 + 0.5 * Math.sin(pulseTime);
        const scale = 1 + intensity * 0.15;
        
        // Usar .scale.set() en lugar de .scale.setScalar()
        zebraOutput.scale.set(scale, scale, scale);
        
        if (pulseTime < 8) {
          requestAnimationFrame(pulse);
        } else {
          // Restaurar escala original
          zebraOutput.scale.set(originalScale.x, originalScale.y, originalScale.z);
        }
      };
      pulse();
    }
  },
  
  // Resetear todas las activaciones
  resetAll() {
    // Resetear neuronas FC
    [State.layers.fcColumn1, State.layers.fcColumn2, State.layers.fcColumn3, State.layers.fcColumn4].forEach(column => {
      if (column) {
        column.forEach((neuron, index) => {
          this.deactivateNeuron(column, index);
        });
      }
    });
    
    // Resetear outputs - CORRECCIÓN: los outputs son BoxGeometry, no SphereGeometry
    State.layers.outputClasses.forEach((output, index) => {
      const original = this.originalMaterials.get(output);
      if (original) {
        output.material.color.setHex(original.color);
        output.material.opacity = original.opacity;
      }
      // Para BoxGeometry, usar .scale.set(1, 1, 1) en lugar de .scale.setScalar(1)
      output.scale.set(1, 1, 1);
    });
    
    this.updateUI("<strong> CLASIFICACIÓN COMPLETA:</strong><br>La imagen ha sido identificada como <span style='color:#00FF00; font-weight:bold;'>ZEBRA</span> 🦓");
  },

  updateUI(text) {
    const resultElement = document.getElementById('resultado');
    if (resultElement) {
      resultElement.innerHTML = text;
    }
  }
};

// ======== MÓDULO DE INICIALIZACIÓN ========
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
    
    const gridHelper = new THREE.GridHelper(30, 30, 0x444444, 0x222222);
    gridHelper.position.y = -5;
    State.scene.add(gridHelper);
  },

  createCamera() {
    State.camera = new THREE.PerspectiveCamera(
      50, 
      window.innerWidth / window.innerHeight, 
      0.1, 
      1000
    );
    State.camera.position.set(0, 10, 30);
    State.camera.lookAt(0, 0, 0);
  },

  createRenderer() {
    // Configuración compatible con Three.js r71
    State.renderer = new THREE.WebGLRenderer({ 
      antialias: true, 
      alpha: true 
    });
    
    State.renderer.setSize(window.innerWidth, window.innerHeight);
    State.renderer.setPixelRatio(window.devicePixelRatio);
    
    // Para r71, la configuración de shadowMap es diferente
    State.renderer.shadowMapEnabled = true;  // En r71 es shadowMapEnabled, no shadowMap.enabled
    State.renderer.shadowMapType = THREE.PCFSoftShadowMap;
    
    document.getElementById('container').appendChild(State.renderer.domElement);
  },

  createControls() {
    try {
      State.controls = new THREE.OrbitControls(State.camera, State.renderer.domElement);
      State.controls.enableDamping = true;
      State.controls.dampingFactor = 0.1;
      State.controls.minDistance = 5;
      State.controls.maxDistance = 100;
      State.controls.maxPolarAngle = Math.PI / 2;
    } catch (error) {
      console.warn('OrbitControls no disponible:', error);
    }
  },

  addLights() {
    // Configuración de luces 
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(20, 20, 20);
    directionalLight.castShadow = true;
    
    // En r71, las propiedades del shadow map son diferentes
    directionalLight.shadowMapWidth = 2048;
    directionalLight.shadowMapHeight = 2048;
    directionalLight.shadowCameraNear = 0.5;
    directionalLight.shadowCameraFar = 500;
    directionalLight.shadowCameraLeft = -50;
    directionalLight.shadowCameraRight = 50;
    directionalLight.shadowCameraTop = 50;
    directionalLight.shadowCameraBottom = -50;
    
    State.scene.add(directionalLight);
    
    State.scene.add(new THREE.AmbientLight(0x404040));
    
    const fillLight = new THREE.DirectionalLight(0xffffff, 0.3);
    fillLight.position.set(-15, 10, -10);
    State.scene.add(fillLight);
    
    const backLight = new THREE.DirectionalLight(0xffffff, 0.2);
    backLight.position.set(0, 10, -20);
    State.scene.add(backLight);
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
// ======== MÓDULO DE ANIMACIÓN PRINCIPAL ========
const AnimationLoop = {
  clock: new THREE.Clock(),
  
  start() {
    this.animate();
  },

  animate() {
    requestAnimationFrame(() => this.animate());
    
    const deltaTime = this.clock.getDelta();
    
    if (State.controls && State.controls.update) {
      State.controls.update();
    }
    
    LabelModule.updateHTMLLabelsPosition();
    
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
          
          const blinkIntensity = 0.5 + 0.5 * Math.sin(layer.userData.blinkTime * 8);
          layer.material.opacity = 0.5 + 0.3 * blinkIntensity;
        }
      });
    }
    // ======== ANIMACIÓN DE LAS 4 COLUMNAS FULLY CONNECTED ========
    if (State.layers.fcColumn1) {
      State.layers.fcColumn1.forEach((neuron, index) => {
        neuron.rotation.x += deltaTime * 0.2;
        neuron.rotation.y += deltaTime * 0.3;
      });
    }
    
    if (State.layers.fcColumn2) {
      State.layers.fcColumn2.forEach((neuron, index) => {
        neuron.rotation.x += deltaTime * 0.25;
        neuron.rotation.y += deltaTime * 0.35;
      });
    }
    
    if (State.layers.fcColumn3) {
      State.layers.fcColumn3.forEach((neuron, index) => {
        neuron.rotation.x += deltaTime * 0.3;
        neuron.rotation.y += deltaTime * 0.4;
      });
    }

    if (State.layers.fcColumn4) {
      State.layers.fcColumn4.forEach((neuron, index) => {
        neuron.rotation.x += deltaTime * 0.35;
        neuron.rotation.y += deltaTime * 0.45;
      });
    }
    // ======== LOOP AUTOMÁTICO DE ACTIVACIÓN SECUENCIAL (INFINITO) ========
    if (window.ActivationSequence && !window.isSequenceRunning) {
      window.isSequenceRunning = true;
      console.log(" Iniciando loop infinito de activación secuencial...");
      
      // Función que se llama a sí misma infinitamente
      const startInfiniteLoop = () => {
        // Paso 1: Ejecutar secuencia
        console.log(" Ciclo " + (window.sequenceCycle = (window.sequenceCycle || 0) + 1));
        ActivationSequence.runSequence();
        
        // Paso 2: Esperar 8 segundos (3s secuencia + 5s pausa)
        setTimeout(() => {
          // Paso 3: Resetear todo
          console.log(" Reseteando para próximo ciclo...");
          ActivationSequence.resetAll();
          
          // Paso 4: Iniciar de nuevo inmediatamente
          startInfiniteLoop();
        }, 8000);
      };
      
      // Iniciar después de 2 segundos
      setTimeout(() => {
        startInfiniteLoop();
      }, 2000);
    }
    if (State.renderer && State.scene && State.camera) {
      State.renderer.render(State.scene, State.camera);
    }
  }
};
// ======== MÓDULO DE INTERFAZ DE USUARIO ========
const UIModule = {
  init() {
    this.setupEventHandlers();
    console.log(' UI Module inicializado');
  },

  setupEventHandlers() {
    // Botón de inicio de clasificación
    const startBtn = document.getElementById('start-classification');
    if (startBtn) {
      startBtn.addEventListener('click', () => {
        DataFlowAnimator.startAnimation();
      });
    }
    
    // Botón de reset (ya manejado en HTML)
    const resetBtn = document.getElementById('reset-view');
    if (resetBtn) {
      resetBtn.addEventListener('click', () => {
        if (typeof window.resetCamera === 'function') {
          window.resetCamera();
        }
      });
    }
    
  }
};
// ======== INICIALIZACIÓN DE LA APLICACIÓN ========
class CNNVisualizer {
  constructor() {
    this.initialize();
  }

  initialize() {
    try {
      if (typeof THREE === 'undefined') {
        throw new Error('Three.js no está cargado');
      }
      
      const container = document.getElementById('container');
      if (!container) {
        throw new Error('No se encontró el elemento con id "container"');
      }
      
      console.log(' Inicializando CNN 3D Visualizer...');
      
      InitializationModule.init();
      LayerBuilder.createAllLayers();
      UIModule.init();
      AnimationLoop.start();
      
      // Hacer módulos accesibles globalmente
      window.State = State;
      window.DataFlowAnimator = DataFlowAnimator;
      window.CONFIG = CONFIG;
      window.ActivationSequence = ActivationSequence; 
      window.isSequenceRunning = false; 
      window.sequenceCycle = 0; 
      
      console.log(' CNN 3D Visualizer inicializado correctamente');
      console.log(' Arquitectura:');
      console.log('  • Input: 3 canales RGB');
      console.log('  • Conv1: 6 filtros → 6 feature maps');
      console.log('  • ReLU: 6 activaciones');
      console.log('  • Pooling1: 6 capas');
      console.log('  • Conv2: 12 filtros → 12 feature maps');
      console.log('  • Pooling2: 12 capas');
      console.log('  • Flatten: 12 neuronas');
      console.log('  • Fully Connected: 11→7→5→3 neuronas (4 capas)');
      console.log('  • Output: 3 clases');
      
      DataFlowAnimator.updateStatusIndicator(false);
      
    } catch (error) {
      console.error(' Error:', error);
      this.showError(error.message);
    }
  }

  showError(message) {
    const errorDiv = document.createElement('div');
    errorDiv.style.cssText = `
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background: rgba(255, 50, 50, 0.9);
      color: white;
      padding: 30px;
      border-radius: 10px;
      z-index: 10000;
      text-align: center;
      max-width: 500px;
      box-shadow: 0 10px 30px rgba(0,0,0,0.5);
    `;
    errorDiv.innerHTML = `
      <h3 style="margin: 0 0 15px 0;"> Error de Inicialización</h3>
      <p style="margin: 0 0 20px 0;">${message}</p>
      <p style="font-size: 12px; color: rgba(255,255,255,0.8);">
        Verifica la consola del navegador para más detalles (F12 → Console)
      </p>
    `;
    document.body.appendChild(errorDiv);
  }
}
// ======== INICIAR APLICACIÓN ========
document.addEventListener('DOMContentLoaded', () => {
  // Estilos adicionales
  const style = document.createElement('style');
  style.textContent = `
    #container canvas {
      display: block;
    }
    
    .controls-panel {
      z-index: 1000 !important;
    }
  
    .layer-label, .section-label {
      z-index: 999 !important;
    }
    
    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(20px); }
      to { opacity: 1; transform: translateY(0); }
    }
    
    .controls-panel {
      animation: fadeIn 0.8s ease-out;
    }
  `;
  document.head.appendChild(style);
  new CNNVisualizer();
});