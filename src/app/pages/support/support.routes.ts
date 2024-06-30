import { Route } from '@angular/router'
import { SupportCentreComponent } from './support-centre/support-centre.component'
import { SupportDataComponent } from './support-data/support-data.component'

export const SupportROUTE: Route[] = [
  {
    path: '',
    component: SupportCentreComponent ,
    data: { title: 'Support' },
  },
  {
    path: 'helpdesk',
    component: SupportDataComponent ,
    data: { title: 'Helpdesk' },
  }
  
]
