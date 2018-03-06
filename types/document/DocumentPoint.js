"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class DocumentPoint {
    constructor(params) {
        const { id, type, details, content, due_date } = params;
        this.id = id;
        this.type = type;
        this.details = details;
        this.content = content;
        this.due_date = due_date;
    }
}
exports.DocumentPoint = DocumentPoint;
