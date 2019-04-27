import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-answer-text',
  templateUrl: './answer-text.component.html',
  styleUrls: ['./answer-text.component.css']
})
export class AnswerTextComponent implements OnInit {

  @Input() value: String;

  constructor() { }

  ngOnInit() {
  }

}
