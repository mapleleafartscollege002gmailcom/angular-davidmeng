import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { MainRoutes } from '../routing/quizapp.mainrouting';
import {RouterModule} from "@angular/router"
import { MasterPageComponent } from './quizapp.masterpagecomponent';
import { HomeComponent } from './quizapp.homecomponent';
import { ques1component } from '../question/quizapp.questioncomponent';

@NgModule({
  imports:      [
    RouterModule.forRoot(MainRoutes), BrowserModule, FormsModule ],
  declarations: [ MasterPageComponent, HomeComponent,ques1component,ques2component ],
  bootstrap:    [ MasterPageComponent ]
})
export class AppModule { }
