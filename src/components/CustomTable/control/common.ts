import { Vue } from "vue-property-decorator";

export type DatePickerType = 'year' | 'month' | 'date' | 'datetime' | 'week' | 'datetimerange' | 'daterange' | 'dates';
export type InputNumberSize = 'large' | 'small';
export type Resizability = 'none' | 'both' | 'horizontal' | 'vertical';
export type InputType = 'text' | 'textarea';

/** Component size definition for button, input, etc */
export type ElementUIComponentSize = 'large' | 'medium' | 'small' | 'mini';
/** Button type */
export type ButtonType = 'primary' | 'success' | 'warning' | 'danger' | 'info' | 'text';
/** Same as native button's type */
export type ButtonNativeType = 'button' | 'submit' | 'reset' | 'menu';

export type ElementUIHorizontalAlignment = 'left' | 'center' | 'right';
export type TableColumnType = 'default' | 'selection' | 'index' | 'expand';
export type TableColumnFixedType = 'left' | 'right';
export type SortOrders = 'ascending' | 'descending' | null;
export type PopoverPlacement = 'top' | 'top-start' | 'top-end' | 'bottom' | 'bottom-start' | 'bottom-end' | 'left' | 'left-start' | 'left-end' | 'right' | 'right-start' | 'right-end';

export type RadioGroupSize = 'large' | 'small';

export type ListType = 'text' | 'picture' | 'picture-card';
export type FileUploadStatus = 'ready' | 'uploading' | 'success' | 'fail';


/** Controls how el-input component automatically sets size */
export interface AutoSize {
    /** Minimum rows to show */
    minRows: number;

    /** Maximum rows to show */
    maxRows: number;
}

export type TableColumn = {
    /** Label of the column */
    label: string;

    /** Property name of the source data */
    property: string;

    /** Type of the column */
    type: string;

    /** Whether column is fixed at left/right */
    fixed: boolean | string;
}

export interface VNode {
    tag?: string;
    data?: any;
    children?: VNode[];
    text?: string;
    elm?: Node;
    ns?: string;
    context?: Vue;
    key?: string | number;
    componentOptions?: VNodeComponentOptions;
    componentInstance?: Vue;
    parent?: VNode;
    raw?: boolean;
    isStatic?: boolean;
    isRootInsert: boolean;
    isComment: boolean;
}
export interface VNodeComponentOptions {
    Ctor: typeof Vue;
    propsData?: object;
    listeners?: object;
    children?: VNode[];
    tag?: string;
}

export interface TableColumnFilter {
    /** The text to show in the filter's panel */
    text: string;

    /** The value of the filter */
    value: any;
}

export interface QueryChangeHandler {
    /**
     * @param queryString Current value of the text input
     */
    (queryString: string): void
}

export interface ElUploadInternalRawFile extends File {
    uid: number
}

export interface ElUploadProgressEvent extends ProgressEvent {
    percent: number
}

export interface FileListItem {
    name: string,
    url: string,
    status?: FileUploadStatus
}

export interface ElUploadInternalFileDetail {
    status: FileUploadStatus,
    name: string,
    size: number,
    percentage: number,
    uid: number,
    raw: ElUploadInternalRawFile,
    url?: string
}

export interface HttpRequestOptions {
    headers: object,
    withCredentials: boolean,
    file: File,
    data: object,
    filename: string,
    action: string,
    onProgress: (e: ElUploadProgressEvent) => void,
    onSuccess: (response: any) => void,
    onError: (err: ErrorEvent) => void
}
