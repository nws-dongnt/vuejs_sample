export class SocialAccount {
    public id?: string = '';
    public link!: string;
    constructor(init?: Partial<SocialAccount>) {
        Object.assign(this, init);
    }
}