import {Db} from "./Db";

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

  constructor(params) {
    const {id, type, parent_id, is_deleted, task_done, task_done_at, main, details, recipient} = params;
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
  }
}

