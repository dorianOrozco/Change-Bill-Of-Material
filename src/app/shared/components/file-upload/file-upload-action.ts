export interface DrawerAction {
    // Style Customization 
    styleClass?: string;
    previewWidth?: number;      // Preview thumnail of image - default of 50 pixels

    // Labels
    chooseLabel?: string;
    uploadLabel?: string;
    cancelLabel?: string;
 
    // Custom Icons
    chooseIcon?: string;
    uploadIcon?: string;
    cancelIcon?: string;
    
    // Display buttons
    showUploadButton: boolean;
    showCancelButton: boolean;

    // Define the complexity of UI
    mode?: 'basic' | 'advanced';

    // If we configure indivial file upload
    auto?: boolean;
    url?:string;
    method?: string;
    withCredentials?: boolean;
    
    // Type of file
    accept?: string;
    multiple?: boolean;
    maxFileSize?: number;       // in bytes!
    fileLimit?: number;

    // Validation messages 
    invalidFileSizeMessageSummary?: string;
    invalidFileSizeMessageDetail?: string;
    invalidFileTypeMessageSummary?: string;
    invalidFileTypeMessageDetail?: string;
    invalidFileLimitMessageDetail?: string;
    invalidFileLimitMessageSummary?: string;

}