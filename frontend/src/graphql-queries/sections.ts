import { gql } from "@apollo/client";

export const GET_ALL_SECTIONS_QUERY = gql`
  query GetAllSection {

    sections {
        id_section
        name
        categoryId
    }

  }
`;