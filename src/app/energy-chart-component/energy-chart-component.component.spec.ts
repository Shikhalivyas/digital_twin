import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnergyChartComponentComponent } from './energy-chart-component.component';

describe('EnergyChartComponentComponent', () => {
  let component: EnergyChartComponentComponent;
  let fixture: ComponentFixture<EnergyChartComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EnergyChartComponentComponent]
    });
    fixture = TestBed.createComponent(EnergyChartComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
