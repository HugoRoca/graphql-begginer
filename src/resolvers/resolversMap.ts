import { IResolvers } from '@graphql-tools/utils';

const query: IResolvers = {
  Query: {
    hello(): string {
      return 'Hello World! -----';
    },
    hello2(__: void, { name }): string {
      return `Hello ${name}! How are you?`;
    },
    hello3: () => 'Hello3 World!',
  },
}

export default query;