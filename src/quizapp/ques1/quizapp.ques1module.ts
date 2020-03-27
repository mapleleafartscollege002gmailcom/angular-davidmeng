import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {FormsModule , ReactiveFormsModule} from "@angular/forms"
import {RouterModule} from "@angular/router"
import { ques1component } from './quizapp.ques1component';
import { Ques1Routes } from '../routing/quizapp.ques1routing';
import {HttpModule} from "@angular/http"
import {HttpClientModule,HTTP_INTERCEPTORS} from "@angular/common/http"

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [
     ques1component
  ],
  imports: [
    RouterModule.forChild(Ques1Routes),
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
  bootstrap: [ques1component]
})
export class Ques1Module { }
