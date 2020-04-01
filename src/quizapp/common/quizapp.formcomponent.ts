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
    showSummary: boolean=false;

    @Input("form-questions")
    set setQuestions(_questions:Array<Object>){
       this.questions = _questions;  //   alert(this.answers.length) ;
       this.question = this.questions[this.answers.length];
    }
    
    @Input("form-answers")
    set setAnswers(_answers:Array<Object>){
        this.answers = _answers;   // alert(this.answers.length) ;
        this.question = this.questions[this.answers.length];
    }
    
    @Output("answer-selected")
    eventemitter: EventEmitter<Object> = new EventEmitter<Object>();
    SelectAnswer(){
      //alert(123);
       this.eventemitter.emit(this.selectAnswer);
       // this.answers.push(this.selectAnswer);
       this.question = this.questions[this.answers.length]; 

       if(this.answers.length==5)
       {
          this.showSummary = true;
       }
       // alert(this.answers.length) ;
    }    
}