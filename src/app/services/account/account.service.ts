import { Injectable } from '@angular/core';
import { Account } from '../../models/account';
import { Observable, from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  private accountData: any;

  constructor() { }

  getAccountData(): Observable<Account[]> {
    this.accountData = [
      {
        'accountId': 999995,
        'accountName': 'Ali'
      },
      {
        'accountId': 999996,
        'accountName': 'Hasan'
      },
      {
        'accountId': 999997,
        'accountName': 'Safdar'
      },
      {
        'accountId': 999998,
        'accountName': 'Syed'
      },
      {
        'accountId': 999999,
        'accountName': 'Jafri'
      }
    ];

    return from(this.accountData
      .map(item => {
        return new Account(item.accountId, item.accountName);
      }));
  }
}
