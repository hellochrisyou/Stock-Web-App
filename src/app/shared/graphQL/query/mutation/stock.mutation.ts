import gql from 'graphql-tag';

export const ADD_STOCK = gql`mutation addStock($stockArr: Stock[]) {
  addStock(stockArr: $stockArr) {}
}`;

export const UPDATE_STOCK = gql`mutation updateIpo($stockArr: Stock[]) {
  updateIpo(stockArr: $stockArr) {}
}`;

export const DELETE_STOCK = gql`mutation deleteIpo($stockArr: Stock[]) {
  deleteIpo(stockArr: $stockArr) {}
}`;