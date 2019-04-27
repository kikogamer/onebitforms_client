import { Component, OnInit, Input } from '@angular/core';
import { QuestionsAnswer } from 'src/app/shared/questions_answer.model';

@Component({
  selector: 'app-answer-boolean',
  templateUrl: './answer-boolean.component.html',
  styleUrls: ['./answer-boolean.component.css']
})
export class AnswerBooleanComponent implements OnInit {

  @Input() value: boolean;

  constructor() { }

  ngOnInit() {
  }

}