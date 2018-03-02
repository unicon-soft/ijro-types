export class User {
    id: string;
    file_id: string;
    middle_name: string;
    last_name: string;
    first_name: string;
    user_name: string;
    short_user_name: string;

    constructor(params: any = {}) {
        const {id, file_id, middle_name, last_name, first_name, user_name, short_user_name} = params;
        this.id = id;
        this.file_id = file_id;
        this.middle_name = middle_name;
        this.last_name = last_name;
        this.first_name = first_name;
        this.user_name = user_name;
        this.short_user_name = short_user_name;
    }
}

