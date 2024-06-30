import { Route } from '@angular/router'
import { AgencyComponent } from './agency/agency.component'

export const ABOUT_ROUTE: Route[] = [
  {
    path: '',
    component: AgencyComponent,
    data: { title: 'About' },
  },
  
]
