//! means that the field is required, if you have an array and you put the ! after the [], it means the array can be null
//in order to define array data is required, we use the ! like below, where ! is after the String and after the []
//platform: [String!]!
export const typeDefs = `#graphql
    type Game {
        id: ID
        title: String
        platform: [String]
    }
`;
//there are 5 types: int, float, string, boolean, ID(serialize IDs as strings)
