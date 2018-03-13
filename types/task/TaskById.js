"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const User_1 = require("../User");
const Recipient_1 = require("./Recipient");
class TaskById {
    constructor(params = {}) {
        this.recipients = [];
        const { recipient_id, content, due_date, parent_id, recipients, created_by = {}, created_at, type, task_done, task_done_by = {}, task_done_at = {}, sender_user = {} } = params;
        this.recipient_id = recipient_id;
        this.content = content;
        this.parent_id = parent_id;
        this.due_date = due_date;
        this.created_by = new User_1.User(created_by);
        this.sender_user = new User_1.User(sender_user);
        this.created_at = created_at;
        this.type = type;
        this.task_done = task_done;
        this.task_done_by = new User_1.User(task_done_by);
        this.task_done_at = task_done_at;
        if (recipients && Array.isArray(recipients) && recipients.length > 0) {
            recipients.forEach(r => this.recipients.push(new Recipient_1.Recipient(r)));
        }
    }
}
exports.TaskById = TaskById;
