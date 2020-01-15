import gql from 'graphql-tag';

export const GET_ALL_HISTORY = gql`query getAllHistory($emailInput: String) {
  getAllHistory(emailInput: $emailInput) {      
      data {
        email
        title
        type 
        dateRecorded
      }
  }
}`;