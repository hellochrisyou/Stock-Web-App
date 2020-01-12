import gql from 'graphql-tag';

export const queryAllSearchHis = gql`query queryAllSearchHis($email: String) {
  queryAllActivityHis(email: $email) {
    email
    title
    dateRecorded
  }
}`;

export const queryAllActiveHis = gql`query queryAllActiveHis($email: String) {
  queryAllSearchHis(email: $email) {
    email
    action
    dateRecorded
  }
}`;