import { MenuItem } from "primeng/api";

export type ToolbarActionType = 'button' | 'split';

export interface ToolbarAction {
    id?: string;
    type?: ToolbarActionType;
    label?: string;
    icon?: string;
    severity?: 'primary' | 'secondary' | 'success' | 'info' | 'warn' | 'danger' | 'help' | 'contrast' | null;
    text?: boolean;
    outlined?: boolean;
    styleClass?: string;
    disabled?: boolean;
    tooltip?: string;
    command?: (event: Event) => void;
    model?: MenuItem[];
}