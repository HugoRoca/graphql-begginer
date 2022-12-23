import express from 'express';
import compression from 'compression';
import cors from 'cors';
import { graphqlHTTP } from 'express-graphql';
import schema from './schema';
const app = express();

app.use('*', cors())
  .use(compression());

app.use('/', graphqlHTTP({
  schema,
  graphiql: true,
}))

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT} http://localhost:${PORT}/graphql`);
})