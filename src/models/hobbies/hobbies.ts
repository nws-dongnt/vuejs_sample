export class Hobbies {
    public id?: string = '';
    public name!: string;
    public description?: string = '';
    constructor(init?: Partial<Hobbies>) {
        Object.assign(this, init);
    }
}