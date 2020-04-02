import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {CommonModule } from '@angular/common';
import {NgModule } from '@angular/core';
import {FormsModule , ReactiveFormsModule} from "@angular/forms"
import {RouterModule} from "@angular/router"
import {questioncomponent } from './quizapp.questioncomponent';
import {ItemComponent} from "../common/quizapp.itemcomponent"
import {ReviewComponent} from "../common/quizapp.reviewcomponent"
import {SummaryComponent} from "../common/quizapp.summarycomponent"
import {QuestionRoutes } from '../routing/quizapp.questionrouting';

@NgModule({  
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [
     questioncomponent , ItemComponent, ReviewComponent, SummaryComponent
  ],
  imports: [
    RouterModule.forChild(QuestionRoutes),
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [questioncomponent]
})
export class questionmodule { }
