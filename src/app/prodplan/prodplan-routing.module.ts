import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProdplanComponent } from './prodplan.component';

const routes: Routes = [];


@NgModule({
  imports: [RouterModule.forChild([
      { path: '', component: ProdplanComponent }
  ])],
  exports: [RouterModule]
})
export class ProdplanRoutingModule { }
