"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class TaskRating {
    constructor(id = "", rating = 0, rated_by = "", created_at = "", task_id = "", rated = false) {
        this.id = id;
        this.rating = rating;
        this.rated_by = rated_by;
        this.created_at = created_at;
        this.task_id = task_id;
        this.rated = rated;
    }
}
exports.TaskRating = TaskRating;
