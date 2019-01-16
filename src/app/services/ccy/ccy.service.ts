import { Injectable } from '@angular/core';
import { Ccy } from '../../models/ccy';
import { Observable, from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CcyService {

  private ccyData: any;

  constructor() { }

  getCcyData(): Observable<Ccy[]> {
    this.ccyData = [
      {
        'ccyId': 1,
        'ccyName': 'EUR/USD'
      },
      {
        'ccyId': 2,
        'ccyName': 'EUR/CAD'
      },
      {
        'ccyId': 3,
        'ccyName': 'EUR/JPY'
      },
      {
        'ccyId': 4,
        'ccyName': 'EUR/AUD'
      },
      {
        'ccyId': 5,
        'ccyName': 'EUR/GBR'
      }
    ];

    return from(this.ccyData
      .map(item => {
        return new Ccy(item.ccyId, item.ccyName);
      }));
  }
}
