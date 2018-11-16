"use strict";
exports.__esModule = true;
var TodoList = /** @class */ (function () {
    function TodoList() {
        this.itens = [];
    }
    TodoList.prototype.addTodo = function (newTodo) {
        this.itens.push(newTodo);
        return this.itens.length;
    };
    return TodoList;
}());
exports["default"] = TodoList;
