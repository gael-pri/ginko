"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeDefs = void 0;
const graphql_tag_1 = __importDefault(require("graphql-tag"));
exports.typeDefs = (0, graphql_tag_1.default) `

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
