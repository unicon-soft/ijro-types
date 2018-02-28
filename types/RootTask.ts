export class RootTask {
    document_sender_reg_date: string;
    document_sender_reg_number: string;
    document_recipient_reg_date: string;
    document_recipient_reg_number: string;


    constructor(params) {
        const {document_sender_reg_date, document_sender_reg_number, document_recipient_reg_date, document_recipient_reg_number} = params;
        this.document_sender_reg_date = document_sender_reg_date;
        this.document_sender_reg_number = document_sender_reg_number;
        this.document_recipient_reg_date = document_recipient_reg_date;
        this.document_recipient_reg_number = document_recipient_reg_number;
    }
}

