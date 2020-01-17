import gql from 'graphql-tag';

export const GET_ALL_HISTORY = gql`query findAllHistory($email: String) {
  findAllHistory(email: $email) {      
        id
        email
        title
        type 
  }
}`;