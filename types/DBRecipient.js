"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Db_1 = require("./Db");
const DBRecipientResponse_1 = require("./DBRecipientResponse");
const TaskResponseAdditional_1 = require("./TaskResponseAdditional");
const User_1 = require("./User");
class DBRecipient {
    constructor(params) {
        this.response = [];
        this.additional = [];
        const { id, type, parent_id, is_deleted, task_done, task_done_at, main, details, recipient, response, additional, accepted_by } = params;
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
        this.accepted_by = new User_1.User(accepted_by);
        if (response && Array.isArray(response) && response.length > 0) {
            response.forEach(r => {
                if (r.id) {
                    this.response.push(new DBRecipientResponse_1.DBRecipientResponse(r));
                }
            });
        }
        if (additional && Array.isArray(additional) && additional.length > 0) {
            additional.forEach(r => {
                if (r.id) {
                    this.additional.push(new TaskResponseAdditional_1.TaskResponseAdditional(r));
                }
            });
        }
    }
}
exports.DBRecipient = DBRecipient;
