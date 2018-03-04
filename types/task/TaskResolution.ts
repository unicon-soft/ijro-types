import {User} from "../User";
import {Recipient} from "./Recipient";

export class TaskResolution {
    id: string;
    content: string;
    due_date: string;
    sender_user_id: User;
    sender_user: User;
    recipients: Recipient[] = [];

    constructor(params: any = {}) {
        const {id, content, due_date, sender_user_id, sender_user, recipients} = params;
        this.id = id;
        this.content = content;
        this.due_date = due_date;
        this.sender_user_id = sender_user_id;
        this.sender_user = sender_user;
        if (recipients && Array.isArray(recipients) && recipients.length > 0) {
            recipients.forEach(r => this.recipients.push(new Recipient(r)));
        }
    }
}

