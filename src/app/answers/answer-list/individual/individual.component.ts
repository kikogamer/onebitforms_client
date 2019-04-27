import { Component, OnInit, Input } from '@angular/core';
import { Answer } from '../../../shared/answer.model';

@Component({
  selector: 'app-individual',
  templateUrl: './individual.component.html',
  styleUrls: ['./individual.component.css']
})
export class IndividualComponent implements OnInit {

  @Input() answers: Answer[];

  constructor() { }

  ngOnInit() {
    console.log(this.answers)
  }

}
