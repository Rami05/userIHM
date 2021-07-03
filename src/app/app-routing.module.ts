import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashbordComponent } from './components/dashboard/dashboard.component'; 
import { WelcomeComponent } from './components/welcome/welcome.component'; 


const routes: Routes = [
  
  {
    path : '',
    component : WelcomeComponent
  },
  {
    path : 'dashboard',
    component : DashbordComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
