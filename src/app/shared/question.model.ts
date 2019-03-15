import { QuestionsAnswer } from './questions_answer.model';

export class Question {
    id: number;
    title: string;
    kind: string;
    required: boolean;
    form_id: number;
    questions_answers: QuestionsAnswer[] = [];   

    constructor(questionInfo: any) {
        (questionInfo && questionInfo.id ? this.id = questionInfo.id : this.id = 0);
        this.title = questionInfo.title;
        this.kind = questionInfo.kind;
        this.required = questionInfo.required;
        this.form_id = questionInfo.form_id;
        this.includeQuestionsAnswers(questionInfo.questions_answers);
    }

    private includeQuestionsAnswers(questions_answers: any) {
        for (const count in questions_answers) {
            this.questions_answers.push( new QuestionsAnswer(questions_answers[count]) );
        }
    }
}