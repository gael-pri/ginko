"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.categories = void 0;
// export const categories = [
//     {
//       id: 1,
//       name: 'The Awakening',
//       description: 'Kate Chopin',
//     },
//     {
//       id: 1,
//       name: 'City of Glass',
//       description: 'Paul Auster',
//     },
//   ];
// datasources/data.js
const category_1 = require("./entities/category");
exports.categories = [
    new category_1.Category("Technology", "All about tech"),
    new category_1.Category("Health", "Health-related topics"),
    new category_1.Category("Science", "Scientific discoveries and news"),
];
