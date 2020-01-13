import gql from 'graphql-tag';

export const GET_ALL_STOCKS = gql`query allIpo {
  getAllStocks {
    Symbol
    Name
    Exchange
    Open
    Low
    High
    LatestPrice
    Change
    ChangePercent
    Week52Low
    Week52High
    YtdChange
  }
}`;
