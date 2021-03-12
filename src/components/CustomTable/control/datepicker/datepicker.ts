import { ElementUIComponentSize, DatePickerType, ElementUIHorizontalAlignment } from "../common";

export default class TemplateDatePicker {
    /** The value of the date picker */
    value?: Date | string | Date[] | string[];

    /** Whether DatePicker is read only */
    readonly?: boolean;

    /** Whether DatePicker is disabled */
    disabled?: boolean;

    /** Size of Input */
    size?: ElementUIComponentSize;

    /** Whether the input is editable */
    editable?: boolean;

    /** Whether to show clear button */
    clearable?: boolean;

    /** Placeholder */
    placeholder?: string;

    /** Placeholder for the start date in range mode */
    startPlaceholder?: string;

    /** Placeholder for the end date in range mode */
    endPlaceholder?: string;

    /** Type of the picker */
    type?: DatePickerType;

    /** Format of the picker */
    format?: string;

    /** Alignment */
    align?: ElementUIHorizontalAlignment;

    /** Custom class name for DatePicker's dropdown */
    popperClass?: string;

    /** Additional options, check the table below */
    pickerOptions?: {};

    /** Range separator */
    rangeSeparator?: string;

    /** Default date of the calendar */
    defaultValue?: Date | number | string;

    /** Format of binding value. If not specified, the binding value will be a Date object */
    valueFormat?: string;

    /** name for the inner native input */
    name?: string;

    /**
     * Focus the Input component
     */
    focus?: () => void;
    constructor(init?: Partial<TemplateDatePicker>) {
        Object.assign(this, init);
    }
}