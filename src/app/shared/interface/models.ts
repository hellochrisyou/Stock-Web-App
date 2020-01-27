export interface Stock {
  options?: string;
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
  week52Low?: number;
  week52High?: number;
  ytdChange?: number;
  isCompleted?: boolean;
}

export interface User {
  uid?: string;
  stateId?: string;
  email?: string;
  photoURL?: string;
  displayName?: string;
  retirementAge?: number;
}

export interface SearchHistory {
  id?: string,
  email?: string,
  name?: string,
  url?: string
  isCompleted?: boolean;
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