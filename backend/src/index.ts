import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { typeDefs } from './schema';
import { resolvers } from './resolvers';
import ginkoSql from "./datasources/typeORMConfig";

async function startApolloServer() {

    await ginkoSql.initialize();

    const server = new ApolloServer({ typeDefs, resolvers });
  
    const { url } = await startStandaloneServer(server, {
      context: async () => {
        const { cache } = server;
        
        return { dataSources: { ginkoSql, }, };
      },
    });
  
    console.log(`
      🚀  Server is running!
      📭  Query at ${url}
    `);
  }
  
  startApolloServer();