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
    Chart: 'Chart'
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
    { data: [], label: 'Latest Price' },
  ];
  changeData: ChartDataSets[] = [
    { data: [], label: 'Change' },
  ];
  constructor() { }

  resolveChartArray(data: any, symbol: string): Stock[] {
    this.stockArr = [];
    data.forEach(x => {
      this.curStock = {
        Select: 'Select',
        Chart: 'Chart'
      };
      this.curStock.Symbol = symbol;
      this.curStock.Open = x.open;
      this.curStock.Low = x.low;
      this.curStock.High = x.high;
      this.curStock.LatestPrice = x.latestPrice;
      this.curStock.Change = x.change;
      this.curStock.ChangePercent = x.changePercent;
      this.curStock.Week52Low = x.week52Low;
      this.curStock.Week52High = x.week52High;
      this.curStock.YtdChange = Math.round(x.ytdChange * 100000) / 100000

        ;
      this.stockArr.push(this.curStock);
    });
    return this.stockArr;
  }

  getLow(): ChartKeyValue {
    this.stockData = {
      data: [],
      label: 'Low'
    };
    this.stockArr.forEach(element => {
      this.stockData.data.push(element.Low);
    });

    return this.stockData;
  }

  getHigh(): ChartKeyValue {
    this.stockData = {
      data: [],
      label: 'High'
    };
    this.stockArr.forEach(element => {
      this.stockData.data.push(element.High);
    });

    return this.stockData;
  }

  getLatestPrice(): ChartKeyValue {
    this.stockData = {
      data: [],
      label: 'Latest Price'
    };
    this.stockArr.forEach(element => {
      this.stockData.data.push(element.LatestPrice);
    });

    return this.stockData;
  }

  getChange(): ChartKeyValue {
    this.stockData = {
      data: [],
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
