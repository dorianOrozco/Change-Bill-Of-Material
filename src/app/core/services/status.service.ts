import { Injectable, signal } from "@angular/core";

@Injectable({
    providedIn: "root",
})

export class StatusService {
    // Contains the current HTTP status to be displayed in the UI. ex. "Fetching ECBMS..." 
    public status = signal<string | null>(null);

    // Allows all HTTP methods to set the status
    setStatus(status: string | null) {
        this.status.set(status);
    }
}