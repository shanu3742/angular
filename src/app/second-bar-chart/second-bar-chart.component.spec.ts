import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondBarChartComponent } from './second-bar-chart.component';

describe('SecondBarChartComponent', () => {
  let component: SecondBarChartComponent;
  let fixture: ComponentFixture<SecondBarChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecondBarChartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecondBarChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
