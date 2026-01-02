import { inject, Injectable, signal } from '@angular/core';
import { HttpService } from '../httpService';
import { Observable } from 'rxjs';
import { NotificationService } from '../notification.service';
import { MachineCreate, Machine } from '../../models/machine/machine';
import { SKIP_ERROR_ALERT } from '../../models/http-flags.token';
import { HttpContext } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class MachineService {
  private http = inject(HttpService);
  private notificationService = inject(NotificationService);

  private endpoints = {
    checkSerialNumber: "machines/serialnumbertaken"
  }

  // MENTAL NOTE: Service should not handle errors for the most part, the errors will bubble to the component where the service is called and handled there.
  // Furthermore: Logging errors can be done here but they are handled in HTTP intercepors. 

  // Post to create machine     
  async createMachine(machine: MachineCreate): Promise<Machine> {
    return await this.http.post<Machine>('machines', machine, {
      context: new HttpContext().set(SKIP_ERROR_ALERT, true)          // Skipping error alert to handle in component as it requires more specific handling
    });
  } 

  
















  // fix by removing notification from here and handling it in the component - not urgent
  async isSerialNumberTaken(serialNumber: string):  Promise<boolean> {
    try {
      
      const response = await this.http.get<{ isTaken: boolean }>(`${this.endpoints.checkSerialNumber}?serialNumber=${encodeURIComponent(serialNumber)}`);
      return response.isTaken;
    }
    catch (error: any) {
      this.notificationService.showError('Error Validating Serial Number', 'Unable to validate the machine serial number. Please ensure you followed the proper format.');
      throw error;
    }
  }
}