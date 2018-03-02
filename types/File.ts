export class File {
    id: string;
    name: string;
    size: string;
    type: string;

    constructor(params: any = {}) {
        const {id, name, size, type} = params;
        this.id = id;
        this.name = name;
        this.size = size;
        this.type = type;
    }
}

