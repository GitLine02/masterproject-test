import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphicTestComponent } from './graphic-test.component';

describe('GraphicTestComponent', () => {
  let component: GraphicTestComponent;
  let fixture: ComponentFixture<GraphicTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GraphicTestComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GraphicTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
