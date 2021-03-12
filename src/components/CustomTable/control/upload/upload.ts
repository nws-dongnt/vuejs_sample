import { ElUploadInternalFileDetail, ElUploadProgressEvent, ElUploadInternalRawFile, FileListItem, ListType, HttpRequestOptions } from "../common";

export default class TemplateUpload {
    /** Request URL (required) */
    action!: string;

    /** Request headers */
    headers?: object;

    /** Whether uploading multiple files is permitted */
    multiple?: boolean;

    /** Additions options of request */
    data?: object;

    /** Key name for uploaded file */
    name?: string;

    /** Whether cookies are sent */
    withCredentials?: boolean;

    /** Whether to show the uploaded file list */
    showFileList?: boolean;

    /** Whether to activate drag and drop mode */
    drag?: boolean;

    /** Accepted file types, will not work when thumbnail-mode is true */
    accept?: string;

    /** Hook function when clicking the uploaded files */
    onPreview?: (file: ElUploadInternalFileDetail) => void;

    /** Hook function when files are removed */
    onRemove?: (file: ElUploadInternalFileDetail, fileList: ElUploadInternalFileDetail[]) => void;

    /** Hook function when uploaded successfully */
    onSuccess?: (response: any, file: ElUploadInternalFileDetail, fileList: ElUploadInternalFileDetail[]) => void;

    /** Hook function when some errors occurs */
    onError?: (err: ErrorEvent, file: ElUploadInternalFileDetail, fileList: ElUploadInternalFileDetail[]) => void;

    /** Hook function when some progress occurs */
    onProgress?: (event: ElUploadProgressEvent, file: ElUploadInternalFileDetail, fileList: ElUploadInternalFileDetail[]) => void;

    /** Hook function when file status change */
    onChange?: (file: ElUploadInternalFileDetail, fileList: ElUploadInternalFileDetail[]) => void;

    /** Hook function before uploading with the file to be uploaded as its parameter. If false or a Promise is returned, uploading will be aborted */
    beforeUpload?: (file: ElUploadInternalRawFile) => boolean | Promise<File | Blob | boolean>;

    /** Whether thumbnail is displayed */
    thumbnailMode?: boolean;

    /** Default uploaded files */
    fileList?: FileListItem[];

    /** Type of fileList */
    listType?: ListType;

    /** Whether to auto upload file */
    autoUpload?: boolean;

    /** Override default xhr behavior, allowing you to implement your own upload-file's request */
    httpRequest?: (options: HttpRequestOptions) => void;

    /** Whether to disable upload */
    disabled?: boolean;

    /** Maximum number of uploads allowed */
    limit?: number;

    /** Hook function when limit is exceeded */
    onExceed?: (file: ElUploadInternalFileDetail, fileList: ElUploadInternalFileDetail[]) => void;

    /** Clear the upload file list */
    clearFiles?: () => void;

    /** Abort specified file */
    abort?: (file: ElUploadInternalFileDetail) => void;

    /** Upload the file list manually */
    submit?: () => void;

    constructor(init?: Partial<TemplateUpload>) {
        Object.assign(this, init);
    }
}