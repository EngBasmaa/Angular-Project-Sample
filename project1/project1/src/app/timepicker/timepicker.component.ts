import { Component, ElementRef, ViewChild } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-timepicker',
  templateUrl: './timepicker.component.html',
  styleUrls: ['./timepicker.component.css']
})
export class TimepickerComponent {
    
    @ViewChild('toast', { static: true }) private toast: ElementRef;

    public time = '10:00:00';
    public min = '08:15:30';
    public max = '18:15:30';

    public onValidationFailed() {
        this.toast.nativeElement.open();
        this.toastr.success('Hello world!', 'Toastr fun!');
        this.toast.nativeElement.textContent = 'New text';

    }

    constructor(private toastr: ToastrService) { }


}
