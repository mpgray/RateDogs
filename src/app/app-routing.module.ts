import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RateComponent} from './rate/rate.component';

const routes: Routes = [
  {
    path: '',
    component: RateComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
