import express from 'express';
import compression from 'compression';
import cors from 'cors';
import { IResolvers } from '@graphql-tools/utils';
import { GraphQLSchema } from 'graphql';
import { makeExecutableSchema } from 'graphql-tools';
import { graphqlHTTP } from 'express-graphql';

const app = express();

app.use('*', cors())
  .use(compression());

const typeDefs = `
  type Query {
    hello: String!
    hello2(name: String!): String
    hello3: String!
  }`;

const resolvers: IResolvers = {
  Query: {
    hello(): string {
      return 'Hello World!';
    },
    hello2(__: void, { name }): string {
      return `Hello ${name}!`;
    },
    hello3: () => 'Hello3 World!',
  },
}

const schema: GraphQLSchema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

app.use('/', graphqlHTTP({
  schema,
  graphiql: true,
}))

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT} http://localhost:${PORT}/graphql`);
})