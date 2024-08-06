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
exports.Chapter = void 0;
const typeorm_1 = require("typeorm");
const type_graphql_1 = require("type-graphql");
require("reflect-metadata");
const article_1 = require("./article");
const section_1 = require("./section");
let Chapter = class Chapter extends typeorm_1.BaseEntity {
    constructor(title = '', description, sectionId = '') {
        super();
        this.title = title;
        this.description = description;
        this.sectionId = sectionId;
    }
};
exports.Chapter = Chapter;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    (0, type_graphql_1.Field)(type => type_graphql_1.ID),
    __metadata("design:type", Number)
], Chapter.prototype, "id_chapter", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], Chapter.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], Chapter.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => section_1.Section, section => section.chapters, { eager: true }),
    (0, typeorm_1.JoinColumn)({ name: "sectionId" }),
    __metadata("design:type", section_1.Section)
], Chapter.prototype, "section", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], Chapter.prototype, "sectionId", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => article_1.Article, article => article.chapter),
    __metadata("design:type", Array)
], Chapter.prototype, "articles", void 0);
exports.Chapter = Chapter = __decorate([
    (0, type_graphql_1.ObjectType)(),
    (0, typeorm_1.Entity)(),
    __metadata("design:paramtypes", [String, String, String])
], Chapter);
