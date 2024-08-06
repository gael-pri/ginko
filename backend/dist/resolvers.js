"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolvers = void 0;
const section_1 = require("./datasources/entities/section");
const article_1 = require("./datasources/entities/article");
const category_1 = require("./datasources/entities/category");
const chapter_1 = require("./datasources/entities/chapter");
exports.resolvers = {
    Query: {
        articles: async () => {
            return await article_1.Article.find();
        },
        chapters: async () => {
            return await chapter_1.Chapter.find();
        },
        categories: async () => {
            return await category_1.Category.find();
        },
        sections: async () => {
            return await section_1.Section.find();
        },
    },
};
