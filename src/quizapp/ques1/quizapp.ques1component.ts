import { Component, Input } from '@angular/core';

@Component({
  selector: 'hello',
  templateUrl: './quizapp.ques1view.html',
  styles: [`h1 { font-family: Lato; }`]
})
export class ques1component  {
  @Input() name: string;
}
