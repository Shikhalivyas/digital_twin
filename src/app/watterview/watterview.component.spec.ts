import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WatterviewComponent } from './watterview.component';

describe('WatterviewComponent', () => {
  let component: WatterviewComponent;
  let fixture: ComponentFixture<WatterviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WatterviewComponent]
    });
    fixture = TestBed.createComponent(WatterviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
