import { Route } from '@angular/router'
import { MainPageComponent} from './main-page/main-page.component'



export const MAIN_ROUTE: Route[] = [
  {
    path: '',
    component: MainPageComponent,
    data: { title: 'Main page' },
  },
  
  
]
