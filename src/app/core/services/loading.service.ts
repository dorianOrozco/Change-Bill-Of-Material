import { Injectable, signal, WritableSignal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoadingService {
    // Global loading state should be determined by the interceptor which retrieves the value from the method
    public isLoading: WritableSignal<boolean> = signal(false);

    show(): void {
        this.isLoading.set(true);
    }

    hide(): void {
        this.isLoading.set(false);
    }
}