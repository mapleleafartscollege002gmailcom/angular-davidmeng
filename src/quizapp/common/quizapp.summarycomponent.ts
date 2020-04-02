import {Component,
    Input,
    Output,
    EventEmitter} from "@angular/core"

import {Question} from "../home/quizapp.question.model"
@Component({
    selector: "summary-ui",
    templateUrl : "./quizapp.summaryview.html"
})

export class SummaryComponent{
  
    questions: Array<Question> = new Array<Question>();
    answers: Array<Object> = new Array<Object>();

    @Input("form-questions")
    set setQuestions(_questions:Array<Question>){
       this.questions = _questions;    
    }
    
    @Input("form-answers")
    set setAnswers(_answers:Array<Object>){
        this.answers = _answers;    
    }
    
    @Output("decide-complete")
    eventemitter1: EventEmitter<Object> = new EventEmitter<Object>();
    decideComplete(){
       this.eventemitter1.emit(true);
    }    

}