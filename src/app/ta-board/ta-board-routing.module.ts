import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaBoardComponent } from './ta-board.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild([
      { path: '', component: TaBoardComponent }
  ])],
  exports: [RouterModule]
})
export class TaBoardRoutingModule { }
