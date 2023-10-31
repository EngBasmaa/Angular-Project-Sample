import { Component } from '@angular/core';
import { MatCalendarCellClassFunction } from '@angular/material/datepicker';

@Component({
  selector: 'app-angmat',
  templateUrl: './angmat.component.html',
  styleUrls: ['./angmat.component.css']
})


export class AngmatComponent {
labelPosition: any;
length: number; // Add this line
minutes: number;
appointments: number;
end time;
start time;

constructor() { }
dateClass: MatCalendarCellClassFunction<Date> = (cellDate, view) => {
    // Your logic here
    return 'your-css-class';

  };

}
export class DatepickerDateClassExample {
    dateClass: MatCalendarCellClassFunction<Date> = (cellDate, view) => {
      // Only highligh dates inside the month view.
      if (view === 'month') {
        const date = cellDate.getDate();
  
        // Highlight the 1st and 20th day of each month.
        return date === 1 || date === 20 ? 'example-custom-date-class' : '';
      }
  
      return '';
    };
  }
