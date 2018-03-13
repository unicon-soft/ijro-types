export class TaskByIdRequest {
    recipient_id: string;
    db_id: string;
    document_id: string;

    constructor(params: any = {}) {
        const {recipient_id, db_id, document_id} = params;
        this.recipient_id = recipient_id;
        this.db_id = db_id;
        this.document_id = document_id;
    }
}