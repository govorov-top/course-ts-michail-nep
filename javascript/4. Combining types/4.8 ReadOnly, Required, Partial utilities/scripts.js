"use strict";
/** ReadOnly, Required, Partial utilities **/
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
function updateTodo(todo, fieldsToUpdate) {
    return tslib_1.__assign(tslib_1.__assign({}, todo), fieldsToUpdate);
}
