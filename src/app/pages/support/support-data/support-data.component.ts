import { Component } from '@angular/core'
import { NavigationBarComponent } from '@components/navigation-bars'
import { FooterComponent } from '../../footer/footer.component'
import { CaseStudiesComponent } from './components/case-studies/case-studies.component'
import { ContactComponent } from './components/contact/contact.component'
@Component({
  selector: 'app-support-data',
  standalone: true,
  imports: [NavigationBarComponent,
    CaseStudiesComponent,
    ContactComponent,
    FooterComponent,],
  templateUrl: './support-data.component.html',
  styleUrl: './support-data.component.scss'
})
export class SupportDataComponent {

}
