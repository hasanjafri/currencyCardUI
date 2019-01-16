export class PriceTile {
  currencyPair: any;
  tradeDirection: string;
  buyTradeDesc: string;
  sellTradeDesc: string;
  tradeCurrency: string;
  buyCurrency: string;
  buyLeftPrice: string;
  buyMidPrice: string;
  buyRightPrice: string;
  sellCurrency: string;
  sellLeftPrice: string;
  sellMidPrice: string;
  sellRightPrice: string;

  constructor(ccy: string, tradeDir: string, tradeCurr: string, buyCurr: string,
     sellCurr: string, buyTradeDesc: string, sellTradeDesc: string) {
       this.currencyPair = ccy;
       this.tradeDirection = tradeDir;
       this.buyTradeDesc = buyTradeDesc;
       this.sellTradeDesc = sellTradeDesc;
       this.tradeCurrency = tradeCurr;
       this.buyCurrency = buyCurr;
       this.buyLeftPrice = this.buyCurrency.substring(0, 4);
       this.buyMidPrice = this.buyCurrency.substring(4, 6);
       this.buyRightPrice = this.buyCurrency.substring(6, 7);
       this.sellCurrency = sellCurr;
       this.sellLeftPrice = this.sellCurrency.substring(0, 4);
       this.sellMidPrice = this.sellCurrency.substring(4, 6);
       this.sellRightPrice = this.sellCurrency.substring(6, 7);
  }
}
