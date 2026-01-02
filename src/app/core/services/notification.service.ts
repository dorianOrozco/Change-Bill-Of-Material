import { Injectable, inject } from '@angular/core';
import { MessageService } from 'primeng/api';

export interface AppToast {
  severity: 'success' | 'info' | 'warn' | 'error';
  title: string;   // maps to summary
  message: string; // maps to detail
}

@Injectable({ providedIn: 'root' })
export class NotificationService {
    private messageService = inject(MessageService);
    private TOAST_KEY: string = 'app';
    private LIFE: number = 12000;


    showSuccess(title: string, message: string) {
        this.messageService.add({ key: this.TOAST_KEY, severity: 'success', summary: title, detail: message, life: this.LIFE, });
    }

    showError(title: string, message: string) {
        this.messageService.add({ key: this.TOAST_KEY, severity: 'error', summary: title, detail: message, life: this.LIFE, });
    }

    showInfo(title: string, message: string) {
        this.messageService.add({ key: this.TOAST_KEY, severity: 'info', summary: title, detail: message, life: this.LIFE, });
    }

    showWarn(title: string, message: string) {
        this.messageService.add({ key: this.TOAST_KEY, severity: 'warn', summary: title, detail: message, life: this.LIFE, });
    }

    clear() {
        this.messageService.clear(this.TOAST_KEY);
    }
}
