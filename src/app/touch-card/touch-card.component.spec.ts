import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TouchCardComponent } from './touch-card.component';

describe('TouchCardComponent', () => {
  let component: TouchCardComponent;
  let fixture: ComponentFixture<TouchCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TouchCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TouchCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
