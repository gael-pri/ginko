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
exports.Section = void 0;
const typeorm_1 = require("typeorm");
const type_graphql_1 = require("type-graphql");
require("reflect-metadata");
const category_1 = require("./category");
const chapter_1 = require("./chapter");
let Section = class Section extends typeorm_1.BaseEntity {
    constructor(name = '', categoryId = '') {
        super();
        this.name = name;
        this.categoryId = categoryId;
    }
};
exports.Section = Section;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    (0, type_graphql_1.Field)(type => type_graphql_1.ID),
    __metadata("design:type", Number)
], Section.prototype, "id_section", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], Section.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => category_1.Category, category => category.sections, { eager: true }),
    (0, typeorm_1.JoinColumn)({ name: "categoryId" }),
    __metadata("design:type", category_1.Category)
], Section.prototype, "category", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], Section.prototype, "categoryId", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => chapter_1.Chapter, chapter => chapter.section),
    __metadata("design:type", Array)
], Section.prototype, "chapters", void 0);
exports.Section = Section = __decorate([
    (0, type_graphql_1.ObjectType)(),
    (0, typeorm_1.Entity)(),
    __metadata("design:paramtypes", [String, String])
], Section);
