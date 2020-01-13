import gql from 'graphql-tag';

export const GET_ALL_SEARCH_HISTORY = gql`query getAllActivityHis($email: String) {
  getAllActivityHis(email: $email) {
    email
    action
    dateRecorded
  }
}`;

export const GET_ALL_ACTIVITY_HISTORY = gql`query getAllSearchHis($email: String) {
  getAllSearchHis(email: $email) {
    email
    action
    dateRecorded
  }
}`;