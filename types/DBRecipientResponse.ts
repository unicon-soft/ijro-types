export class DBRecipientResponse {
    id: string;
    content: string;
    created_at: string;
    sender_user_id: string;
    type: string;
    read: boolean;
    first_name: string;
    last_name: string;
    middle_name: string;

    constructor(params) {
        const {id, created_at, sender_user_id, type, read, first_name, last_name, middle_name} = params;
        this.id = id;
        this.type = type;
        this.created_at = created_at;
        this.sender_user_id = sender_user_id;
        this.first_name = first_name;
        this.read = read;
        this.last_name = last_name;
        this.middle_name = middle_name;
    }
}

