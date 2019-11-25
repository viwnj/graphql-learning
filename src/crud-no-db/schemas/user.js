const { gql } = require("apollo-server");

const typeDefs = gql`
  type User {
    id: Int!
    username: String!
    email: String!
    password: String!
  }

  input CreateUser {
    username: String!
    email: String!
    password: String!
  }

  input UpdateUser {
    uid: Int!
    username: String
    email: String
    password: String
    oldPassword: String
  }

  type UserUpdateMutation implements MutationResponse {
    code: Int!
    success: Boolean!
    message: String!
    user: User
  }

  type UserCreationMutation implements MutationResponse {
    code: Int!
    success: Boolean!
    message: String!
    user: User
  }
`;

export default typeDefs;
