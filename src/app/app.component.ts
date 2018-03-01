﻿import { Component, OnInit } from '@angular/core';
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

    // This check is used to prevent timeout error when the observable is loading 
     check = false;
    addressData = []; 
    saving; 
    salesmen: Sale[]; 
    ngOnInit() {
        this.getAddressData();

      }

    getAddressData() {
        this.getCollectiomsService.getAddressData()
                         .subscribe(data => {this.addressData = data; 
                            this.salesmen = data; final = this.addressData; 
                        //  console.log("SALESMEN" + JSON.stringify(this.salesmen))
                        this.check = true;
                        });
        

        }
        
       // "COLLECAMT": 18972561
        sampleDataw: any[] = [
            { SALESAMT: 45, SALESMAN: 'Maaz', SAL_NAME_ID: '234', COLLECAMT: '22'},
            { SALESAMT: 53, SALESMAN: 'Ali', SAL_NAME_ID: '33' },
            { SALESAMT: 23, SALESMAN: 'Omer', SAL_NAME_ID: '32' }
            
        ];
    



    padding: any = { left: 5, top: 5, right: 5, bottom: 5 };

    titlePadding: any = { left: 90, top: 0, right: 0, bottom: 10 };

    xAxis2: any =
    {
        dataField: 'SALESMAN',
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
                unitInterval: 5000000,
                minValue: 10000,
                maxValue: 24000000,
                displayValueAxis: true,
                description: 'Time in minutes',
                axisSize: 'auto',
                tickMarksColor: '#888888'
            },
            series: [
                { dataField: 'SALESAMT', displayText: 'SALES' },
                { dataField: 'COLLECAMT', displayText: 'COLLECTIONS' },
            ]
        }
    ];


}