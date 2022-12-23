import express from 'express';
import compression from 'compression';
import cors from 'cors';
import schema from './schema';
import { ApolloServer } from 'apollo-server-express';
import { createServer } from 'http';

const app = express();

app.use('*', cors()).use(compression());

// app.use('/', graphqlHTTP({
//   schema,
//   graphiql: true,
// }))

async function startServer() {
  const server = new ApolloServer({
    schema,
    introspection: true,
  });

  await server.start();

  server.applyMiddleware({ app });
}

startServer();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT} http://localhost:${PORT}/graphql`);
})