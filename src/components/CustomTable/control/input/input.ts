import { ElementUIComponentSize, InputType, AutoSize, Resizability } from "../common";

export default class TemplateInput {
    /** Type of input */
    type?: InputType;

    /** Binding value */
    value?: string | number;

    /** Maximum Input text length */
    maxlength?: number;

    /** Minimum Input text length */
    minlength?: number;

    /** Placeholder of Input */
    placeholder?: string;

    /** Whether Input is disabled */
    disabled?: boolean;

    /** Size of Input, works when type is not 'textarea' */
    size?: ElementUIComponentSize;

    /** Prefix icon class */
    prefixIcon?: string;

    /** Suffix icon class */
    suffixIcon?: string;

    /** Number of rows of textarea, only works when type is 'textarea' */
    rows?: number;

    /** Whether textarea has an adaptive height, only works when type is 'textarea' */
    autosize?: boolean | AutoSize;

    /** @Deprecated in next major version */
    autoComplete?: string;

    /** Same as autocomplete in native input */
    autocomplete?: string;

    /** Same as name in native input */
    name?: string;

    /** Same as readonly in native input */
    readonly?: boolean;

    /** Same as max in native input */
    max?: any;

    /** Same as min in native input */
    min?: any;

    /** Same as step in native input */
    step?: any;

    /** Control the resizability */
    resize?: Resizability;

    /** Same as autofocus in native input */
    autofocus?: boolean;

    /** Same as form in native input */
    form?: string;

    /** Whether to trigger form validatio */
    validateEvent?: boolean;

    /** Whether the input is clearable */
    clearable?: boolean;

    /** Whether to show password */
    showPassword?: boolean;

    /** Whether to show wordCount when setting maxLength */
    showWordLimit?: boolean;
    focus?: () => void;
    blur?: () => void;
    select?: () => void;
    constructor(init?: Partial<TemplateInput>) {
        Object.assign(this, init);
    }
}