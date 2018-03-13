"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class TaskByIdRequest {
    constructor(params = {}) {
        const { recipient_id, db_id, document_id } = params;
        this.recipient_id = recipient_id;
        this.db_id = db_id;
        this.document_id = document_id;
    }
}
exports.TaskByIdRequest = TaskByIdRequest;
