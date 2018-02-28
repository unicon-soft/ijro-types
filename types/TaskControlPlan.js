"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Task_1 = require("./Task");
class TaskControlPlan {
    constructor(params) {
        const { id, document_id, due_date, content, type, task_done, task_done_at, details, task } = params;
        this.id = id;
        this.document_id = document_id;
        this.due_date = due_date;
        this.content = content;
        this.type = type;
        this.task_done = task_done;
        this.task_done_at = task_done_at;
        this.details = details;
        this.task = new Task_1.Task(task);
    }
}
exports.TaskControlPlan = TaskControlPlan;
