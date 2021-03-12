import { ElementUIComponentSize, ButtonType, ButtonNativeType } from "../common";

export default class TemplateButton {
    /** Button size */
    size?: ElementUIComponentSize;

    /** Button type */
    type?: ButtonType;

    /** Determine whether it's a plain button */
    plain?: boolean;

    /** Determine whether it's a round button */
    round?: boolean;

    /** Determine whether it's loading */
    loading?: boolean;

    /** Disable the button */
    disabled?: boolean;

    /** Button icon, accepts an icon name of Element icon component */
    icon?: string;

    /** Same as native button's autofocus */
    autofocus?: boolean;

    /** Same as native button's type */
    nativeType?: ButtonNativeType;

    label!: string;

    click?: (id: any) => void;

    constructor(init?: Partial<TemplateButton>) {
        Object.assign(this, init);
    }
}