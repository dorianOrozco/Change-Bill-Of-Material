import { inject, Injectable, signal } from '@angular/core';
import { HttpService } from '../httpService';
import { MachineClass } from '../../models/machine/machine-classes';
import { NotificationService } from '../notification.service';

@Injectable({
  providedIn: 'root'
})

export class MachineClassService {
  private http = inject(HttpService);
  private endpoints = {
    machineClassDropdown: "machineclass/dropdown",
  }

  machineClasses = signal<MachineClass[]>([]);


  
  async getMachineClassesDropdown(): Promise<MachineClass[]> {
    try {
        // const ctx = new HttpContext().set(SKIP_ERROR_ALERT, true);
        //   try {
        //     const classes = await this.http.get<MachineClass[]>(this.endpoints.machineClassDropdown, { context: ctx });
        
        const classes = await this.http.get<MachineClass[]>(this.endpoints.machineClassDropdown);
        this.machineClasses.set(classes);
        
        return classes;
      }
      catch  (err: any) { // To throw a custom error message here pass in the skip error alert context (comment above)
        throw err;
    } 
  }
}