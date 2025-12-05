// app/app.config.ts
import { ApplicationConfig } from '@angular/core';
import { 
  provideRouter, 
  withComponentInputBinding, 
  withViewTransitions, 
  withHashLocation // <--- 1. IMPORTAR ESTO
} from '@angular/router';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(
      routes, 
      withComponentInputBinding(), 
      withViewTransitions(),
      withHashLocation() // <--- 2. AGREGARLO AQUÍ
    )
  ]
};