import { Component } from '@angular/core'
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap'
import { mobileFaqsType, mobileShowCaseFaq } from '../../data'

@Component({
  selector: 'app-main-page-faq',
  standalone: true,
  imports: [NgbAccordionModule],
  templateUrl: './faq.component.html',
  styles: ``,
})
export class FaqComponent {
  mobileFaqsData: mobileFaqsType[] = mobileShowCaseFaq
}