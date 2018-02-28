"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class TaskListByRecipientUserRequest {
    constructor(params) {
        const { task_type, recipient_user_id, details } = params;
        this.task_type = task_type;
        this.recipient_user_id = recipient_user_id;
        this.details = details;
    }
}
exports.TaskListByRecipientUserRequest = TaskListByRecipientUserRequest;
