import {Component,
    Input,
    Output,
    EventEmitter} from "@angular/core"

import {Question} from "../home/quizapp.question.model"
@Component({
    selector: "review-ui",
    templateUrl : "./quizapp.reviewview.html"
})

export class ReviewComponent{
  
    questions: Array<Question> = new Array<Question>();
    answers: Array<Object> = new Array<Object>();
    //question : Question = new Question();
    selectAnswer: string="";
    showSummary: boolean=false;    
    isSelect: boolean=true; 

    @Input("form-questions")
    set setQuestions(_questions:Array<Question>){
       this.questions = _questions;    
       //this.question = this.questions[this.answers.length];
    }
    
    @Input("form-answers")
    set setAnswers(_answers:Array<Object>){
        this.answers = _answers;    
        //this.question = this.questions[this.answers.length];
    }
    
    @Output("decide-submit")
    eventemitter1: EventEmitter<Object> = new EventEmitter<Object>();
    decideSubmit(){
       this.eventemitter1.emit(true);
    }    

    @Output("decide-no-submit")
    eventemitter2: EventEmitter<Object> = new EventEmitter<Object>();
    decideNoSubmit(){
       this.eventemitter2.emit(false);
    }    

    getSelectValue(_i:number){
      return this.answers[_i];
    }
}