import { Component } from '@angular/core'
import { NavigationBarComponent } from '@components/navigation-bars'
import { FooterComponent } from '../../footer/footer.component'
import { ContentComponent } from './components/content/content.component'

@Component({
  selector: 'app-support-centre',
  standalone: true,
  imports: [NavigationBarComponent, ContentComponent, FooterComponent],
  templateUrl: './support-centre.component.html',
  styleUrl: './support-centre.component.scss'
})
export class SupportCentreComponent {

}
