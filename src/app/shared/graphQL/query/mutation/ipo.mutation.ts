import gql from 'graphql-tag';

export const addIpo = gql`mutation addIpo($ipoArr: Ipo[]) {
  allStocks(ipoArr: $ipoArr) {}
}`;

export const updateIpo = gql`mutation updateIpo($ipoArr: Ipo[]) {
  updateIpo(ipoArr: $ipoArr) {}
}`;

export const deleteIpo = gql`mutation deleteIpo($ipoArr: Ipo[]) {
  deleteIpo(ipoArr: $ipoArr) {}
}`;
