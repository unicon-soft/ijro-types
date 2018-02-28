"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const RootTask_1 = require("./RootTask");
const User_1 = require("./User");
const Db_1 = require("./Db");
const Department_1 = require("./Department");
class TaskListByRecipientUser {
    constructor(params) {
        const { sender_department, recipient_department, task_done_by_user, id, created_at, document_id, parent_id, recipient_type, task_type, due_date, sender_user_id, recipient_user_id, content, main, sender_db_id, recipient_db_id, recipient_department_id, task_done, task_done_at, task_done_by, read, read_time, details, accepted, rejected, root, sender_department_id, sender_user, recipient_user, sender_db, recipient_db } = params;
        this.id = id;
        this.created_at = created_at;
        this.document_id = document_id;
        this.parent_id = parent_id;
        this.recipient_type = recipient_type;
        this.task_type = task_type;
        this.due_date = due_date;
        this.sender_user_id = sender_user_id;
        this.content = content;
        this.main = main;
        this.sender_db_id = sender_db_id;
        this.recipient_db_id = recipient_db_id;
        this.recipient_user_id = recipient_user_id;
        this.recipient_department_id = recipient_department_id;
        this.task_done = task_done;
        this.task_done_at = task_done_at;
        this.task_done_by = task_done_by;
        this.read = read;
        this.read_time = read_time;
        this.details = details;
        this.accepted = accepted;
        this.rejected = rejected;
        this.sender_department_id = sender_department_id;
        this.root = new RootTask_1.RootTask(root);
        this.sender_user = new User_1.User(sender_user);
        this.recipient_user = new User_1.User(recipient_user);
        this.sender_db = new Db_1.Db(sender_db);
        this.recipient_db = new Db_1.Db(recipient_db);
        this.sender_department = new Department_1.Department(sender_department);
        this.recipient_department = new Department_1.Department(recipient_department);
        this.task_done_by_user = new User_1.User(task_done_by_user);
    }
}
exports.TaskListByRecipientUser = TaskListByRecipientUser;
