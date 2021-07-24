import { TodoItem } from "./todoitem";

console.clear();

let item1 : TodoItem = new TodoItem(1,'Purchase Mongo',false);
let item2 : TodoItem = new TodoItem(2,'Eat Biryani',false);
item1.printDetail();
item2.printDetail();