import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { environment } from "../../../environments/environment";
import { Observable } from "rxjs";

@Injectable({
    providedIn: "root",
})
export class MachineService {
    private http = inject(HttpClient);
    private baseUrl = `${environment.pocketBaseUrl}/api/collections/machine/records`;
    


}
