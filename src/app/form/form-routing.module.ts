import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { HomeComponent } from '../home/home.component';

const routes: Routes = [
 
  { 
    path: 'lazyform', loadChildren:()=> import('../lazyform/lazyform.module')
    .then(mod=> mod.LazyformModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class FormRoutingModule { }
