import { gql } from "@apollo/client"
export const GET_USER = gql `
  query ($id: Int) {
    User(id: $id) {
      id
      name
    }
  }
`