import { ColumnObject } from '@shared/interface/interface';

export const STOCK_COL_OBJ: ColumnObject[] = [
    { columnId: 'symbol', propertyName: 'symbol' },
    { columnId: 'name', propertyName: 'name' },
    { columnId: 'primaryExchange', propertyName: 'primaryExchange' },
    { columnId: 'open', propertyName: 'open' },
    { columnId: 'low', propertyName: 'low' },
    { columnId: 'high', propertyName: 'high' },
    { columnId: 'latestPrice', propertyName: 'latestPrice' },
    { columnId: 'chnge', propertyName: 'chnge' },
    { columnId: 'chngePrcnt', propertyName: 'chngePrcnt' },
    { columnId: 'week52Low', propertyName: 'week52Low' },
    { columnId: 'week52High', propertyName: 'week52High' },
    { columnId: 'ytdChnge', propertyName: 'ytdChnge' }
];

export const IPO_COL_OBJ: ColumnObject[] = [
    { columnId: 'symbol', propertyName: 'symbol' },
    { columnId: 'coName', propertyName: 'coName' },
    { columnId: 'market', propertyName: 'market' },
    { columnId: 'city', propertyName: 'city' },
    { columnId: 'state', propertyName: 'state' },
    { columnId: 'ceo', propertyName: 'ceo' },
    { columnId: 'url', propertyName: 'url' },
    { columnId: 'sharesOffered', propertyName: 'sharesOffered' },
    { columnId: 'priceLow', propertyName: 'priceLow' },
    { columnId: 'priceHigh', propertyName: 'priceHigh' },
    { columnId: 'revenue', propertyName: 'revenue' },
    { columnId: 'netIncome', propertyName: 'netIncome' },
    { columnId: 'totalAssets', propertyName: 'totalAssets' },
    { columnId: 'stockholderEquity', propertyName: 'stockholderEquity' },
    { columnId: 'companyDescription', propertyName: 'companyDescription' },
    { columnId: 'businessDescription', propertyName: 'businessDescription' },
    { columnId: 'useOfProceeds', propertyName: 'useOfProceeds' },
    { columnId: 'competition', propertyName: 'competition' },
    { columnId: 'amount', propertyName: 'amount' },
    { columnId: 'percentOffered', propertyName: 'percentOffered' }
];