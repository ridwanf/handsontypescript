import express from "express";
import {ApolloServer } from "apollo-server-express";
import { makeExecutableSchema,  } from '@graphql-tools/schema';
import {createServer} from "http";
import { WebSocketServer } from 'ws';
import { useServer } from 'graphql-ws/lib/use/ws';

const http = require('http');

import { PubSub } from 'graphql-subscriptions';

import typeDefs from "./typeDefs";
import resolvers from "./resolvers";
import { ApolloServerPluginDrainHttpServer } from "apollo-server-core";



async function startApolloServer() {
  const app = express();
  const pubsub = new PubSub();
  const schema = makeExecutableSchema({typeDefs, resolvers});
  const httpServer = createServer(app);
   // creating the websocket server
   const wsServer = new WebSocketServer({
    server: httpServer,
    path: '/graphql'
  });

  const serverCleanup = useServer({ schema }, wsServer);

  const apolloServer = new ApolloServer({
    schema,
    plugins: [
      ApolloServerPluginDrainHttpServer({httpServer}),
      {
        async serverWillStart() {
          return {
            async drainServer() {
              await serverCleanup.dispose()
            }
          }
        }
      }
    ],
    context: ({req, res}: any) => ({req, res, pubsub}),
  })

 
  await apolloServer.start()

  apolloServer.applyMiddleware({ app, cors: true});

  httpServer.listen({port: 8000}, () => {
    console.log(`GraphQL Server ready. ${apolloServer.graphqlPath}`)
  });
}

startApolloServer();