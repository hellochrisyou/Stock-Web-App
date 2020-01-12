import { ColumnObject } from '@shared/interface/interface';

export const STOCK_COL_OBJ: ColumnObject[] = [
    { columnId: 'Select', propertyName: '' },
    { columnId: 'Chart', propertyName: '' },
    { columnId: 'Symbol', propertyName: 'Symbol' },
    { columnId: 'Name', propertyName: 'Name' },
    { columnId: 'Exchange', propertyName: 'Exchange' },
    { columnId: 'Open', propertyName: 'Open' },
    { columnId: 'Low', propertyName: 'Low' },
    { columnId: 'High', propertyName: 'High' },
    { columnId: 'LatestPrice', propertyName: 'LatestPrice' },
    { columnId: 'Change', propertyName: 'Change' },
    { columnId: 'ChangePercent', propertyName: 'ChangePercent' },
    { columnId: 'Week52Low', propertyName: 'Week52Low' },
    { columnId: 'Week52High', propertyName: 'Week52High' },
    { columnId: 'YtdChange', propertyName: 'YtdChange' }
];

export const IPO_COL_OBJ: ColumnObject[] = [
    { columnId: 'Select', propertyName: 'Select' },
    { columnId: 'Symbol', propertyName: 'Symbol' },
    { columnId: 'Name', propertyName: 'Name' },
    { columnId: 'Market', propertyName: 'Market' },
    { columnId: 'State', propertyName: 'State' },
    { columnId: 'CEO', propertyName: 'CEO' },
    { columnId: 'URL', propertyName: 'URL' },
    { columnId: 'Revenue', propertyName: 'Revenue' },
    { columnId: 'StockholdEquity', propertyName: 'StockholderEquity' },
    { columnId: 'CompanyDesc', propertyName: 'CompanyDescription' },
    { columnId: 'PercentOffered', propertyName: 'PercentOffered' }
];

export const HISTORY_COL_OBJ: ColumnObject[] = [
    { columnId: 'email', propertyName: 'email' },
    { columnId: 'name', propertyName: 'title' },
    { columnId: 'dateRecorded', propertyName: 'dateRecorded' },
];
