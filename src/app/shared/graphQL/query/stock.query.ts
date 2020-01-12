import gql from 'graphql-tag';

export const userInfoNoVar = gql`query allIpo {
  allStocks {
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
