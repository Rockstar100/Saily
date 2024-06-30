import { Component, OnInit } from '@angular/core';
import { currency } from 'src/app/states/constants'
import { DomSanitizer } from '@angular/platform-browser'
import {
  pricingYoga,
  PricingYogaType,
  yogaPricing,
  YogaPricingType,
} from '../../data'
@Component({
  selector: 'app-main-page-countries',
  standalone: true,
  imports: [],
  templateUrl: './countries.component.html',
  styleUrl: './countries.component.scss'
})
export class CountriesComponent implements OnInit {
  allyogaStudio: YogaPricingType[] = yogaPricing
  pricingYoga: PricingYogaType[] = pricingYoga
  selectedCurrency = currency

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    this.pricingYoga.forEach((item) => {
      item.sanitizedIcon = this.sanitizer.bypassSecurityTrustHtml(item.icon)
    })
  }
}
