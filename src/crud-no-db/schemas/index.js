import { gql } from "apollo-server";
import bookTypeDefs from "./book";
import userTypeDefs from "./user";

const typeDefs = gql`
  interface MutationResponse {
    code: Int!
    success: Boolean!
    message: String!
  }

  type Mutation {
    addBook(input: CreateBook): BookCreationMutation # typeDefs/book.js
    createUser(input: CreateUser): UserCreationMutation
  }

  type Query {
    books: [Book]
    users: [User]
  }
`;

export default [typeDefs, bookTypeDefs, userTypeDefs];
