import gql from 'graphql-tag';

// Search History
export const ADD_SEARCH_HISTORY = gql`mutation addSearchHistory($searchHisArr: SearchHistory) {
  addSearchHistory(searchHisArr: $searchHisArr) {dateRecorded}
}`;

// export const REMOVE_SEARCH_HISTORY = gql`mutation clearSearchHistory($searchHisArr: SearchHistory[]) {
//   removeSearchHistory(searchHisArr: $searchHisArr) {}
// }`;

// // Activity History
// export const ADD_ACTIVITY_HISTORY = gql`mutation addActivityHistory($activeHisArr: ActivityHistory[]) {
//   addActivityHistory(activeHisArr: $activeHisArr) {}
// }`;

// export const UPDATE_ACTIVITY_HISTORY = gql`mutation updateActivityHistory($activeHisArr: ActivityHistory[]) {
//   updateActivityHistory(activeHisArr: $activeHisArr) {}
// }`;

// export const REMOVE_HISTORY = gql`mutation removeActivityHistory($activeHisArr: ActivityHistory[]) {
//   removeActivityHistory(activeHisArr: $activeHisArr) {}
// }`;
