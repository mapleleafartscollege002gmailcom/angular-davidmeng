import {Component,
    Input,
    Output,
    EventEmitter} from "@angular/core"

@Component({
    selector: "question-ui",
    templateUrl : "./quizapp.formview.html"
})

export class FormComponent{
  
    questions: Array<Object> = new Array<Object>();
    answers: Array<Object> = new Array<Object>();
    question : Object = new Object();
    selectAnswer: string="";

    @Input("form-questions")
    set setQuestions(_questions:Array<Object>){
       this.questions = _questions;     
    }
    
    @Input("form-answers")
    set setAnswers(_answers:Array<Object>){
        this.answers = _answers;     
    }
     
    @Output("answer-selected")
    eventemitter: EventEmitter<Object> = 
    new EventEmitter<Object>();

    SelectAnswer(_selected:Object){
        this.eventemitter.emit(_selected);
    }
    
}