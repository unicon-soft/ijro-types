"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class TaskResponseAdditional {
    constructor(params = {}) {
        const { id, content, created_at } = params;
        this.id = id;
        this.content = content;
        this.created_at = created_at;
    }
}
exports.TaskResponseAdditional = TaskResponseAdditional;
