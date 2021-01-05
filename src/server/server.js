/*
  --- Configuración de GraphQL Server ---
*/

import { GraphQLServer } from "graphql-yoga";
import path from "path";
import resolvers from "../graphql/resolvers";

// Importación de los schemas.graphql
const queries = path.join(__dirname, "../graphql/schema/Query.graphql");
const mutations = path.join(__dirname, "../graphql/schema/Mutation.graphql");

// creación del server
const server = new GraphQLServer({
  typeDefs: [queries, mutations],
  resolvers,
});

export default server;
