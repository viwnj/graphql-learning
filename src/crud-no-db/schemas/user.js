const { gql } = require("apollo-server");

const typeDefs = gql`
  type User {
    id: ID!
    username: String!
    email: String!
    password: String!
  }

  input CreateUser {
    username: String!
    email: String!
    password: String!
  }

  type UserCreationMutation implements MutationResponse {
    code: Int!
    success: Boolean!
    message: String!
    user: User
  }
`;

export default typeDefs;
