import { Route } from '@angular/router'
import { AlldestinationComponent } from './alldestination/alldestination.component'

export const DESTINATION_ROUTE: Route[] = [
  {
    path: '',
    component: AlldestinationComponent ,
    data: { title: 'All Destination' },
  },
  
]
