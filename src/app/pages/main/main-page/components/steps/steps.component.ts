import { AfterViewInit, Component, OnInit } from '@angular/core'
import { initAOS } from 'src/app/utils/init-aos'

@Component({
  selector: 'app-main-page-steps',
  standalone: true,
  imports: [],
  templateUrl: './steps.component.html',
  styleUrl: './steps.component.scss'
})
export class StepsComponent implements AfterViewInit {
  step = [
    'Forecasting and recommendations',
    'Identification of patterns, analysis',
    'Segmentation by various methods',
  ]

  ngAfterViewInit(): void {
    initAOS()
  }
}
