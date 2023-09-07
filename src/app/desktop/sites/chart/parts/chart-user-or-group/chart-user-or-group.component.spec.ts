import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartUserOrGroupComponent } from './chart-user-or-group.component';

describe('ChartUserOrGroupComponent', () => {
  let component: ChartUserOrGroupComponent;
  let fixture: ComponentFixture<ChartUserOrGroupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChartUserOrGroupComponent]
    });
    fixture = TestBed.createComponent(ChartUserOrGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
