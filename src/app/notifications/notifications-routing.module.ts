import { NotificationsComponent } from './notifications.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild([
      { path: '', component: NotificationsComponent }
  ])],
  exports: [RouterModule]
})
export class NotificationsRoutingModule { }
