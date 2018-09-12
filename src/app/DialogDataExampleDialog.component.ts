import {Component, Inject} from '@angular/core';



@Component({
  selector: 'dialog-data-example-dialog',
  templateUrl: 'dialog-data-example-dialog.html',
  styleUrls: ['./app.component.scss']
})
export class DialogDataExampleDialog {
  constructor() {}
    TimeRange: string[] = [ 'Month To Date',
 'Year To Date',
 'Year To Last Complete Month',
 'Calendar Year',
 '1 Month',
 '3 Months',
 'Current Quarter',
 'Last Quarter',
 '1 Year',
 '3 Years',
 'Max'
  ];
}