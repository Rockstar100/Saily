import { Component } from '@angular/core'
import { NavigationBarComponent } from '@components/navigation-bars'
import { FooterComponent } from '../../footer/footer.component'
import { RouterModule } from '@angular/router'
import { HeroComponent } from './components/hero/hero.component'
import { CountriesComponent } from './components/countries/countries.component'
import { StatsComponent } from './components/stats/stats.component'
import { CtaComponent } from './components/cta/cta.component'
import { TestimonialComponent } from './components/testimonial/testimonial.component'
import { StepsComponent } from './components/steps/steps.component'
import { FaqComponent } from './components/faq/faq.component'
import { LogosComponent } from './components/logos/logos.component'
import { InfoComponent } from './components/info/info.component'

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [  
    NavigationBarComponent,
    HeroComponent,
    StatsComponent,
    InfoComponent,
    LogosComponent,
    TestimonialComponent,
    FaqComponent,
    CtaComponent,
    FooterComponent,
    CountriesComponent,
    StepsComponent,
   


  ]
    ,
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss'
})
export class MainPageComponent {

}
