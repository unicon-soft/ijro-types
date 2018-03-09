export class TaskListByRecipientUserRequest {
    task_type: string;
    recipient_user_id: string;
    details: any;
    limit: number;
    offset: number;

    constructor(params: any = {}) {
        const {task_type, recipient_user_id, details, limit, offset} = params;
        this.task_type = task_type;
        this.recipient_user_id = recipient_user_id;
        this.details = details;
        this.limit = limit;
        this.offset = offset;
    }
}

