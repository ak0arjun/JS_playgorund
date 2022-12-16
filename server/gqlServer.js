var express = require('express');
var { graphqlHTTP } = require('express-graphql');
var { buildSchema } = require('graphql');
const { makeExecutableSchema } = require("graphql-tools");
// Construct a schema, using GraphQL schema language
var schema =  `
  type Query {
    getUser(id:ID!): User
  }

  type User{
    name: String
    height(unit:METRIC):String
  }

  enum METRIC{
    FOOT
    METER
  }
`;



const resolvers = {
  Query:{
    getUser: (root, args, context) => {
      console.log(args);
      if(args.id=="1"){
          return {
              name:"test",
              height:"12"
          };
      }else{
          return {
              name:"none"
          };
      }
    }
  },
  User:{
    height(obj, args, context, info) {
        console.log(args);
        return "5.6";
      }
  }
};
const finalSchema = makeExecutableSchema({ typeDefs:schema, resolvers });
// The root provides a resolver function for each API endpoint
var root = {
  
  
};

var app = express();
app.use('/', graphqlHTTP({
  schema: finalSchema,
  rootValue: root,
  graphiql: true,
}));
app.listen(4000);
console.log('Running a GraphQL API server at http://localhost:4000/');