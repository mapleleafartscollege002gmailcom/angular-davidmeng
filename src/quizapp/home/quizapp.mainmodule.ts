import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { MasterPageComponent } from './quizapp.masterpagecomponent';
import { HomeComponent } from './quizapp.homecomponent';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ MasterPageComponent, HomeComponent ],
  bootstrap:    [ MasterPageComponent ]
})
export class AppModule { }
