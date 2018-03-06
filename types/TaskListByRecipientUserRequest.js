"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class TaskListByRecipientUserRequest {
    constructor(params = {}) {
        const { task_type, recipient_user_id, details, limit, offset } = params;
        this.task_type = task_type;
        this.recipient_user_id = recipient_user_id;
        this.details = details;
        this.limit = limit;
        this.offset = offset;
    }
}
exports.TaskListByRecipientUserRequest = TaskListByRecipientUserRequest;
