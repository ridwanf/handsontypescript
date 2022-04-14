"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const apollo_server_express_1 = require("apollo-server-express");
const schema_1 = require("@graphql-tools/schema");
const http_1 = require("http");
const ws_1 = require("ws");
const ws_2 = require("graphql-ws/lib/use/ws");
const http = require('http');
const graphql_subscriptions_1 = require("graphql-subscriptions");
const typeDefs_1 = __importDefault(require("./typeDefs"));
const resolvers_1 = __importDefault(require("./resolvers"));
const apollo_server_core_1 = require("apollo-server-core");
function startApolloServer() {
    return __awaiter(this, void 0, void 0, function* () {
        const app = (0, express_1.default)();
        const pubsub = new graphql_subscriptions_1.PubSub();
        const schema = (0, schema_1.makeExecutableSchema)({ typeDefs: typeDefs_1.default, resolvers: resolvers_1.default });
        const httpServer = (0, http_1.createServer)(app);
        // creating the websocket server
        const wsServer = new ws_1.WebSocketServer({
            server: httpServer,
            path: '/graphql'
        });
        const serverCleanup = (0, ws_2.useServer)({ schema }, wsServer);
        const apolloServer = new apollo_server_express_1.ApolloServer({
            schema,
            plugins: [
                (0, apollo_server_core_1.ApolloServerPluginDrainHttpServer)({ httpServer }),
                {
                    serverWillStart() {
                        return __awaiter(this, void 0, void 0, function* () {
                            return {
                                drainServer() {
                                    return __awaiter(this, void 0, void 0, function* () {
                                        yield serverCleanup.dispose();
                                    });
                                }
                            };
                        });
                    }
                }
            ],
            context: ({ req, res }) => ({ req, res, pubsub }),
        });
        yield apolloServer.start();
        apolloServer.applyMiddleware({ app, cors: true });
        httpServer.listen({ port: 8000 }, () => {
            console.log(`GraphQL Server ready. ${apolloServer.graphqlPath}`);
        });
    });
}
startApolloServer();
