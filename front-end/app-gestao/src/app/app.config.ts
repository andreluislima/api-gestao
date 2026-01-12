import {
  ApplicationConfig,
  provideBrowserGlobalErrorListeners,
  provideZoneChangeDetection,
} from '@angular/core';

import { provideAnimations } from '@angular/platform-browser/animations';

import { provideHttpClient, withFetch } from '@angular/common/http';
import { provideRouter } from '@angular/router';

import { providePrimeNG } from 'primeng/config';
import Lara from '@primeuix/themes/lara';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(withFetch()),
    provideAnimations(), // ✅ necessário para overlays do PrimeNG

    // ✅ PrimeNG Theme
    providePrimeNG({
      theme: {
        preset: Lara,
        options: {
           darkModeSelector: '.p-dark'
        },
      },
    }),
  ],
};
