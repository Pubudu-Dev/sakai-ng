
import { GanttItem } from '@worktile/gantt';
import TimelinesChart from 'timelines-chart';
import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';




declare var Gantt: any; // Import Gantt from the global scope (added by including frappe-gantt.min.js in scripts)
@Component({
  selector: 'app-prodplan',
  template: '<div #chartContainer></div>',
  styleUrls: ['./prodplan.component.scss']
})
export class ProdplanComponent implements AfterViewInit{
   myChart = TimelinesChart();

  @ViewChild('chartContainer') chartContainer!: ElementRef;

  ngAfterViewInit() {
    const myData = [
      {
        group: "Group 1",
        data: [
          {
            label: "Data Point 1",
            data: [
              {
                timeRange: [new Date('2023-07-01'), new Date('2023-07-05')],
                val: 10
              },
              {
                timeRange: [new Date('2023-07-10'), new Date('2023-07-15')],
                val: 15
              },
              // Add more data points here
            ]
          },
          {
            label: "Data Point 2",
            data: [
              {
                timeRange: [new Date('2023-07-05'), new Date('2023-07-08')],
                val: 8
              },
              // Add more data points for 'Data Point 2'
            ]
          },
          // Add more labels/groups here
        ],
      },
      {
        group: "Group 2",
        data: [
          {
            label: "Data Point 3",
            data: [
              {
                timeRange: [new Date('2023-07-12'), new Date('2023-07-20')],
                val: 12
              },
              // Add more data points for 'Data Point 3'
            ]
          },
          // Add more data points for 'Group 2'
        ]
      },
      // Add more groups here
    ];
    
  
    
  }

  



  
  }
   

   //var options = {
    /* ... */






