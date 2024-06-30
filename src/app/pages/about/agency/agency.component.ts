import { Component } from '@angular/core'
import { NavigationBarComponent } from '@components/navigation-bars'
import { FooterComponent } from '../../footer/footer.component'
import { RouterModule } from '@angular/router'
import { IndustriesComponent } from './component/industries/industries.component'
import { ContentComponent } from './component/content/content.component'


@Component({
  selector: 'about-agency',
  standalone: true,
  imports: [
    NavigationBarComponent,
    FooterComponent,
    RouterModule,
    IndustriesComponent,
    ContentComponent,
  ],
  templateUrl: './agency.component.html',
  styles: ``,
})
export class AgencyComponent {}
