import { HttpContext } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { EcbmDto } from '../models/ecbm/ecbm-dto';
import { BaseCrudHttpService, CrudServiceParams } from './base-crud.service';
import { PocketBaseList } from '../models/pocket-base-list';

@Injectable({
  providedIn: 'root',
})
export class EcbmService extends BaseCrudHttpService  {

  /**
   * Signals act as the store for your UI.
   * Components read these directly; methods mutate them.
   */
  readonly ecbmList = signal<EcbmDto[]>([]);
  readonly selected = signal<EcbmDto | null>(null);
  readonly pageInfo = signal<{ page: number; perPage: number; totalItems: number } | null>(null);

  // Wire endpoints for base service
  serviceParams: CrudServiceParams = {
    listUrl: '/ecbm/records', 
    detailUrl: '/ecbm/records/:id',
    createUrl: '/ecbm/records',
    updateUrl: '/ecbm/records/:id',
    deleteUrl: '/ecbm/records/:id',
  };


  async loadList( params?: { page?: number; perPage?: number; filter?: string; sort?: string }, ctx?: HttpContext): Promise<void> {
    
    const response = await this.list<PocketBaseList<EcbmDto>>(params, ctx);
    
    this.ecbmList.set(response.items);
    
    this.pageInfo.set
    (
      { page: response.page, 
        perPage: response.perPage, 
        totalItems: response.totalItems 
      }
    );
  }

  /**
   * Load a single item and set it as selected.
   * - Components bind to `selected()` for detail views.
   */
  async loadById(id: string, ctx?: HttpContext): Promise<void> {
    
    const item = await this.getById<EcbmDto>(id, ctx);
    
    this.selected.set(item);
  }

  /**
   * Create an item and update the list in the store.
   * - Prepend to the list for a snappy UI; or re-fetch if you prefer consistency.
   */
  async createItem(body: Partial<EcbmDto>, ctx?: HttpContext): Promise<void> {
    
    const created = await this.create<EcbmDto>(body, ctx);
    
    this.ecbmList.update(curr => [created, ...curr]);
  }

  /**
   * Update an item and keep the store in sync.
   * - Also updates `selected` if that item is currently selected.
   */
  async updateItem(id: string, body: Partial<EcbmDto>, ctx?: HttpContext): Promise<void> {
    
    const updated = await this.update<EcbmDto>(id, body, ctx);
    
    this.ecbmList.update(curr => curr.map(i => (i.id === id ? updated : i)));
    
    if (this.selected()?.id === id) this.selected.set(updated);
  }

  /**
   * Delete an item and remove it from the store.
   * - Clears `selected` if the deleted item was selected.
   */
  async deleteItem(id: string, ctx?: HttpContext): Promise<void> {

    await this.delete<void>(id, ctx);

    this.ecbmList.update(curr => curr.filter(i => i.id !== id));

    if (this.selected()?.id === id) this.selected.set(null);
  }
}
