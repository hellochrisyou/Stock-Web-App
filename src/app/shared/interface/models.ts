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

export interface BaseHistory {
  id?: string;
  email?: string;
  title?: string;
  type?: string;
  dateRecorded?: Date;
}



export interface HistoryInput {
  id?: string,
  email?: string,
  title?: string,
  type?: string,
  dateRecorded?: Date
}

export interface Response_History {
  data: BaseHistory[]
}

export interface ErrorDto {
  code: string; f
  description: string;
  severity: string;
}

export interface ValidationError {
  errors: ErrorDto[];
  path: string;
  sourceValue: string;
}

export interface Response {
  message: string;
  recordCount: number;
  startPosition: number;
  status: string;
  totalNumberOfRecords: number;
  validationErrors: ValidationError[];
}

// export interface HistoryResponse extends Response  {
//     data: BaseHistory[];
//   }

export interface APIRequestStatus<T> {
  status: string;
  message: string;
  validationErrors: ValidationError[];
  data?: T[];
}

export interface ErrorDto {
  code: string;
  description: string;
  severity: string;
}

export interface ValidationError {
  errors: ErrorDto[];
  path: string;
  sourceValue: string;
}

export interface APIRequestStatus<T> {
  status: string;
  message: string;
  validationErrors: ValidationError[];
  data?: T[];
}
