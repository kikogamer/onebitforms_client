import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnswerBooleanComponent } from './answer-boolean.component';

describe('AnswerBooleanComponent', () => {
  let component: AnswerBooleanComponent;
  let fixture: ComponentFixture<AnswerBooleanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnswerBooleanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnswerBooleanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
