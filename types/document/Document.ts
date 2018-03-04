import {User} from "../User";
import {File} from "../File";
import {Db} from "../Db";
import {DocumentPoint} from "./DocumentPoint";
import {TaskResolution} from "../task/TaskResolution";

export class Document {
    id: string;
    db_id: string;
    db: Db;
    type_id: string;
    brief_content: string;
    details: any;
    category: string;
    created_by: User;
    signed_by: User;
    created_at: string;
    files: File[] = [];
    points: DocumentPoint[] = [];
    resolutions: TaskResolution[] = [];
    constructor(params: any = {}) {
        const {id, db_id, db, type_id, brief_content, details, category, created_by, signed_by, created_at, files, points, resolutions} = params;
        this.id = id;
        this.db_id = db_id;
        this.db = new Db(db);
        this.type_id = type_id;
        this.brief_content = brief_content;
        this.details = details;
        this.category = category;
        this.created_by = new User(created_by);
        this.signed_by = new User(signed_by);
        this.created_at = created_at;
        if (files && Array.isArray(files) && files.length > 0) {
            files.forEach(f =>  this.files.push(new File(f)));
        }
        if (points && Array.isArray(points) && points.length > 0) {
            points.forEach(p =>  this.points.push(new DocumentPoint(p)));
        }
        if (resolutions && Array.isArray(resolutions) && resolutions.length > 0) {
            resolutions.forEach(r => this.resolutions.push(new TaskResolution(r)));
        }
    }
}

