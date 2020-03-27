import { Component, Input } from '@angular/core';

@Component({ 
  templateUrl: './quizapp.ques1view.html',
  styles: [`h1 { font-family: Lato; }`]
})
export class ques1component  {
  @Input() name: string;

  
  PosttoServer(){
    this.Disable = true;
    var custdto:any = {};
    custdto.CustomerCode = this.CustomerModel.CustomerCode;
    custdto.CustomerName = this.CustomerModel.CustomerName;
    custdto.CustomerAmount = this.CustomerModel.CustomerAmount;
    this.httpc.post("http://localhost:3000/Customers",
        custdto).subscribe(res=>this.Success(res),
    res=>this.Error(res));
  }
}
