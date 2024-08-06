import { DataSource } from "typeorm";

import { Article } from "./entities/article";
import { Chapter } from "./entities/chapter";
import { Category } from "./entities/category";
import { Section } from "./entities/section";
import { Tag } from "./entities/tag";

const ginkoSql = new DataSource({
  type: 'postgres',
  
  host: 'db',
  port: 5432,
  database: 'ginko',
  username: 'postgres',
  password: 'exemple',

  entities: [Article, Chapter, Category, Section, Tag],
  synchronize: true,
  logging: "all"
});


export default ginkoSql;