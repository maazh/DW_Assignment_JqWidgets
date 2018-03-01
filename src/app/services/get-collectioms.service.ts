import { Injectable } from '@angular/core';

import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()

export class GetCollectiomsService {
  addressData: Array<any>;
  constructor(private http: Http) { }

  getAddressData(){
      return this.http.get('https://api.myjson.com/bins/1d9cvp')
             .map((res:Response) => res.json());
  }


}