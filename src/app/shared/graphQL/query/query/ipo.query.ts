import gql from 'graphql-tag';

export const GET_ALL_IPOS = gql`query queryAllIpo {
  getAllIpos {
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
