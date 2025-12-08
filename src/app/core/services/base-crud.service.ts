import { HttpContext, HttpParams } from "@angular/common/http";
import { BaseHttpService } from "./base-http.service";
import { firstValueFrom } from "rxjs";

export interface CrudServiceParams {
  listUrl: string;
  detailUrl: string;
  createUrl: string;
  updateUrl: string;
  deleteUrl: string;
}

export abstract class BaseCrudHttpService extends BaseHttpService {
  abstract serviceParams: CrudServiceParams;

  // Replace the :id (in deriving service) with the actual ID value 
  protected urlWithId(path: string, id: string): string {
    return path.replace(':id', encodeURIComponent(id));
  }

 

  /**
   * List/search with optional query params.
   * - Returns raw data to the caller (the deriving service will store it in signals).
   * - `ctx` allows passing HttpContext tokens for interceptors (e.g., skip loading).
   */

  async list<T>(query?: Record<string, string | number | boolean>, ctx?: HttpContext): Promise<T> {

    // Get url from params given by derived class
    const url = this.getUrl(this.serviceParams.listUrl);

    // If our query is not empty convert it into HttpParams so it's useable
    const params = query ? new HttpParams({ fromObject: stringifyQuery(query) }) : undefined;

    // Make the request passing in our parameters and http context
    return await firstValueFrom(this.http.get<T>(url, { params: params, context: ctx }));
  }

  /** Get by id */
  async getById<T>(id: string, ctx?: HttpContext): Promise<T> {
    const url = this.getUrl(this.urlWithId(this.serviceParams.detailUrl, id));
    return await firstValueFrom(this.http.get<T>(url, { context: ctx }));
  }

  /** Create (POST) */
  async create<T>(body: unknown, ctx?: HttpContext): Promise<T> {
    const url = this.getUrl(this.serviceParams.createUrl);
    return await firstValueFrom(this.http.post<T>(url, body, { context: ctx }));
  }

  /** Update (PATCH) */
  async update<T>(id: string, body: unknown, ctx?: HttpContext): Promise<T> {
    const url = this.getUrl(this.urlWithId(this.serviceParams.updateUrl, id));
    return await firstValueFrom(this.http.patch<T>(url, body, { context: ctx }));
  }

  /** Delete */
  async delete<T>(id: string, ctx?: HttpContext): Promise<T> {
    const url = this.getUrl(this.urlWithId(this.serviceParams.deleteUrl, id));
    return await firstValueFrom(this.http.delete<T>(url, { context: ctx }));
  }
}

  /** Helper to stringify values correctly for HttpParams */
  function stringifyQuery(query: Record<string, string | number | boolean>): Record<string, string> {
    const out: Record<string, string> = {};
    for (const [k, v] of Object.entries(query)) {
      out[k] = String(v);
    }
    return out;
  }