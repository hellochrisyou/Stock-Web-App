import gql from 'graphql-tag';

// Search History
export const ADD_SEARCH_HISTORY = gql`mutation addHistory($historyInput: HistoryInput) {
  addHistory(historyInput: $historyInput) {
    email
  }
}`;

export const CLEAR_HISTORY = gql`mutation clearHistory($historyInput: HistoryInput) {
  clearHistory(historyInput: $historyInput) 
}`;