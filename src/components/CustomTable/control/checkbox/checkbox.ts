import { ElementUIComponentSize } from "../common";

export default class TemplateCheckBox {
    group!: TemplateCheckBoxGroup;
    checkboxes!: TemplateCheckBoxRadio[];
    constructor(init?: Partial<TemplateCheckBox>) {
        Object.assign(this, init);
    }
}

export class TemplateCheckBoxRadio {
    /** The form input value */
    value!: string | string[];

    /** Value of the checkbox when used inside a checkbox-group */
    label!: string | number | boolean;

    /** Value of the checkbox if it's checked */
    trueLabel?: string | number;

    /** Value of the checkbox if it's not checked */
    falseLabel?: string | number;

    /** Native 'name' attribute */
    name?: string;

    /** Whether to add a border around Checkbox */
    border?: boolean;

    /** Size of the Checkbox, only works when border is true */
    size?: ElementUIComponentSize;

    /** If the checkbox is disabled */
    disabled?: boolean;

    /** If the checkbox is checked */
    checked?: boolean;

    /** Same as indeterminate in native checkbox */
    indeterminate?: boolean;

    constructor(init?: Partial<TemplateCheckBoxRadio>) {
        Object.assign(this, init);
    }
}

export class TemplateCheckBoxGroup {
    /** Size of checkbox buttons or bordered checkboxes */
    size?: ElementUIComponentSize;

    /** Whether the nesting checkboxes are disabled */
    disabled?: boolean;

    /** Minimum number of checkbox checked */
    min?: number;

    /** Maximum number of checkbox checked */
    max?: number;

    /** Font color when button is active */
    textColor?: string;

    /** Border and background color when button is active */
    fill?: string;

    checkList!: string[];

    constructor(init?: Partial<TemplateCheckBoxGroup>) {
        Object.assign(this, init);
    }
}

export class TemplateCheckBoxButton {
    /** Value of the checkbox when used inside a checkbox-group */
    label!: string | number | boolean

    /** Value of the checkbox if it's checked */
    trueLabel?: string | number

    /** Value of the checkbox if it's not checked */
    falseLabel?: string | number

    /** Native 'name' attribute */
    name?: string

    /** If the checkbox is disabled */
    disabled?: boolean

    /** If the checkbox is checked */
    checked?: boolean

    constructor(init?: Partial<TemplateCheckBoxButton>) {
        Object.assign(this, init);
    }
}