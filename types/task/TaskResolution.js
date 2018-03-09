"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Recipient_1 = require("./Recipient");
class TaskResolution {
    constructor(params = {}) {
        this.recipients = [];
        const { id, content, due_date, sender_user_id, sender_user, recipients } = params;
        this.id = id;
        this.content = content;
        this.due_date = due_date;
        this.sender_user_id = sender_user_id;
        this.sender_user = sender_user;
        if (recipients && Array.isArray(recipients) && recipients.length > 0) {
            recipients.forEach(r => this.recipients.push(new Recipient_1.Recipient(r)));
        }
    }
}
exports.TaskResolution = TaskResolution;
