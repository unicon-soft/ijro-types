"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class RootTask {
    constructor(params = {}) {
        const { document_sender_reg_date, document_sender_reg_number, document_recipient_reg_date, document_recipient_reg_number } = params;
        this.document_sender_reg_date = document_sender_reg_date;
        this.document_sender_reg_number = document_sender_reg_number;
        this.document_recipient_reg_date = document_recipient_reg_date;
        this.document_recipient_reg_number = document_recipient_reg_number;
    }
}
exports.RootTask = RootTask;
