import { AfterViewInit, Component } from '@angular/core'
import { portfolioList, PortfolioType } from '../../data'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { initAOS } from 'src/app/utils/init-aos'

@Component({
  selector: 'about-content',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './content.component.html',
  styles: ``,
})
export class ContentComponent implements AfterViewInit {
  allPortfolioList: PortfolioType[] = portfolioList
  ngAfterViewInit(): void {
    initAOS()
  }
}
