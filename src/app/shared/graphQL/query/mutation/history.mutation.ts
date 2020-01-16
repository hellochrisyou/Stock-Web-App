import gql from 'graphql-tag';

// Search History
export const ADD_SEARCH_HISTORY = gql`mutation addHistories($histories: [HistoryInput]) {
  addHistories(histories: $histories) {
    email
  }
}`;

export const CLEAR_HISTORY = gql`mutation clearHistory($emailInput: String) {
  clearHistory(emailInput: $emailInput) {
    data {
      email
    }
  }
}`;