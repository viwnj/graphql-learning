const { ApolloServer } = require("apollo-server");
import typeDefs from "./crud-no-db/schemas";
import resolvers from "./crud-no-db/resolvers";

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`Server running on ${url}`);
});
