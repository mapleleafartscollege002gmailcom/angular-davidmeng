import {CommonModule } from '@angular/common';
import {NgModule } from '@angular/core';
import {FormsModule , ReactiveFormsModule} from "@angular/forms"
import {RouterModule} from "@angular/router"
import {questioncomponent } from './quizapp.questioncomponent';
import {FormComponent} from "../common/quizapp.formcomponent"
import {HttpModule} from "@angular/http"
import {HttpClientModule,HTTP_INTERCEPTORS} from "@angular/common/http"
import {QuestionRoutes } from '../routing/quizapp.questionrouting';

@NgModule({
  declarations: [
     questioncomponent , FormComponent
  ],
  imports: [
    RouterModule.forChild(QuestionRoutes),
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule ,
    HttpClientModule
  ],
  exports: [ 
  ],
  providers: [ 

  ],
  bootstrap: [questioncomponent]
})
export class QuestionModule { }
