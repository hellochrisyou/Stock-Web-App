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
  Revenue?: number;
  StockholderEquity?: number;
  CompanyDescription?: string;
  PercentOffered?: number;
}

export interface User {
  uid?: string;
  stateId?: string;
  email?: string;
  photoURL?: string;
  displayName?: string;  
  // dateCreated?: Date;
  city?: string;
  state?: string;  
  age?: number;
}

export interface SearchHistory { 
  id?: string,
  email?: string,
  name?: string,
  url?: string
}

export interface StockHistory {
  id?: string,
  email?: string,
  name?: string,
  action?: string;
}