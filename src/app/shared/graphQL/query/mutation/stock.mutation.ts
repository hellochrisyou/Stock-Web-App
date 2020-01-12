import gql from 'graphql-tag';

export const addIpo = gql`mutation addStock($stockArr: Stock[]) {
  addStock(stockArr: $stockArr) {}
}`;

export const updateIpo = gql`mutation updateIpo($stockArr: Stock[]) {
  updateIpo(stockArr: $stockArr) {}
}`;

export const deleteIpo = gql`mutation deleteIpo($stockArr: Stock[]) {
  deleteIpo(stockArr: $stockArr) {}
}`;