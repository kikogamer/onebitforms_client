import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnswerSuccessComponent } from './answer-success.component';

describe('AnswerSuccessComponent', () => {
  let component: AnswerSuccessComponent;
  let fixture: ComponentFixture<AnswerSuccessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnswerSuccessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnswerSuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
