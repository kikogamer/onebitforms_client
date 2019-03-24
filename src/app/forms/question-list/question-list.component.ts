import { Component, OnInit, Input } from '@angular/core';
import { QuestionService } from '../../shared/question.service';
import { Question } from '../../shared/question.model';
import { DragulaService } from 'ng2-dragula';
import { Subscription } from 'rxjs';
import { MzToastService } from 'ngx-materialize';
import { QuestionsAnswer } from 'src/app/shared/questions_answer.model';

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.css']
})
export class QuestionListComponent implements OnInit {

  subs = new Subscription();

  @Input() questions: Question[];
  @Input() form_id: number;
  public question_new: Question = new Question({});
  
  constructor(private questionService: QuestionService,
              private dragulaService: DragulaService,
              private toastService: MzToastService) { 
    this.subs.add(this.dragulaService.dropModel("QUESTIONS").subscribe(({item, targetIndex}) => {
        item.position = targetIndex;
        this.questionService.updateQuestion(item.id, item).subscribe(data => {
          console.info('Position updated');
        }, 
        error => {
          this.toastService.show('Problem in Question update', 8000, 'red');
        });
      })
    );    
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }

}