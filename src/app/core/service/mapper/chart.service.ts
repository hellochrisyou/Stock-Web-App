import { Injectable } from '@angular/core';
import { Stock } from '@shared/interface/models';
import { ChartDataSets } from 'chart.js';

@Injectable({
  providedIn: 'root'
})
export class ChartService {

  stockArr: Stock[];
  // tslint:disable-next-line: variable-name
  private _curStock: Stock = {
    Select: 'Select',
    Chart: 'Chart',
    email: '',
    Symbol: '',
    Name: '',
    Exchange: '',
    Open: 0,
    Low: 0,
    High: 0,
    LatestPrice: 0,
    Change: 0,
    ChangePercent: 0,
    stateId: 0,
    Week52Low: 0,
    Week52High: 0,
    YtdChange: 0,
  };

  dataArray: ChartKeyValue[];

  stockData: ChartKeyValue = {
    data: [],
    label: ''
  };

  chartData: ChartDataSets[] = [
    { data: [], label: 'Low' },
  ];
  highData: ChartDataSets[] = [
    { data: [], label: 'High' },
  ];
  latestPriceData: ChartDataSets[] = [
    { data: [], label: 'Volume' },
  ];
  changeData: ChartDataSets[] = [
    { data: [], label: 'Change' },
  ];

  constructor() { }

  public resolveChartArray(data: any, symbol: string): void {
    this.stockArr = [];
    data.forEach(x => {
      this.curStock = {
        Select: null,
        Chart: null
      };
      this.curStock.Symbol = symbol;
      this.curStock.Low = x.low;
      this.curStock.High = x.high;
      this.curStock.Change = x.change;

      this.stockArr.push(this.curStock);
    });
  }

  public getLow(): ChartKeyValue {
    this.stockData = {
      data: [] = [],
      label: 'Low'
    };
    this.stockArr.forEach(element => {
      this.stockData.data.push(element.Low);
    });

    return this.stockData;
  }

  public getHigh(): ChartKeyValue {
    this.stockData = {
      data: [] = [],
      label: 'High'
    };
    this.stockArr.forEach(element => {
      this.stockData.data.push(element.High);
    });

    return this.stockData;
  }

  public getChange(): ChartKeyValue {
    this.stockData = {
      data: [] = [],
      label: 'Change'
    };
    this.stockArr.forEach(element => {
      this.stockData.data.push(element.Change);
    });
    return this.stockData;
  }

  public get curStock(): Stock {
    return this._curStock;
  }
  public set curStock(value: Stock) {
    this._curStock = value;
  }
}

export interface ChartKeyValue {
  data: number[];
  label: string;
}
