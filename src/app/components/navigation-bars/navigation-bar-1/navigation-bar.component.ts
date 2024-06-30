import {
  Component,
  ElementRef,
  Input,
  OnInit,
  Renderer2,
  inject,
} from '@angular/core'

@Component({
  selector: 'component-navigation-bar',
  standalone: true,
  imports: [
  ],
  templateUrl: './navigation-bar.component.html',
  styleUrl: './navigation-bar.component.scss'
})
export class NavigationBarComponent implements OnInit {
  @Input() mode?: 'light' | 'dark'

  isMenuCollapsed = false
  isOpen: boolean = false;

  toggleCollapse() {
    this.isOpen = !this.isOpen;
  }
 
  private render = inject(Renderer2)

  constructor(private elementRef: ElementRef) {}

  ngOnInit(): void {
    if (this.mode) {
      this.render.setAttribute(
        this.elementRef.nativeElement,
        'data-bs-theme',
        this.mode
      )
    }
  }

  // Window Scroll Event
 
  
}
