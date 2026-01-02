import { Component, inject, model } from '@angular/core';
import { Dialog } from "../../../../shared/components/dialog/dialog";
import { DividerModule} from 'primeng/divider';
import { CheckboxModule } from 'primeng/checkbox';
import { FormBuilder, Validators } from '@angular/forms';
import { InputText } from "primeng/inputtext";
import { ReactiveFormsModule } from '@angular/forms';
import { Select } from "primeng/select";
import { MachineClassService } from '../../../../core/services/machine/machine-class.service';
import { NotificationService } from '../../../../core/services/notification.service';
import { Button } from 'primeng/button';

@Component({
  selector: 'app-machine-create-dialog',
  imports: [Dialog, DividerModule, CheckboxModule, InputText, ReactiveFormsModule, Select, Button],
  templateUrl: './machine-create-dialog.html',
  styleUrl: './machine-create-dialog.scss',
})
export class MachineCreateDialog {
  private formBuilder = inject(FormBuilder);
  private machineClassService = inject(MachineClassService);
  private notificationService = inject(NotificationService);

  visible = model<boolean>(false);

  machineForm = this.formBuilder.group({
    serialNo: ['', Validators.required],
    orderNo: ['', Validators.required],
    customer: ['', Validators.required],
    machineClass: ['', Validators.required],
  })

  // Reactive signal 
  machineClasses = this.machineClassService.machineClasses;

  ngOnInit(): void {
    this.loadMachineClasses();
  }

  async loadMachineClasses(): Promise<void> {
    try {
      await this.machineClassService.getMachineClassesDropdown();
    } catch (error) {
      this.notificationService.showError('Error', 'bruh');
    }
  } 

  closeDialog(): void {
    this.visible.set(false);
    this.machineForm.reset();
  }
}
