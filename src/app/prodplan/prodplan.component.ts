
import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { GanttItem } from '@worktile/gantt';



declare var Gantt: any; // Import Gantt from the global scope (added by including frappe-gantt.min.js in scripts)
@Component({
  selector: 'app-prodplan',
  templateUrl: './prodplan.component.html',
  styleUrls: ['./prodplan.component.scss']
})
export class ProdplanComponent {

  items: GanttItem[] = [
    { id: '000000', title: 'Task 0', start: 1627729997, end: 1628421197 },
    { id: '000001', title: 'Task 1', start: 1617361997, end: 1625483597 }
  ];

  
  }
   

   //var options = {
    /* ... */






