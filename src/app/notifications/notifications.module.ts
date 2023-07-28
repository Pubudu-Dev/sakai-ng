import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotificationsRoutingModule } from './notifications-routing.module';
import { NotificationsComponent } from './notifications.component';
import { DragDropModule } from 'primeng/dragdrop';
import { DividerModule } from 'primeng/divider';
import { TagModule } from 'primeng/tag';
@NgModule({
  declarations: [
    NotificationsComponent,

  ],
  imports: [
    DragDropModule,
    CommonModule,
    NotificationsRoutingModule,
    DividerModule,
    TagModule
    
  ]
})
export class NotificationsModule { }
