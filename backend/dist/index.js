"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = require("@apollo/server");
const standalone_1 = require("@apollo/server/standalone");
const schema_1 = require("./schema");
const resolvers_1 = require("./resolvers");
const typeORMConfig_1 = __importDefault(require("./datasources/typeORMConfig"));
async function startApolloServer() {
    await typeORMConfig_1.default.initialize();
    const server = new server_1.ApolloServer({ typeDefs: schema_1.typeDefs, resolvers: resolvers_1.resolvers });
    const { url } = await (0, standalone_1.startStandaloneServer)(server, {
        context: async () => {
            const { cache } = server;
            return { dataSources: { ginkoSql: typeORMConfig_1.default, }, };
        },
    });
    console.log(`
      🚀  Server is running!
      📭  Query at ${url}
    `);
}
startApolloServer();
