const { ApolloServer } = require('@apollo/server');
const { startStandaloneServer } = require('@apollo/server/standalone');
const { authMiddleware } = require('./middlewares/authMiddleware');

const typeDefs = `#graphql
  type User {
    id: ID!
    username: String!
    email: String!
  }

  type AuthPayload {
    token: String!
    user: User!
  }

  type Query {
    me: User
  }

  type Mutation {
    signup(username: String!, email: String!, password: String!): AuthPayload
    login(username: String!, password: String!): AuthPayload
  }
`;

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      return context.user;
    },
  },
  Mutation: {
    signup: async (parent, args) => {
      const { username, email, password } = args;
      return await require('./controllers/authController').signup(username, email, password);
    },
    login: async (parent, args) => {
      const { username, password } = args;
      return await require('./controllers/authController').login(username, password);
    },
  },
};


async function startApolloServer() {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
  });

  const { url } = await startStandaloneServer(server, {
    context: async ({ req }) => {
      return authMiddleware(req);
    },
  });

  console.log(`🚀  Server ready at: ${url}`);
}

startApolloServer();