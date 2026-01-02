import { inject, Injectable, signal } from '@angular/core';
import { HttpService } from '../httpService';

@Injectable({
  providedIn: 'root'
})

export class MachineService {
  private http = inject(HttpService);
  private endpoint = "machines";
}