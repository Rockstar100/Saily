import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlldestinationComponent } from './alldestination.component';

describe('AlldestinationComponent', () => {
  let component: AlldestinationComponent;
  let fixture: ComponentFixture<AlldestinationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlldestinationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AlldestinationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
