"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class File {
    constructor(params = {}) {
        const { id, name, size, type } = params;
        this.id = id;
        this.name = name;
        this.size = size;
        this.type = type;
    }
}
exports.File = File;
