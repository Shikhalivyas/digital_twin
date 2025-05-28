import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GasviewComponent } from './gasview.component';

describe('GasviewComponent', () => {
  let component: GasviewComponent;
  let fixture: ComponentFixture<GasviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GasviewComponent]
    });
    fixture = TestBed.createComponent(GasviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
