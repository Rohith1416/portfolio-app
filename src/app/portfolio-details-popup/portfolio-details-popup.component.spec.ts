import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioDetailsPopupComponent } from './portfolio-details-popup.component';

describe('PortfolioDetailsPopupComponent', () => {
  let component: PortfolioDetailsPopupComponent;
  let fixture: ComponentFixture<PortfolioDetailsPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PortfolioDetailsPopupComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PortfolioDetailsPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
