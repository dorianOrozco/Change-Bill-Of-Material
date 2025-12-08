import { HttpClient } from "@angular/common/http";
import { environment } from "../../../environments/environment";
import { inject } from "@angular/core";

export class BaseHttpService {
  protected http = inject(HttpClient);
 

  // Ensures single slash between base and path
  protected getUrl(path: string): string {
      const base = environment.pocketBaseUrl.replace(/\/+$/, '');
      const p = path.replace(/^\/+/, '');
      return `${base}/${p}`;
    }
}