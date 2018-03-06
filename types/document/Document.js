"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const User_1 = require("../User");
const File_1 = require("../File");
const Db_1 = require("../Db");
const DocumentPoint_1 = require("./DocumentPoint");
const TaskResolution_1 = require("../task/TaskResolution");
class Document {
    constructor(params = {}) {
        this.files = [];
        this.points = [];
        this.resolutions = [];
        const { id, db_id, db, type_id, brief_content, details, category, created_by, signed_by, signed_by_user, created_by_user, created_at, files, points, resolutions } = params;
        this.id = id;
        this.db_id = db_id;
        this.db = new Db_1.Db(db);
        this.type_id = type_id;
        this.brief_content = brief_content;
        this.details = details;
        this.category = category;
        this.created_by = created_by;
        this.created_by_user = new User_1.User(created_by_user);
        this.signed_by = signed_by;
        this.signed_by_user = new User_1.User(signed_by_user);
        this.created_at = created_at;
        if (files && Array.isArray(files) && files.length > 0) {
            files.forEach(f => this.files.push(new File_1.File(f)));
        }
        if (points && Array.isArray(points) && points.length > 0) {
            points.forEach(p => this.points.push(new DocumentPoint_1.DocumentPoint(p)));
        }
        if (resolutions && Array.isArray(resolutions) && resolutions.length > 0) {
            resolutions.forEach(r => this.resolutions.push(new TaskResolution_1.TaskResolution(r)));
        }
    }
}
exports.Document = Document;
