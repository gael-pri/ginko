import { gql } from "@apollo/client";

export const GET_ALL_ARTICLES_QUERY = gql`
  query GetAllArticle {

    articles {
        id_article
        title
        subtitle
        description
        chapterId
    }

  }
`;