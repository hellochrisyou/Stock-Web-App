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
      this.curStock.symbol = symbol;
      this.curStock.low = x.low;
      this.curStock.high = x.high;
      this.curStock.change = x.change;

      this.stockArr.push(this.curStock);
    });
  }

  public getLow(): ChartKeyValue {
    this.stockData = {
      data: [] = [],
      label: 'Low'
    };
    this.stockArr.forEach(element => {
      this.stockData.data.push(element.low);
    });

    return this.stockData;
  }

  public getHigh(): ChartKeyValue {
    this.stockData = {
      data: [] = [],
      label: 'High'
    };
    this.stockArr.forEach(element => {
      this.stockData.data.push(element.high);
    });

    return this.stockData;
  }

  public getChange(): ChartKeyValue {
    this.stockData = {
      data: [] = [],
      label: 'Change'
    };
    this.stockArr.forEach(element => {
      this.stockData.data.push(element.change);
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
