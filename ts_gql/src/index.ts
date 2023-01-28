import { ApolloServer } from '@apollo/server';

import { startStandaloneServer } from '@apollo/server/standalone';

const typeDefs = `
  type Query {
    getUser(id:ID!): User
  }

  type Mutation {
    addUser(name:String!): User
  }

  type User{
    id: ID
    name: String
    height(unit:METRIC="FOOT"):String
  }

  enum METRIC{
    FOOT
    METER
  }
`;



const resolvers = {
    Query: {
        getUser: (root, args, context) => {
            console.log(args);
            if (args.id == "1") {
                return {
                    id: args.id,
                    name: "test",
                };
            } else {
                return {
                    name: "none",
                    id: args.id,
                };
            }
        }
    },
    Mutation: {
        addUser: (root, args, context) => {
            console.log(args);
            return {
                id: 5,
                name: "test",
                height: "12"
            };
        }
    },
    User: {
        height(obj, args, context, info) {
            console.log(args);
            return "5.6";
        }
    }
};

const server = new ApolloServer({

    typeDefs,

    resolvers,

});

const { url } = await startStandaloneServer(server, {

    listen: { port: 4000 },

});


console.log(`🚀  Server ready at: ${url}`);