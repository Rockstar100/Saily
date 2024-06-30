import { Component } from '@angular/core'
import { createdBy, developedByLink } from 'src/app/states/constants'
import { LogoBoxComponent } from '@components/logo-box/logo-box.component'

import { RouterModule } from '@angular/router'
@Component({
  selector: 'about-agency-footer',
  standalone: true,
  imports: [RouterModule, LogoBoxComponent],
  templateUrl: './footer.component.html',
  styles: ``,
})
export class FooterComponent  {
  author = createdBy
  developBy = developedByLink
  

}
  