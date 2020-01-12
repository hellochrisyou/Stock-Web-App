export interface Stock {
    stateId?: number;
    Select?: string;
    Chart?: string;
    Symbol?: string;
    Name?: string;
    Exchange?: string;
    Open?: number;
    Low?: number;
    High?: number;
    LatestPrice?: number;
    Change?: number;
    ChangePercent?: number;
    Week52Low?: number;
    Week52High?: number;
    YtdChange?: number;
}

export interface Ipo {
    stateId?: number;
    Select?: string;
    Symbol?: string;
    Name?: string;
    Market?: string;
    City?: string;
    State?: string;
    CEO?: string;
    URL?: string;
    SharesOffered?: number;
    PriceLow?: number;
    PriceHigh?: number;
    Revenue?: number;
    NetIncome?: number;
    TotalAssets?: number;
    StockholderEquity?: number;
    CompanyDescription?: string;
    BusinessDescription?: string;
    UseOfProceeds?: string;
    Competition?: string;
    Amount?: number;
    PercentOffered?: number;
}

export interface User {
    uid: string;
    stateId?: string;
    email: string;
    photoURL?: string;
    displayName?: string;
    dateCreated?: Date;
    phoneNumber?: number;
    address?: string;
    city?: string;
    state?: string;
    age?: number;
}

export interface SearchHistory {
    email?: string;
    title?: string;
    givenDate?: Date;
}

export interface ActivityHistory {
    email?: string;
    move?: string;
    givenDate?: Date;
}
