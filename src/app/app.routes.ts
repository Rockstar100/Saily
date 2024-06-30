import { Routes } from '@angular/router'
import { AuthGuard } from '@core/guards'
import { AccountLayoutComponent } from './layouts/account-layout.component'

export const routes: Routes = [
  {
    path: 'main',
    loadChildren: () =>
      import('./pages/main/main.route').then((mod) => mod.MAIN_ROUTE),

  },
   
  
  {
    path: 'about',
    loadChildren: () =>
      import('./pages/about/about.route').then((mod) => mod.ABOUT_ROUTE),
  },
  {
    path: 'destination',
    loadChildren: () =>
      import('./pages/destination/destination.route').then((mod) => mod.DESTINATION_ROUTE),
  },
  {
    path: 'support',
    loadChildren: () =>
      import('./pages/support/support.routes').then((mod) => mod.SupportROUTE),
  },
  
  
]
