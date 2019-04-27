import { Component, OnInit, Input } from '@angular/core';
import { Question } from '../../../shared/question.model';

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.css']
})
export class AllComponent implements OnInit {

  @Input() questions: Question[]

  constructor(
  ) { }

  ngOnInit() {
    
  }
}