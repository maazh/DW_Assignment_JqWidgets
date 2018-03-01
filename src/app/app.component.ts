import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

import { GetCollectiomsService } from './services/get-collectioms.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { Sale } from './shared/sale';


var final = null;

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    providers: [GetCollectiomsService]

})


export class AppComponent {
    constructor(private getCollectiomsService: GetCollectiomsService) {
        
    }
    addressData = []; 
    saving; 
    salesmen: Sale[]; 
    ngOnInit() {
        this.getAddressData();
        console.log("salesman 2" + JSON.stringify(this.salesmen));

      }

    getAddressData() {
        this.getCollectiomsService.getAddressData()
                         .subscribe(data => {this.addressData = data; 
                            this.salesmen = data; final = this.addressData; 
                            console.log("final" + JSON.stringify(final.data))});
        

        }

        sampleDataw: any[] = [
            { SALESAMT: 45, SALESMAN: 'Maaz', SAL_NAME_ID: '234'},
            { SALESAMT: 53, SALESMAN: 'Ali', SAL_NAME_ID: '33' },
            { SALESAMT: 23, SALESMAN: 'Omer', SAL_NAME_ID: '32' }
            
        ];
    

    sampleData: any[] = [
        { Day: 'Monday', Keith: 30, Erica: 15, George: 25 },
        { Day: 'Tuesday', Keith: 25, Erica: 25, George: 30 },
        { Day: 'Wednesday', Keith: 30, Erica: 20, George: 25 },
        { Day: 'Thursday', Keith: 35, Erica: 25, George: 45 },
        { Day: 'Friday', Keith: 20, Erica: 20, George: 25 },
        { Day: 'Saturday', Keith: 30, Erica: 20, George: 30 },
        { Day: 'Sunday', Keith: 60, Erica: 45, George: 90 }
    ];

    padding: any = { left: 5, top: 5, right: 5, bottom: 5 };

    titlePadding: any = { left: 90, top: 0, right: 0, bottom: 10 };

    xAxis2: any =
    {
        dataField: 'SALESMAN',
        showGridLines: true
    };

    xAxis: any =
    {
        dataField: 'Day',
        showGridLines: true
    };

    seriesGroups2: any[] =
    [
        {
            type: 'column',
            columnsGapPercent: 50,
            seriesGapPercent: 0,
            valueAxis:
            {
                unitInterval: 10,
                minValue: 0,
                maxValue: 100,
                displayValueAxis: true,
                description: 'Time in minutes',
                axisSize: 'auto',
                tickMarksColor: '#888888'
            },
            series: [
                { dataField: 'SALESAMT', displayText: 'SALESAMT' },
            ]
        }
    ];

    seriesGroups: any[] =
    [
        {
            type: 'column',
            columnsGapPercent: 50,
            seriesGapPercent: 0,
            valueAxis:
            {
                unitInterval: 10,
                minValue: 0,
                maxValue: 100,
                displayValueAxis: true,
                description: 'Time in minutes',
                axisSize: 'auto',
                tickMarksColor: '#888888'
            },
            series: [
                { dataField: 'Keith', displayText: 'Keith' },
                { dataField: 'Erica', displayText: 'Erica' },
                { dataField: 'George', displayText: 'George' }
            ]
        }
    ];
}