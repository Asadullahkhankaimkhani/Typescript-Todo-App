"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const todoitem_1 = require("./todoitem");
console.clear();
let item1 = new todoitem_1.TodoItem(1, 'Purchase Mongo', false);
let item2 = new todoitem_1.TodoItem(2, 'Eat Biryani', false);
item1.printDetail();
item2.printDetail();
