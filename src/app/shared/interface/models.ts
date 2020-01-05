import { HttpResponse } from '@angular/common/http';

export interface Stock {
    symbol?: string,
    name?: string,
    primaryExchange?: string,
    open?: number,
    low?: number,
    high?: number,
    latestPrice?: number,
    chnge?: number,
    chngePrcnt?: number,
    week52Low?: number,
    week52High?: number,
    ytdChnge?: number,
}

export interface Ipo {
    symbol?: string,
    coName?: string,
    market?: string,
    city?: string,
    state?: string,
    ceo?: string,
    url?: string,
    sharesOffered?: number,
    priceLow?: number,
    priceHigh?: number,
    revenue?: number,
    netIncome?: number,
    totalAssets?: number,
    stockholderEquity?: number,
    companyDescription?: string,
    businessDescription?: string,
    useOfProceeds?: string,
    competition?: string,
    amount?: number,
    percentOffered?: number
}


