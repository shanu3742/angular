import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphDashComponent } from './graph-dash.component';

describe('GraphDashComponent', () => {
  let component: GraphDashComponent;
  let fixture: ComponentFixture<GraphDashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraphDashComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GraphDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
