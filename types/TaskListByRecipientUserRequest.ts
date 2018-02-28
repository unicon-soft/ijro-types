export class TaskListByRecipientUserRequest {
    task_type: string;
    recipient_user_id: string;
    details: any;

    constructor(params) {
        const {task_type, recipient_user_id, details} = params;
        this.task_type = task_type;
        this.recipient_user_id = recipient_user_id;
        this.details = details;
    }
}

