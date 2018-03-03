export class TaskResponseAdditional {
    id: string;
    content: string;
    created_at: string;

    constructor(params: any = {}) {
        const {id, content, created_at} = params;
        this.id = id;
        this.content = content;
        this.created_at = created_at;
    }
}

