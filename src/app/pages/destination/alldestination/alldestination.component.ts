import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationBarComponent } from '@components/navigation-bars'
import { FooterComponent } from '../../footer/footer.component'
@Component({
  selector: 'app-alldestination',
  standalone: true,
  imports: [CommonModule,
    NavigationBarComponent,
    FooterComponent

  ],
  templateUrl: './alldestination.component.html',
  styleUrl: './alldestination.component.scss'
})
export class AlldestinationComponent {
  countries = [
    { name: 'Turkey', flag: 'https://upload.wikimedia.org/wikipedia/commons/b/b4/Flag_of_Turkey.svg' },
    { name: 'United States', flag: 'https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg' },
    { name: 'Thailand', flag: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Flag_of_Thailand.svg' },
    { name: 'Malaysia', flag: 'https://upload.wikimedia.org/wikipedia/commons/6/66/Flag_of_Malaysia.svg' },
    { name: 'United Arab Emirates', flag: 'https://upload.wikimedia.org/wikipedia/commons/c/cb/Flag_of_the_United_Arab_Emirates.svg' },
    { name: 'China', flag: 'https://upload.wikimedia.org/wikipedia/commons/0/0d/Flag_of_China.svg' },
    { name: 'Japan', flag: 'https://upload.wikimedia.org/wikipedia/en/9/9e/Flag_of_Japan.svg' },
    { name: 'France', flag: 'https://upload.wikimedia.org/wikipedia/en/c/c3/Flag_of_France.svg' },
    { name: 'India', flag: 'https://upload.wikimedia.org/wikipedia/en/4/41/Flag_of_India.svg' },
  ];

}
