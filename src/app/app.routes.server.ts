// app.routes.server.ts
import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    path: '**',
    // CAMBIO CLAVE: De Prerender a Client
    // Esto le dice a Angular: "No intentes adivinar las rutas, deja que el navegador lo resuelva"
    renderMode: RenderMode.Client 
  }
];