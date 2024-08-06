"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const article_1 = require("./entities/article");
const chapter_1 = require("./entities/chapter");
const category_1 = require("./entities/category");
const section_1 = require("./entities/section");
const tag_1 = require("./entities/tag");
const ginkoSql = new typeorm_1.DataSource({
    type: 'postgres',
    host: 'db',
    port: 5432,
    database: 'ginko',
    username: 'postgres',
    password: 'exemple',
    entities: [article_1.Article, chapter_1.Chapter, category_1.Category, section_1.Section, tag_1.Tag],
    synchronize: true,
    logging: "all"
});
exports.default = ginkoSql;
