import { ItemCollection } from "./itemCollection";
console.clear();

let col1:ItemCollection = new ItemCollection();


col1.addTodo('Purachase Mongo');
col1.addTodo('Eat Biryani');
col1.addTodo('Tikka');
col1.taskDone(2);
col1.printDetails();