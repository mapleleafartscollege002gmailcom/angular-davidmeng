import { Component, Input } from '@angular/core';

@Component({
  selector: 'hello',
  templateUrl: './quizapp.homeview.html',
  styles: [`h1 { font-family: Lato; }`]
})
export class HomeComponent  {
  @Input() name: string;
}
