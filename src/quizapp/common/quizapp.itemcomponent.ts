import {Component,
    Input,
    Output,
    EventEmitter} from "@angular/core"

import {Question} from "../home/quizapp.question.model"
@Component({
    selector: "item-ui",
    templateUrl : "./quizapp.itemview.html"
})

export class ItemComponent{
  
    questions: Array<Question> = new Array<Question>();
    answers: Array<Object> = new Array<Object>();
    question : Question = new Question();
    selectAnswer: string="";
    showSummary: boolean=false;
    
    @Input("form-questions")
    set setQuestions(_questions:Array<Question>){
       this.questions = _questions;    
       this.question = this.questions[this.answers.length];
    }
    
    @Input("form-answers")
    set setAnswers(_answers:Array<Object>){
        this.answers = _answers;    
        this.question = this.questions[this.answers.length];
    }
    
    @Output("answer-selected")
    eventemitter: EventEmitter<Object> = new EventEmitter<Object>();
    SelectAnswer(){
      //alert(123);
       this.eventemitter.emit(this.selectAnswer);
       // this.answers.push(this.selectAnswer);
       this.question = this.questions[this.answers.length]; 
    }    
}