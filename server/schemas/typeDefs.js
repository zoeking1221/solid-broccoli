// import the gql tagged template function
const { gql } = require('apollo-server-express');

// BookInput used for saveBook Mutation ('input type')

// create our tyepDefs
const typeDefs = gql`
    type Query {
        me: User
    }

    input BookInput {
        authors: [String]
        description: String!
        bookId: String!
        image: String
        link: String
        title: String!    
    }

    type Mutation {
        login(email: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth
        saveBook(bookData: BookInput): User
        removeBook(bookId: String!): User
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

    type Auth {
        token: ID!
        user: User
    }
`;

// export the typeDefs
module.exports = typeDefs;