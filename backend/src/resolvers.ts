import { Section } from "./datasources/entities/section";
import { Article } from "./datasources/entities/article";
import { Category } from "./datasources/entities/category";
import { Chapter } from "./datasources/entities/chapter";

export const resolvers = {
  Query: {
    articles: async () => {
      return await Article.find();
    },
    chapters: async () => {
      return await Chapter.find();
    },
    categories: async () => {
      return await Category.find();
    },
    sections: async () => {
      return await Section.find();
    },
  },
};