import gql from 'graphql-tag';

export const queryAllIpo = gql`query queryAllIpo {
  queryAllIpo {
    Name
    Market
    City
    State
    CEO
    URL
    PriceLow
    PriceHigh
    Revenue
    StockholderEquity
    CompanyDescription
    PercentOffered
  }
}`;
