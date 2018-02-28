"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DBRecipient_1 = require("./DBRecipient");
class Task {
    constructor(params) {
        this.db_recipients = [];
        const { id, type, document_id, parent_id, expired_tasks, task_done, task_done_at, db_recipients } = params;
        this.id = id;
        this.document_id = document_id;
        this.parent_id = parent_id;
        this.expired_tasks = expired_tasks;
        this.type = type;
        this.task_done = task_done;
        this.task_done_at = task_done_at;
        console.log('db_recipients', db_recipients);
        db_recipients.forEach(recipient => {
            this.db_recipients.push(new DBRecipient_1.DBRecipient(recipient));
        });
    }
}
exports.Task = Task;
