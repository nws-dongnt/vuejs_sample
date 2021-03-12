import { RadioGroupSize } from "../common";

export default class TemplateRadio {
    group!: TemplateRadioGroup;
    radios!: TemplateRadioChild[];
    constructor(init?: Partial<TemplateRadio>) {
        Object.assign(this, init);
    }
}

export class TemplateRadioChild {
    /** The form input value */
    value!: string;

    /** The value of radio */
    label!: string | number | boolean;

    /** Whether radio is disabled */
    disabled?: boolean;

    /** Whether to add a border around Radio */
    border?: boolean;

    /** Native 'name' attribute */
    name?: string;

    constructor(init?: Partial<TemplateRadioChild>) {
        Object.assign(this, init);
    }
}

export class TemplateRadioButton {
    /** The form input value */
    value!: string;

    /** The value of radio */
    label!: string | number;

    /** Whether radio is disabled */
    disabled?: boolean;

    /** Native 'name' attribute */
    name?: string;

    constructor(init?: Partial<TemplateRadioButton>) {
        Object.assign(this, init);
    }
}

export class TemplateRadioGroup {
    /** The size of radio buttons */
    size?: RadioGroupSize;

    /** Border and background color when button is active */
    fill?: string;

    /** Whether the nesting radios are disabled */
    disabled?: boolean;

    /** Font color when button is active */
    textColor?: string;

    constructor(init?: Partial<TemplateRadioGroup>) {
        Object.assign(this, init);
    }
}