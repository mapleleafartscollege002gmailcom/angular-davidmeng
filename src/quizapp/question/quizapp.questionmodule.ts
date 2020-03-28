import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {FormsModule , ReactiveFormsModule} from "@angular/forms"
import {RouterModule} from "@angular/router"
import { ques2component } from './quizapp.ques2component';
import { Ques2Routes } from '../routing/quizapp.ques2routing';
import {HttpModule} from "@angular/http"
import {HttpClientModule,HTTP_INTERCEPTORS} from "@angular/common/http"
/*import { MyInterceptor } from '../Utility/Utility.HttpInterceptor';*/

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [
     ques2component 
  ],
  imports: [
    RouterModule.forChild(Ques2Routes),
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
  bootstrap: [ques2component]
})
export class Ques2Module { }
