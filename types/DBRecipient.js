"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Db_1 = require("./Db");
class DBRecipient {
    constructor(params) {
        const { id, type, parent_id, is_deleted, task_done, task_done_at, main, details, recipient } = params;
        const { id: recipient_db_id } = recipient;
        this.id = id;
        this.recipient_db_id = recipient_db_id;
        this.type = type;
        this.parent_id = parent_id;
        this.is_deleted = is_deleted;
        this.task_done = task_done;
        this.task_done_at = task_done_at;
        this.main = main;
        this.details = details;
        this.recipient = new Db_1.Db(recipient);
    }
}
exports.DBRecipient = DBRecipient;
