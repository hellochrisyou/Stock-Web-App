export interface Stock {
  Select?: string;
  Chart?: string;
  email?: string;
  symbol?: string;
  name?: string;
  exchange?: string;
  open?: number;
  low?: number;
  high?: number;
  latestPrice?: number;
  change?: number;
  changePercent?: number;
  stateId?: number;
  week52Low?: number;
  week52High?: number;
  ytdChange?: number;
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

export interface JsonString {
  jsonString: String;
}