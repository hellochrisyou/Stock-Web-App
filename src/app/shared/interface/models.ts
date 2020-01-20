export interface Stock {
  stateId?: string;
  Select?: string;
  Chart?: string;
  email?: string;
  Symbol?: string;
  Name?: string;
  Exchange?: string;
  Open?: string;
  Low?: string;
  High?: string;
  LatestPrice?: string;
  Change?: string;
  ChangePercent?: string;
  Week52Low?: string;
  Week52High?: string;
  YtdChange?: string;
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