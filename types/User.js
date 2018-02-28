"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class User {
    constructor(params) {
        const { id, file_id, middle_name, last_name, first_name, user_name, short_user_name } = params;
        this.id = id;
        this.file_id = file_id;
        this.middle_name = middle_name;
        this.last_name = last_name;
        this.first_name = first_name;
        this.user_name = user_name;
        this.short_user_name = short_user_name;
    }
}
exports.User = User;
