import { Injectable, signal } from "@angular/core";

export interface AppToast {
    severity: 'success' | 'info' | 'warn' | 'error';
    title: string;
    message: string;
}

@Injectable({ providedIn: 'root' })
export class NotificationService {
    public messages = signal<AppToast[]>([]);;
    
    // Update our array to include the new message 
    showSuccess(title: string, message: string) {
        this.messages.update(current => [...current, { severity: 'success', title, message }]);
    }
    
    showError(title: string, message: string) {
        this.messages.update(current => [...current, { severity: 'error', title, message }]);
    }
    
    showInfo(title: string, message: string) {
        this.messages.update(current => [...current, { severity: 'info', title, message }]);
    }
    
    showWarn(title: string, message: string) {
        this.messages.update(current => [...current, { severity: 'warn', title, message }]);
    }

    // Clear our toast array by overwriting it with an empty array
    clear() {
        this.messages.set([]);
    }

    removeLast() {
        this.messages.update(current => current.slice(0, -1));
    }
}