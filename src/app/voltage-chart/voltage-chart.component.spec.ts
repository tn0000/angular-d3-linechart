import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VoltageChartComponent } from './voltage-chart.component';

describe('VoltageChartComponent', () => {
  let component: VoltageChartComponent;
  let fixture: ComponentFixture<VoltageChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VoltageChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VoltageChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
