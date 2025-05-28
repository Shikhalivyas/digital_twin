import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EngviewComponent } from './engview.component';

describe('EngviewComponent', () => {
  let component: EngviewComponent;
  let fixture: ComponentFixture<EngviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EngviewComponent]
    });
    fixture = TestBed.createComponent(EngviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
