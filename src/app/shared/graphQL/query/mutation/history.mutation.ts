import gql from 'graphql-tag';

// Search History
export const addSearchHis = gql`mutation addSearchHis($searchHisArr: SearchHistory[]) {
  addSearchHis(searchHisArr: $searchHisArr) {}
}`;

export const updateSearchHis = gql`mutation updateSearchHis($searchHisArr: SearchHistory[]) {
  updateSearchHis(searchHisArr: $searchHisArr) {}
}`;

export const deleteSearchHist = gql`mutation deleteSearchHist($searchHisArr: SearchHistory[]) {
  deleteSearchHist(searchHisArr: $searchHisArr) {}
}`;

// Activity History
export const addActiveHist = gql`mutation addActiveHist($activeHisArr: ActivityHistory[]) {
  addActiveHist(activeHisArr: $activeHisArr) {}
}`;

export const updateActiveHist = gql`mutation updateActiveHist($activeHisArr: ActivityHistory[]) {
  updateActiveHist(activeHisArr: $activeHisArr) {}
}`;

export const deleteActiveHist = gql`mutation deleteActiveHist($activeHisArr: ActivityHistory[]) {
  deleteActiveHist(activeHisArr: $activeHisArr) {}
}`;
