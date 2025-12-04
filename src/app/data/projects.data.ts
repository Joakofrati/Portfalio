import { Project } from '../models/project'; // Asegúrate que la ruta al modelo sea correcta

export const PROJECTS: Project[] = [
  {
    id: 'tracking-logistico',
    title: 'Tracking Logístico',
    description: 'Ecosistema Web y Móvil para gestión de flotas.',
    fullDescription: `Desarrollé una solución integral para resolver la falta de control en tiempo real de una empresa de transporte. 
      El sistema permite a los administradores monitorear viajes activos, gestionar choferes y exportar reportes de auditoría.
      
      Para la aplicación móvil, prioricé un diseño minimalista y libre de distracciones. Consciente de que el usuario opera desde la cabina de un camión, la interfaz evita la saturación de información, presentando solo los controles esenciales, logrando una interacción ágil. `,
    tags: ['Angular', 'Django', 'MySQL', 'ANDROID-STUDIO'],
    image: 'assets/logitrack.png', 
    link: '#',
    gallery: [
      { src: 'assets/admin.jpg', caption: 'Panel de Administración: Gestión de flota.' },
      { src: 'assets/chofer.jfif', caption: 'App Móvil: Reporte de viajes.' }
    ],
    features: [
      'Arquitectura Híbrida: Web (Admin) + App Android (Chofer).',
      'Optimización: Batching de coordenadas GPS en LocalStorage.',
      'Seguridad: Autenticación JWT y roles diferenciados.',
      'Reporting: Reportes exportables para auditoría.'
    ]
  },
  {
    id: 'editor-histologico',
    title: 'Editor Histológico IA',
    description: 'Herramienta médica con edición de canvas.',
    fullDescription: `
      Aplicación web diseñada para agilizar el diagnóstico patológico. 
      Combina un modelo de Inteligencia Artificial (U-Net) que pre-detecta células en imágenes de biopsias, con un editor gráfico tipo "Photoshop" que permite al médico corregir los resultados manualmente.
    `,
    tags: ['Angular', 'Python', 'MySQL', 'Cloudinary'],
    image: 'assets/tesis.png',
    link: '#',
    gallery: [], // Agrega fotos si tienes
    features: [
      'IA Integration: Procesamiento de imágenes con Python y OpenCV.',
      'Canvas Interactivo: Herramientas de dibujo (Lápiz, Goma) sobre la imagen.',
      'Optimización: Algoritmo de reducción de puntos para mejorar el rendimiento del navegador.',
      'Gestión de Estado: Sistema de Undo/Redo (Ctrl+Z) personalizado.'
    ]
  },
  {
    id: 'roguelike-deckbuilder',
    title: 'Roguelike Deckbuilder',
    description: 'Juego de estrategia complejo en Unity.',
    fullDescription: `
      Prototipo de un videojuego de estrategia que mezcla mecánicas de construcción de mazos con combate automático.
      Me encargué del diseño de la arquitectura del juego, separando la lógica de las cartas de la representación visual.
    `,
    tags: ['Unity', 'C#', 'Game Design'],
    image: 'assets/tcg.png',
    link: '#',
    gallery: [],
    features: [
      'Game Loop: Sistema de rondas y resolución de combate automático.',
      'Arquitectura Modular: ScriptableObjects para la gestión de datos de cartas.',
      'IA Enemiga: Lógica de toma de decisiones básica para oponentes.'
    ]
  },
  {
    id: 'simulador-campus',
    title: 'Simulador Campus',
    description: 'Gemelo digital interactivo.',
    fullDescription: `
      Simulación 3D del campus universitario creada en Unity. 
      Mi rol principal fue el desarrollo de la Interfaz de Usuario (UI) y los sistemas de navegación inteligente para guiar a los usuarios entre edificios.
    `,
    tags: ['Unity', '3D-Modeling', 'UI', 'C#'],
    image: 'assets/campus.png',
    link: '#',
    gallery: [],
    features: [
      'Pathfinding: Sistema de navegación NavMesh que respeta veredas y caminos.',
      'UI Contextual: Mapas dinámicos que cambian al entrar a edificios.',
      'Minimapa: Radar en tiempo real de la posición del usuario.'
    ]
  },
  {
    id: 'chatbot-automation',
    title: 'Chatbot Automation',
    description: 'Integración WhatsApp Business.',
    fullDescription: `
      Solución de automatización para una empresa de venta de equipamiento 4x4.
      Integra la API de WhatsApp Business para responder consultas frecuentes y calificar leads automáticamente antes de derivarlos a un vendedor humano.
    `,
    tags: ['API', 'Botconversa', 'Automation'],
    image: 'assets/botconversa.png',
    link: '#',
    gallery: [],
    features: [
      'Integración API: Conexión directa con WhatsApp Business.',
      'Flujos Lógicos: Árboles de decisión para clasificar la intención del cliente.',
      'Automatización: Respuestas 24/7 sin intervención humana.'
    ]
  },
  {
    id: 'scripts-tools',
    title: 'Scripts & Tools',
    description: 'Automatización con Python.',
    fullDescription: `
      Colección de scripts desarrollados para automatizar tareas repetitivas y conectar servicios.
      Incluye herramientas para procesar datos de APIs de música y cine, y generar playlists automáticas.
    `,
    tags: ['Python', 'Spotify API', 'ETL'],
    image: 'assets/scripts.png',
    link: '#',
    gallery: [],
    features: [
      'ETL: Extracción, limpieza y carga de datos entre APIs.',
      'Scripting: Automatización de flujos de trabajo personales.',
      'Manejo de Datos: Parsing y normalización de información JSON.'
    ]
  }
];