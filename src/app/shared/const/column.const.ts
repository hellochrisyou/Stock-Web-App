import { ColumnObject } from '@shared/interface/interface';

export const STOCK_COL_OBJ: ColumnObject[] = [
    { columnId: 'symbol', propertyName: 'symbol' },
    { columnId: 'name', propertyName: 'name' },
    { columnId: 'low', propertyName: 'low' },
    { columnId: 'high', propertyName: 'high' },
    { columnId: 'latestPrice', propertyName: 'latestPrice' },
    { columnId: 'chnge', propertyName: 'chnge' },
    { columnId: 'chngePrcnt', propertyName: 'chngePrcnt' },
    { columnId: 'week52Low', propertyName: 'week52Low' },
    { columnId: 'week52High', propertyName: 'week52High' },
    { columnId: 'ytdChnge', propertyName: 'ytdChnge' }
];

export const PROF_COL_OBJ: ColumnObject[] = [
    { columnId: 'symbol', propertyName: 'symbol' },
    { columnId: 'coName', propertyName: 'coName' },
    { columnId: 'exchange', propertyName: 'exchange' },
    { columnId: 'industry', propertyName: 'industry' },
    { columnId: 'website', propertyName: 'website' },
    { columnId: 'description', propertyName: 'description' },
    { columnId: 'ceo', propertyName: 'ceo' },
    { columnId: 'sector', propertyName: 'sector' },
    { columnId: 'employees', propertyName: 'employees' },
    { columnId: 'city', propertyName: 'city' }
];

