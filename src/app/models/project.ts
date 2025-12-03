export interface Project {
  title: string;
  description: string;
  image: string; // Ruta de la imagen
  tags: string[]; // Ej: ['Angular', 'Django']
  link?: string; // Opcional: link al detalle o repo
}