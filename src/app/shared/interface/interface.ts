import { HttpResponse } from '@angular/common/http';

export interface Stock {
    symbol: string,
    name: string,
    low: number,
    high: number,
    latestPrice: number,
    chnge: number,
    chngePrcnt: number,
    week52Low: number,
    week52Highh: number,
    ytdChnge: number
}

export interface Profile {
    symbol: string,
    coName: string,
    exchange: string,
    industry: string,
    website: string,
    description: string,
    Ceo: string,
    sector: string,
    employees: number,
    city: string
}

export interface RequestCacheEntry {
    url: string;
    response: HttpResponse<any>;
    lastRead: number;
}

export interface ColumnObject {
    columnId: string,
    propertyName: string | number | Date
}