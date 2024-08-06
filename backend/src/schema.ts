import gql from "graphql-tag";

export const typeDefs = gql`

  type Query {
    articles: [Article]
    categories: [Category]
    chapters: [Chapter]
    sections: [Section]
  }

  type Article {
    id_article: ID
    title: String
    subtitle: String
    description: String
    chapterId: String
  }
  type Chapter {
    id_chapter: ID
    title: String
    description: String
    sectionId: String
  }
  type Category {
    id: ID
    name: String
    description: String
  }
  type Section {
    id_section: ID
    name: String
    categoryId: String
  }
`;
