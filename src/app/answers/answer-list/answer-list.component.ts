import { Component, OnInit } from '@angular/core';
import { AnswerService } from '../../shared/answer.service';
import { ActivatedRoute } from '@angular/router';
import { Question } from '../../shared/question.model';
import { Answer } from '../../shared/answer.model';
import { QuestionsAnswer } from '../../shared/questions_answer.model';

@Component({
  selector: 'app-answer-list',
  templateUrl: './answer-list.component.html',
  styleUrls: ['./answer-list.component.css']
})
export class AnswerListComponent implements OnInit {

  public questions: Question[] = [];
  public answers: Answer[] = [];
  
  constructor(
    private answerService: AnswerService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params['id'] !== undefined) {
        this.answerService.getAnswers(params['id']).subscribe(data => {          
          
          const answers_group: Map<number, object> = new Map();

          for (const question of data) {
            this.questions.push(new Question(question));
            
            for (const answer of question.questions_answers) {
              if (!answers_group.has(answer.answer_id)) {
                answers_group.set(answer.answer_id, new Answer({ id: answer.answer_id, form_id: question.form_id }))
              }
              answer.question = question
              const questions_answers = answers_group.get(answer.answer_id)['questions_answers']
              questions_answers.push(new QuestionsAnswer(answer))
            }
          }
          
          answers_group.forEach((value: Answer) => {
            this.answers.push(value)
          })
          
        });
      }
    });
  }

}
