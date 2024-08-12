import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormRoutingModule } from './form-routing.module';

import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { HomeComponent } from '../home/home.component';

const routes: Routes = [];



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormRoutingModule,
  ]
})
export class FormModule { }
