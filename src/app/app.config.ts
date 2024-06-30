import {
  ApplicationConfig,
  importProvidersFrom,
  isDevMode,
} from '@angular/core'
import {
  provideRouter,
  withInMemoryScrolling,
  type InMemoryScrollingFeature,
  type InMemoryScrollingOptions,
} from '@angular/router'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { routes } from './app.routes'
import { StoreModule, provideStore } from '@ngrx/store'
import { provideEffects } from '@ngrx/effects'
import {
  HTTP_INTERCEPTORS,
  HttpClientModule,
  provideHttpClient,
  withFetch,
} from '@angular/common/http'
import { provideLottieOptions } from 'ngx-lottie'


import { provideCharts, withDefaultRegisterables } from 'ng2-charts'
import { IMAGE_CONFIG } from '@angular/common'

// Scroll
const scrollConfig: InMemoryScrollingOptions = {
  scrollPositionRestoration: 'top',
  anchorScrolling: 'enabled',
}

const inMemoryScrollingFeature: InMemoryScrollingFeature =
  withInMemoryScrolling(scrollConfig)

export const appConfig: ApplicationConfig = {
  providers: [
    provideCharts(withDefaultRegisterables()),
    provideLottieOptions({
      player: () => import('lottie-web'),
    }),
    provideRouter(routes, inMemoryScrollingFeature),

    provideHttpClient(withFetch()),
    importProvidersFrom(HttpClientModule, BrowserAnimationsModule),
   
    {
      provide: IMAGE_CONFIG,
      useValue: {
        disableImageSizeWarning: true,
        disableImageLazyLoadWarning: true,
      },
    },
  ],
}
