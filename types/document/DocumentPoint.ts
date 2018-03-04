export class DocumentPoint {
    id: string;
    type: string;
    details: any;
    content: string;
    due_date: string;

    constructor(params) {
        const {id, type, details, content, due_date} = params;
        this.id = id;
        this.type = type;
        this.details = details;
        this.content = content;
        this.due_date = due_date;
    }
}

