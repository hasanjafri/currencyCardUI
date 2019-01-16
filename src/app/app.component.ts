import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';

import { PriceTile } from './models/pricetile';

import { AccountService } from './services/account/account.service';
import { CcyService } from './services/ccy/ccy.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  ccyData: any[] = [];
  accountData: any[] = [];
  priceModel: PriceTile;
  randomizePriceObserver: any;

  constructor(private ccyService: CcyService, private accountService: AccountService) { }

  ngOnInit() {
    this.ccyService.getCcyData().subscribe((data) => {
      this.ccyData.push(data);
    });

    this.accountService.getAccountData().subscribe((data) => {
      this.accountData.push(data);
    });

    this.priceModel = new PriceTile(this.ccyData[0].name, 'BUY', 'EUR', '0.00000', '0.00000', 'BUY', 'SELL');
    this.randomizePriceObserver = of(setInterval(() => {
      const min = 1.0200;
      const max = 1.1200;
      return {
        sellCurr: this.priceModel.sellCurrency = (Math.random() * (max - min) + min).toString(),
        buyCurr: this.priceModel.buyCurrency = (Math.random() * (max - min) + min).toString()
      };
    }, 2222));
  }

  onCcySelection(val) {
    console.log(val);
  }

  onAccountSelection(val) {
    console.log(val);
  }
}
