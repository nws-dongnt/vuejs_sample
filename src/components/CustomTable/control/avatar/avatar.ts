export default class TemplateAvatar {
    icon?: string;
    size?: number;
    shape?: string;
    src?: string;
    error?: () => false;
    srcSet?: string;
    alt?: string;
    fit?: string;
    constructor(init?: Partial<TemplateAvatar>) {
        Object.assign(this, init);
    }
}