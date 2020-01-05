export interface Stock {
    Select?: string,
    Symbol?: string,
    Name?: string,
    Exchange?: string,
    Open?: number,
    Low?: number,
    High?: number,
    LatestPrice?: number,
    Change?: number,
    ChangePercent?: number,
    Week52Low?: number,
    Week52High?: number,
    YtdChange?: number,
}

export interface Ipo {
    Select?: string,
    Symbol?: string,
    Name?: string,
    Market?: string,
    City?: string,
    State?: string,
    CEO?: string,
    URL?: string,
    SharesOffered?: number,
    PriceLow?: number,
    PriceHigh?: number,
    Revenue?: number,
    NetIncome?: number,
    TotalAssets?: number,
    StockholderEquity?: number,
    CompanyDescription?: string,
    BusinessDescription?: string,
    UseOfProceeds?: string,
    Competition?: string,
    Amount?: number,
    PercentOffered?: number
}


