import {Task} from "./Task";

export class TaskControlPlan {
  id: string;
  document_id: string;
  due_date: string;
  content: string;
  type: string;
  task_done: boolean;
  task_done_at: string;
  details: any;
  task: Task;

  constructor(params: any = {}) {
    const {id, document_id, due_date, content, type, task_done, task_done_at, details, task} = params;
    this.id = id;
    this.document_id = document_id;
    this.due_date = due_date;
    this.content = content;
    this.type = type;
    this.task_done = task_done;
    this.task_done_at = task_done_at;
    this.details = details;
    this.task = new Task(task);
  }
}

