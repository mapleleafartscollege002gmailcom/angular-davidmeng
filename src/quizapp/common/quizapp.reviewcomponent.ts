import {Component,
    Input,
    Output,
    EventEmitter} from "@angular/core"

@Component({
    selector: "review-ui",
    templateUrl : "./quizapp.reviewview.html"
})

export class ReviewComponent{
  
    questions: Array<Object> = new Array<Object>();
    answers: Array<Object> = new Array<Object>();
    question : Object = new Object();
    selectAnswer: string="";
    showSummary: boolean=false;    

    @Input("form-questions")
    set setQuestions(_questions:Array<Object>){
       this.questions = _questions;    
       this.question = this.questions[this.answers.length];
    }
    
    @Input("form-answers")
    set setAnswers(_answers:Array<Object>){
        this.answers = _answers;    
        this.question = this.questions[this.answers.length];
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
}