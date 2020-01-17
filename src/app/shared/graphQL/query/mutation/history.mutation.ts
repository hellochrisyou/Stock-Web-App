import gql from 'graphql-tag';

// Search History
export const ADD_HISTORY = gql`mutation addHistory($history: [HistoryInput]) {
  addHistory(history: $history) {
      email    
  }
}`;

export const CLEAR_HISTORY = gql`mutation clearHistory($email: String, $type: String) {
  clearHistory(email: $email, type: $type) {
      email    
  }
}`;