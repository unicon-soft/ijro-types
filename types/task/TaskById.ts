import {User} from "../User";
import {Recipient} from "./Recipient";

export class TaskById {
    recipient_id: string;
    parent_id: string;
    due_date: string;
    created_by: User;
    sender_user: User;
    created_at: string;
    type: string;
    content: string;
    task_done: boolean;
    task_done_by: User;
    task_done_at: string;
    recipients: Recipient[] = [];

    constructor(params: any = {}) {
        const {recipient_id, content, due_date, parent_id, recipients, created_by, created_at, type, task_done, task_done_by, task_done_at, sender_user} = params;
        this.recipient_id = recipient_id;
        this.content = content;
        this.parent_id = parent_id;
        this.due_date = due_date;
        this.created_by = new User(created_by);
        this.sender_user = new User(sender_user);
        this.created_at = created_at;
        this.type = type;
        this.task_done = task_done;
        this.task_done_by = new User(task_done_by);
        this.task_done_at = task_done_at;
        if (recipients && Array.isArray(recipients) && recipients.length > 0) {
            recipients.forEach(r => this.recipients.push(new Recipient(r)));
        }
    }
}