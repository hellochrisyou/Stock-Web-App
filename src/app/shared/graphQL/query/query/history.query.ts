import gql from 'graphql-tag';

export const FIND_ALL_HISTORY = gql`query findAllHistory($email: String) {
  findAllHistory(email: $email) {      
    id    
    historyArr {
          id
          email
          title
          type 
        } 
  }
}`;