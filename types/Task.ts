import {DBRecipient} from "./DBRecipient";

export class Task {
  id: string;
  type: string;
  document_id: string;
  parent_id: string;
  expired_tasks: boolean;
  task_done: boolean;
  task_done_at: string;
  db_recipients: DBRecipient[] = [];

  constructor(params: any = {}) {
    const {id, type, document_id, parent_id, expired_tasks, task_done, task_done_at, db_recipients} = params;
    this.id = id;
    this.document_id = document_id;
    this.parent_id = parent_id;
    this.expired_tasks = expired_tasks;
    this.type = type;
    this.task_done = task_done;
    this.task_done_at = task_done_at;
    db_recipients.forEach(recipient => {
      this.db_recipients.push(new DBRecipient(recipient));
    });
  }
}

