"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Article = void 0;
const typeorm_1 = require("typeorm");
const type_graphql_1 = require("type-graphql");
require("reflect-metadata");
const chapter_1 = require("./chapter");
const tag_1 = require("./tag");
let Article = class Article extends typeorm_1.BaseEntity {
    constructor(title = '', subtitle, description, chapterId = '') {
        super();
        this.title = title;
        this.subtitle = subtitle;
        this.description = description;
        this.chapterId = chapterId;
        //this.tagId = tagId;
    }
};
exports.Article = Article;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    (0, type_graphql_1.Field)(type => type_graphql_1.ID),
    __metadata("design:type", Number)
], Article.prototype, "id_article", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], Article.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], Article.prototype, "subtitle", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], Article.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => chapter_1.Chapter, chapter => chapter.articles, { eager: true }),
    (0, typeorm_1.JoinColumn)({ name: "chapterId" }),
    __metadata("design:type", chapter_1.Chapter)
], Article.prototype, "chapter", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], Article.prototype, "chapterId", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => tag_1.Tag, tag => tag.articles),
    (0, typeorm_1.JoinTable)({
        name: "articles_tags",
        joinColumn: { name: "articleId", referencedColumnName: "id_article" },
        inverseJoinColumn: { name: "tagId", referencedColumnName: "id_tag" }
    }),
    __metadata("design:type", Array)
], Article.prototype, "tags", void 0);
exports.Article = Article = __decorate([
    (0, type_graphql_1.ObjectType)(),
    (0, typeorm_1.Entity)(),
    __metadata("design:paramtypes", [String, String, String, String])
], Article);
