import {Db} from "./Db";
import {DBRecipientResponse} from "./DBRecipientResponse";
import {TaskResponseAdditional} from "./TaskResponseAdditional";
import {User} from "./User";

export class DBRecipient {
  id: string;
  recipient_db_id: string;
  type: string;
  parent_id: string;
  is_deleted: boolean;
  task_done: boolean;
  task_done_at: string;
  main: boolean;
  details: any;
  recipient: Db;
  response: DBRecipientResponse[] = [];
  additional: TaskResponseAdditional[] = [];
  accepted_by: User;


  constructor(params) {
    const {id, type, parent_id, is_deleted, task_done, task_done_at, main, details, recipient, response, additional, accepted_by} = params;
    const {id: recipient_db_id} = recipient;
    this.id = id;
    this.recipient_db_id = recipient_db_id;
    this.type = type;
    this.parent_id = parent_id;
    this.is_deleted = is_deleted;
    this.task_done = task_done;
    this.task_done_at = task_done_at;
    this.main = main;
    this.details = details;
    this.recipient = new Db(recipient);
    this.accepted_by = new User(accepted_by);
    response.forEach(r =>  this.response.push(new DBRecipientResponse(r)));
    additional.forEach(r => {
        if (r.id) {
            this.additional.push(new TaskResponseAdditional(r));
        }
    })
  }
}

