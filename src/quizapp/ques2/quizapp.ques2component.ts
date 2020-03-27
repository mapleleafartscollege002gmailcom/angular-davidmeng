import { Component, Input } from '@angular/core';

import { HomeComponent } from '../home/quizapp.homecomponent';
@Component({ 
  templateUrl: './quizapp.ques2view.html',
  styles: [`h1 { font-family: Lato; }`]
})
export class ques2component  {
  @Input() name: string;
}
