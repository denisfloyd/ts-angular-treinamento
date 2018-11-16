"use strict";
exports.__esModule = true;
var todoclasses_1 = require("./todoclasses");
var list = new todoclasses_1["default"]();
list.addTodo({
    title: 'Learn Typescript',
    isDone: false
});
console.log(list);
