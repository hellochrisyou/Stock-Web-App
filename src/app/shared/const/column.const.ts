import { ColumnObject } from '@shared/interface/interface';

export const STOCK_COL_OBJ: ColumnObject[] = [
    { columnId: 'Select', propertyName: '' },
    { columnId: 'Chart', propertyName: '' },
    { columnId: 'symbol', propertyName: 'symbol' },
    { columnId: 'name', propertyName: 'name' },
    { columnId: 'exchange', propertyName: 'exchange' },
    { columnId: 'open', propertyName: 'open' },
    { columnId: 'low', propertyName: 'low' },
    { columnId: 'high', propertyName: 'high' },
    { columnId: 'latestPrice', propertyName: 'latestPrice' },
    { columnId: 'change', propertyName: 'change' },
    { columnId: 'changePercent', propertyName: 'changePercent' },
    { columnId: 'week52Low', propertyName: 'week52Low' },
    { columnId: 'week52High', propertyName: 'week52High' },
    { columnId: 'ytdChange', propertyName: 'ytdChange' }
];

export const SEARCH_COL_OBJ: ColumnObject[] = [
    { columnId: 'name', propertyName: 'name' },
    // { columnId: 'dateRecorded', prope rtyName: 'dateRecorded' },
];

export const STOCK_HISTORY_COL_OBJ: ColumnObject[] = [
    { columnId: 'symbol', propertyName: 'Symbol' },
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