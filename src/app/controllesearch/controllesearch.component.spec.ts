import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControllesearchComponent } from './controllesearch.component';

describe('ControllesearchComponent', () => {
  let component: ControllesearchComponent;
  let fixture: ComponentFixture<ControllesearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ControllesearchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ControllesearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
