import { Component, computed, effect, inject, model, signal } from '@angular/core';
import { Dialog } from "../../../../shared/components/dialog/dialog";
import { DividerModule} from 'primeng/divider';
import { CheckboxModule } from 'primeng/checkbox';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { InputText } from "primeng/inputtext";
import { ReactiveFormsModule } from '@angular/forms';
import { Select } from "primeng/select";
import { MachineClassService } from '../../../../core/services/machine/machine-class.service';
import { NotificationService } from '../../../../core/services/notification.service';
import { Button } from 'primeng/button';
import { SkeletonModule } from 'primeng/skeleton';
import { FocusTrapModule } from 'primeng/focustrap';
import { UniqueMachineSerialNumberValidator } from '../../../../core/models/machine/utils-machine';
import { IconFieldModule } from "primeng/iconfield";
import {  InputIconModule } from "primeng/inputicon";
import { MachineService } from '../../../../core/services/machine/machine.service';
import { Machine, MachineCreateForm } from '../../../../core/models/machine/machine';
import { MachineClass } from '../../../../core/models/machine/machine-classes';

@Component({
  selector: 'app-machine-create-dialog',
  imports: [Dialog, DividerModule, CheckboxModule, InputText, ReactiveFormsModule, Select, Button, SkeletonModule, FocusTrapModule, IconFieldModule, InputIconModule],
  templateUrl: './machine-create-dialog.html',
  styleUrl: './machine-create-dialog.scss',
})
export class MachineCreateDialog {
  private machineClassService = inject(MachineClassService);
  private notificationService = inject(NotificationService);
  private machineService = inject(MachineService);

  private formBuilder = inject(FormBuilder);
  private machineValidator = inject(UniqueMachineSerialNumberValidator);

  // Signal controlling the visibility of the dialog
  visible = model<boolean>(false);

  // Loading machine classes, customers, and potentially order numbers.
  isLoadingData = signal<boolean>(false);
  
  // Submitting new machine data
  isSubmittingData = signal<boolean>(false);
  buttonLabel = signal<string>('Add Machine');
  
  // Reactive signal holding machine classes for the dropdown
  machineClasses = this.machineClassService.machineClasses;


  // Machine form group with simple validation

  machineForm = this.formBuilder.group<MachineCreateForm>({
    serialNo: new FormControl('', {
      validators: [Validators.required],
      asyncValidators: [this.machineValidator.validate.bind(this.machineValidator)],
      updateOn: 'blur',
      nonNullable: true,
    }),
    orderNo: new FormControl('', {
      validators: [Validators.required],
      nonNullable: true,
    }),
    customer: new FormControl('', {
      validators: [Validators.required],
      nonNullable: true,
    }),
    machineClassId: new FormControl('', {
      validators: [Validators.required],
      nonNullable: true,
    }),
  });

  constructor() {

    effect(() => {
      // Track visibility changes to load machine classes when dialog is opened
      if (this.visible()) {
        this.loadMachineClasses();
      }
    });
  }

  // Load machine classes with error handling
  async loadMachineClasses(): Promise<void> {
    try {
      this.isLoadingData.set(true);
      await this.machineClassService.getMachineClassesDropdown();

    } catch (error) {
      this.notificationService.showError('Failed Retrieving Machine Data', 'Unable to fetch the most recent machine classes. Please try again.');            // Hide the form and reset if it fails to load to force a refresh upon next open.
      this.closeDialog();
    }
    finally {
      this.isLoadingData.set(false);
    }
  } 



  async onSubmit(): Promise<void> {
    if (!this.machineForm.valid) { return; }
      
    try {
      this.isSubmittingData.set(true);
      this.buttonLabel.set('Submitting...');
      
      await this.machineService.createMachine(this.machineForm.getRawValue());



      this.notificationService.showSuccess('Machine Created', 'The machine has been successfully created.');
      this.closeDialog();
    }
    catch (error: any){ 
      if (error.status === 400 && error.error?.message) {
        this.notificationService.showError('Machine Creation Failed', error.error.message);
      } else {
        this.notificationService.showError('Machine Creation Failed', 'An unexpected error occurred while creating the machine. Please try again.');
      }


    }
    finally {
        this.isSubmittingData.set(false);
        this.buttonLabel.set('Add Machine');
    }    
  }

  closeDialog(): void {
    this.visible.set(false);
    this.machineForm.reset();
  }
}
