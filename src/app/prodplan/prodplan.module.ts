import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProdplanRoutingModule } from './prodplan-routing.module';
import { ProdplanComponent } from './prodplan.component';
import { NgxGanttModule } from '@worktile/gantt';

@NgModule({
  declarations: [
    ProdplanComponent
  ],
  imports: [
    CommonModule,
    ProdplanRoutingModule,
    NgxGanttModule
    
  ]
})
export class ProdplanModule { }
