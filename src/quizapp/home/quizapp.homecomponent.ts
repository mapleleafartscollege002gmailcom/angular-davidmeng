import { Component, Input } from '@angular/core';

import {Question} from "./quizapp.question.model";
import {Answer} from "./quizapp.answer.model";

@Component({ 
  templateUrl: './quizapp.homeview.html',
  styles: [`h1 { font-family: Lato; }`]
})
export class HomeComponent  {
  @Input() name: string;
  QuestionModel : Question = new Question();
  QuestionModels :Array<Question> = new Array<Question>();

  constructor(){
this.QuestionModel = new Question();
this.QuestionModel.ID = 1;
this.QuestionModel.Description = 'Which is the largest country in the world by population?';
this.QuestionModel.Options = ['India','USA','China','Russia'];
this.QuestionModel.RightAnswer = 'China';
this.QuestionModels.push(this.QuestionModel);

this.QuestionModel = new Question();
this.QuestionModel.ID = 2;
this.QuestionModel.Description = 'When did the second world war end?';
this.QuestionModel.Options = ['1945','1939','1944','1942'];
this.QuestionModel.RightAnswer = '1945';
this.QuestionModels.push(this.QuestionModel);

this.QuestionModel = new Question();
this.QuestionModel.ID = 3;
this.QuestionModel.Description = 'Which was the first country to issue paper currency?';
this.QuestionModel.Options = ['USA', 'France', 'Italy', 'China'];
this.QuestionModel.RightAnswer = 'China';
this.QuestionModels.push(this.QuestionModel);

this.QuestionModel = new Question();
this.QuestionModel.ID = 4;
this.QuestionModel.Description = 'Which city hosted the 1996 Summer Olympics?';
this.QuestionModel.Options = ['Atlanta', 'Sydney', 'Athens', 'Beijing'];
this.QuestionModel.RightAnswer = 'Atlanta';
this.QuestionModels.push(this.QuestionModel);

this.QuestionModel = new Question();
this.QuestionModel.ID = 5;
this.QuestionModel.Description = ' Who invented telephone';
this.QuestionModel.Options = ['Albert Einstein', 'Alexander Graham Bell', 'Isaac Newton', 'Marie Curie'];
this.QuestionModel.RightAnswer = 'Alexander Graham Bell';
this.QuestionModels.push(this.QuestionModel);
   }

}