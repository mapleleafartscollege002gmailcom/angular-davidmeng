import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {CommonModule } from '@angular/common';
import {NgModule } from '@angular/core';
import {FormsModule , ReactiveFormsModule} from "@angular/forms"
import {RouterModule} from "@angular/router"
import {contactcomponent } from './quizapp.contactcomponent';
import {ContactRoutes } from '../routing/quizapp.contactrouting';

@NgModule({  
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [
     contactcomponent
  ],
  imports: [
    RouterModule.forChild(ContactRoutes),
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [contactcomponent]
})
export class contactmodule { }
