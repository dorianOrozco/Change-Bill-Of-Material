import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoadingService {
    // Global loading state 
    isLoading = signal(false);

    show() {
        this.isLoading.set(true);
    }

    hide() {
        this.isLoading.set(false);
    }
}