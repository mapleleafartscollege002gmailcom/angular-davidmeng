import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {FormsModule , ReactiveFormsModule} from "@angular/forms"
import {RouterModule} from "@angular/router"
import { questioncomponent } from './quizapp.questioncomponent';
import {HttpModule} from "@angular/http"
import {HttpClientModule,HTTP_INTERCEPTORS} from "@angular/common/http"
/*import { MyInterceptor } from '../Utility/Utility.HttpInterceptor';*/

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [
     questioncomponent 
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
  bootstrap: [questioncomponent]
})
export class Ques2Module { }
