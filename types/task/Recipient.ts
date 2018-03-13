import {Db} from "../Db";
import {DBRecipientResponse} from "../DBRecipientResponse";
import {TaskResponseAdditional} from "../TaskResponseAdditional";
import {User} from "../User";

export class Recipient {
    id: string;
    recipient_db_id: string;
    recipient_user_id: string;
    type: string;
    parent_id: string;
    is_deleted: boolean;
    task_done: boolean;
    task_done_at: string;
    main: boolean;
    details: any;
    recipient_db: Db;
    recipient_user: User;
    response: DBRecipientResponse[] = [];
    additional: TaskResponseAdditional[] = [];
    accepted_by: User;

    constructor(params) {
        const {id, type, parent_id, is_deleted, task_done, recipient_db_id, task_done_at, main, details, recipient_db = {}, recipient_user = {}, response, additional, accepted_by = {}} = params;
        this.id = id;
        this.recipient_db_id = recipient_db_id;
        this.type = type;
        this.parent_id = parent_id;
        this.is_deleted = is_deleted;
        this.task_done = task_done;
        this.task_done_at = task_done_at;
        this.main = main;
        this.details = details;
        this.recipient_db = new Db(recipient_db);
        this.recipient_user = new User(recipient_user);
        this.accepted_by = new User(accepted_by);
        response.forEach(r =>  {
            if (r.id) {
                this.response.push(new DBRecipientResponse(r));
            }
        });
        additional.forEach(r => {
            if (r.id) {
                this.additional.push(new TaskResponseAdditional(r));
            }
        })
    }
}

