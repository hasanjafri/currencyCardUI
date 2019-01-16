import { Component, OnInit, DoCheck, Input } from '@angular/core';

import { PriceTile } from '../../models/pricetile';

@Component({
  selector: 'app-pricetile',
  templateUrl: './pricetile.component.html',
  styleUrls: ['./pricetile.component.scss']
})
export class PricetileComponent implements OnInit, DoCheck {

  @Input() priceTileModel: PriceTile;
  _model: PriceTile = new PriceTile('NON/NON', 'BUY', 'CAD', '0.00000', '0.00000', 'BUY', 'SELL');

  constructor() { }

  ngOnInit() {
  }

  ngDoCheck() {
    if (this._model.currencyPair === this.priceTileModel.currencyPair) {
      this.updatePriceOnly(this.priceTileModel);
    } else {
      this.updatePriceModel(this.priceTileModel);
    }
  }

  private updatePriceModel(priceModel: PriceTile) {
    this._model.tradeCurrency = this.validateChange(priceModel.currencyPair);
    this._model.currencyPair = priceModel.currencyPair;
    this._model.tradeDirection = priceModel.tradeDirection;
    this._model.buyTradeDesc = priceModel.buyTradeDesc;
    this._model.sellTradeDesc = priceModel.sellTradeDesc;
    this._model.buyCurrency = priceModel.buyCurrency;
    this._model.buyLeftPrice = priceModel.buyCurrency.substring(0, 4);
    this._model.buyMidPrice = priceModel.buyCurrency.substring(4, 6);
    this._model.buyRightPrice = priceModel.buyCurrency.substring(6, 7);
    this._model.sellCurrency = priceModel.sellCurrency;
    this._model.sellLeftPrice = priceModel.sellCurrency.substring(0, 4);
    this._model.sellMidPrice = priceModel.sellCurrency.substring(4, 6);
    this._model.sellRightPrice = priceModel.sellCurrency.substring(6, 7);
  }

  private updatePriceOnly(priceModel: PriceTile) {
    this._model.buyCurrency = priceModel.buyCurrency;
    this._model.buyLeftPrice = priceModel.buyCurrency.substring(0, 4);
    this._model.buyMidPrice = priceModel.buyCurrency.substring(4, 6);
    this._model.buyRightPrice = priceModel.buyCurrency.substring(6, 7);
    this._model.sellCurrency = priceModel.sellCurrency;
    this._model.sellLeftPrice = priceModel.sellCurrency.substring(0, 4);
    this._model.sellMidPrice = priceModel.sellCurrency.substring(4, 6);
    this._model.sellRightPrice = priceModel.sellCurrency.substring(6, 7);
  }

  validateChange(currencyPair: string): string {
    let val: string;
    if (this._model.currencyPair !== currencyPair) {
      currencyPair = this.priceTileModel.currencyPair.split('/');
      val = currencyPair[0];
    } else {
      val = this._model.tradeCurrency;
    }
    console.log(`Currency Pair: ${val}`);
    return val;
  }

  onTradeTypeClick() {
    this._model.tradeDirection = this._model.tradeDirection === 'BUY' ? 'SELL' : 'BUY';
  }

  onCurrencyClick() {
    const currencyPair = this._model.currencyPair.split('/');
    this._model.tradeCurrency = currencyPair[0] === this._model.tradeCurrency ? currencyPair[1] : currencyPair[0];
  }
}
