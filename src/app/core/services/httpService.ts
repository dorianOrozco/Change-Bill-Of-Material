
import { HttpClient, HttpContext } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { environment } from "../../../environments/environment";
import { firstValueFrom } from "rxjs";

@Injectable({ providedIn: "root" })
export class HttpService {
  private http = inject(HttpClient);
  private url = environment.url;

  async get<T>(endpoint: string, options?: { context?: HttpContext }): Promise<T> {
    return firstValueFrom(
      this.http.get<T>(`${this.url}/${endpoint}`, { context: options?.context })
    );
  }

  async getById<T>(endpoint: string, id: string, options?: { context?: HttpContext }): Promise<T> {
    return firstValueFrom(
      this.http.get<T>(`${this.url}/${endpoint}/${id}`, { context: options?.context })
    );
  }

  async post<T>(endpoint: string, body: unknown, options?: { context?: HttpContext }): Promise<T> {
    return firstValueFrom(
      this.http.post<T>(`${this.url}/${endpoint}`, body, { context: options?.context })
    );
  }

  async put<T>(endpoint: string, id: string, body: unknown, options?: { context?: HttpContext }): Promise<T> {
    return firstValueFrom(
      this.http.put<T>(`${this.url}/${endpoint}/${id}`, body, { context: options?.context })
    );
  }

  async delete<T>(endpoint: string, id: string, options?: { context?: HttpContext }): Promise<T> {
    return firstValueFrom(
      this.http.delete<T>(`${this.url}/${endpoint}/${id}`, { context: options?.context })
    );
  }
}
``
