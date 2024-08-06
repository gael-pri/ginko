import { gql } from "@apollo/client";

export const GET_ALL_CHAPTERS_QUERY = gql`
  query GetAllChapter {

    chapters {
        id_chapter
        title
        description
        sectionId
    }

  }
`;