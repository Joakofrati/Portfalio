export interface Project {
  id: string;               // Identificador para la URL
  title: string;
  description: string;      // Descripción corta (Card)
  fullDescription: string;  // Descripción larga (Detalle)
  image: string;            // Imagen principal
  tags: string[];
  link?: string;            // Link externo (opcional)
  
  // Nuevos campos opcionales
  gallery?: {
    src: string;
    caption: string;
  }[];

  features?: string[];
}