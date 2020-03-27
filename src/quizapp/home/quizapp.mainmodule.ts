import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { MainRoutes } from '../routing/quizapp.mainrouting';
import {RouterModule} from "@angular/router"
import { MasterPageComponent } from './quizapp.masterpagecomponent';
import { HomeComponent } from './quizapp.homecomponent';
import { ques1component } from '../ques1/quizapp.ques1component';
import { ques2component } from '../ques2/quizapp.ques2component';

@NgModule({
  imports:      [
    RouterModule.forRoot(MainRoutes), BrowserModule, FormsModule ],
  declarations: [ MasterPageComponent, HomeComponent,ques1component,ques2component ],
  bootstrap:    [ MasterPageComponent ]
})
export class AppModule { }
