import { ApplicationConfig } from '@angular/core';
import { provideRouter, withComponentInputBinding, withViewTransitions } from '@angular/router';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    // withComponentInputBinding permite recibir el ID directamente como input (opcional pero util)
    // withViewTransitions hace que el cambio de pagina sea suave
    provideRouter(routes, withComponentInputBinding(), withViewTransitions())
  ]
};