import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BugissuetrackerComponent } from './bugissuetracker/bugissuetracker.component';


const routes: Routes = [
  { path:'', component: BugissuetrackerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
