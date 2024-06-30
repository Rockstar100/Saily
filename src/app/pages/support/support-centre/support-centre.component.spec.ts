import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupportCentreComponent } from './support-centre.component';

describe('SupportCentreComponent', () => {
  let component: SupportCentreComponent;
  let fixture: ComponentFixture<SupportCentreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SupportCentreComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SupportCentreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
