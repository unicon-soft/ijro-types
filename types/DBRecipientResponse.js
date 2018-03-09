"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const TaskFiles_1 = require("./TaskFiles");
class DBRecipientResponse {
    constructor(params = {}) {
        this.attachments = [];
        const { id, content, created_at, sender_user_id, type, read, first_name, last_name, middle_name, attachments } = params;
        this.id = id;
        this.type = type;
        this.content = content;
        this.created_at = created_at;
        this.sender_user_id = sender_user_id;
        this.first_name = first_name;
        this.read = read;
        this.last_name = last_name;
        this.middle_name = middle_name;
        if (attachments && Array.isArray(attachments) && attachments.length > 0) {
            attachments.forEach(f => {
                if (f.task_id) {
                    this.attachments.push(new TaskFiles_1.TaskFiles(f));
                }
            });
        }
    }
}
exports.DBRecipientResponse = DBRecipientResponse;
