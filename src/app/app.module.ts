import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Grid 
import { jqxGridComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxgrid';

// chart
import { jqxChartComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxchart';


import { AppComponent } from './app.component';



@NgModule({
  declarations: [
      AppComponent, jqxGridComponent, jqxChartComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
