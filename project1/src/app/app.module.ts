import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';


import { FormsModule } from '@angular/forms';


import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AngmatComponent } from './angmat/angmat.component';

import {MatButtonModule} from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonToggleModule } from '@angular/material/button-toggle';

import {MatFormFieldModule} from '@angular/material/form-field'
import {MatInputModule} from '@angular/material/input'
import {MatDatepickerModule} from '@angular/material/datepicker'
import {MatNativeDateModule} from '@angular/material/core';
import { AddresourceComponent } from './addresource/addresource.component'

import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';

import { IgxAvatarModule } from "igniteui-angular";
import { Avatarsample3Component } from './avatarsample3/avatarsample3.component';

import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';

import {PageEvent, MatPaginatorModule} from '@angular/material/paginator';
import {JsonPipe} from '@angular/common';
import {NgxMaterialTimepickerModule} from 'ngx-material-timepicker';

@NgModule({

  declarations: [
    AppComponent,
    AngmatComponent,
    AddresourceComponent,
    Avatarsample3Component
  ],

  imports: [

    FormsModule,JsonPipe,MatPaginatorModule,
    BrowserModule,MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatSlideToggleModule,
    MatPaginatorModule,
    JsonPipe,
    BrowserAnimationsModule,
    MatRadioModule,IgxAvatarModule,
    MatButtonModule,
    MatIconModule,BrowserAnimationsModule,
	FormsModule,
    MatSlideToggleModule,
    MatSelectModule,
    MatButtonToggleModule,

    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,NgxMaterialTimepickerModule,
    MatNativeDateModule,MatDividerModule,MatListModule


  ],

  providers: [],
  bootstrap: [AppComponent],
  
})

export class AppModule {
    length: number;
    minutes: number;
    ngOnInit(): void {
    }
}

export class PaginatorConfigurableExample {
    length = 50;
    pageSize = 10;
    pageIndex = 0;
    pageSizeOptions = [5, 10, 25];
  
    hidePageSize = false;
    showPageSizeOptions = true;
    showFirstLastButtons = true;
    disabled = false;
  
    pageEvent: PageEvent;
  
    handlePageEvent(e: PageEvent) {
      this.pageEvent = e;
      this.length = e.length;
      this.pageSize = e.pageSize;
      this.pageIndex = e.pageIndex;
    }
  
    setPageSizeOptions(setPageSizeOptionsInput: string) {
      if (setPageSizeOptionsInput) {
        this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
      }
    }
  }

