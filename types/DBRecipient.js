"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Db_1 = require("./Db");
const DBRecipientResponse_1 = require("./DBRecipientResponse");
class DBRecipient {
    constructor(params) {
        this.response = [];
        const { id, type, parent_id, is_deleted, task_done, task_done_at, main, details, recipient, response } = params;
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
        response.forEach(r => this.response.push(new DBRecipientResponse_1.DBRecipientResponse(r)));
    }
}
exports.DBRecipient = DBRecipient;
