// import the gql tagged template function
const { gql } = require('apollo-server-express');

// create our typeDefs
const typeDefs = gql`
type Query {
  me: User
}

type User {
  _id: ID
  username: String
  email: String
  bookCount: Int
  savedBooks: [Book]
}

type Book {
  bookId: String
  authors: [String]
  description: String
  title: String
  image: String
  link: String
}

input BookInput {
  bookId: ID
  authors: [String]
  description: String
  image: String
  link: String
  title: String
}

type Mutation {
  login(email: String!, password: String!): Auth
  addUser(username: String!, email: String!, password: String!): Auth
  saveBook(bookData: BookInput!): User
  deleteBook(bookId: ID!): User
} 

type Auth {
  token: ID!
  user: User
}
`;

// export the typeDefs
module.exports = typeDefs;
