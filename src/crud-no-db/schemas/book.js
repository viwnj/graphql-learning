const { gql } = require("apollo-server");

const typeDefs = gql`
  type Book {
    title: String!
    author: String!
  }

  input CreateBook {
    title: String!
    author: String!
  }

  type BookCreationMutation implements MutationResponse {
    code: Int!
    success: Boolean!
    message: String!
    book: Book
  }
`;

export default typeDefs;
