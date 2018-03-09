import {RootTask} from "./RootTask";
import {User} from "./User";
import {Db} from "./Db";
import {Department} from "./Department";

export class TaskListByRecipientUserResponse {
    id: string;
    created_at: string;
    document_id: string;
    parent_id: string;
    recipient_type: string;
    task_type: string;
    due_date: string;
    sender_user_id: string;
    recipient_user_id: string;
    content: string;
    main: boolean;
    sender_db_id: string;
    recipient_db_id: string;
    recipient_department_id: string;
    root: RootTask;
    task_done: boolean;
    task_done_at: string;
    task_done_by: string;
    read: boolean;
    read_time: string;
    details: any;
    accepted: boolean;
    rejected: boolean;
    sender_user: User;
    recipient_user: User;
    sender_db: Db;
    sender_department_id: string;
    sender_department: Department;
    recipient_db: Db;
    recipient_department: Department;
    task_done_by_user: User;
    constructor(params: any = {}) {
        const {sender_department, recipient_department, task_done_by_user, id, created_at, document_id, parent_id, recipient_type, task_type, due_date, sender_user_id, recipient_user_id, content,
            main, sender_db_id, recipient_db_id, recipient_department_id, task_done, task_done_at,
            task_done_by, read, read_time, details, accepted, rejected, root, sender_department_id, sender_user, recipient_user, sender_db, recipient_db} = params;
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
        this.root = new RootTask(root);
        this.sender_user = new User(sender_user);
        this.recipient_user = new User(recipient_user);
        this.sender_db = new Db(sender_db);
        this.recipient_db = new Db(recipient_db);
        this.sender_department = new Department(sender_department);
        this.recipient_department = new Department(recipient_department);
        this.task_done_by_user = new User(task_done_by_user);
    }
}

