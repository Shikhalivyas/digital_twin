import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UtilityChartComponent } from './utility-chart.component';

describe('UtilityChartComponent', () => {
  let component: UtilityChartComponent;
  let fixture: ComponentFixture<UtilityChartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UtilityChartComponent]
    });
    fixture = TestBed.createComponent(UtilityChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
