"use strict";
// Task
// First create a union type Role, then create a function named canEdit that receives a valid Role and returns whether that role can edit content.
Object.defineProperty(exports, "__esModule", { value: true });
const canEdit = (role) => {
    return role === "admin" || role === "editor" ? true : false;
};
console.log(canEdit("admin"));
console.log(canEdit("editor"));
console.log(canEdit("viewer"));
//# sourceMappingURL=Role-Based-Permission.js.map