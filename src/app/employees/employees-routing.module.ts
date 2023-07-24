import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeesComponent } from './employees.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild([
      { path: '', component: EmployeesComponent }
  ])],
  exports: [RouterModule]
})
export class EmployeesRoutingModule { }
