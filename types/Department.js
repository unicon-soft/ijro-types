"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Department {
    constructor(params = {}) {
        const { id, name_ru, name_uz, text, parent_id } = params;
        this.id = id;
        this.name_ru = name_ru;
        this.name_uz = name_uz;
        this.parent_id = parent_id;
    }
}
exports.Department = Department;
