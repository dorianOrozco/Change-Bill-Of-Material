import { inject, Injectable } from "@angular/core";
import { AbstractControl, AsyncValidator, ValidationErrors } from "@angular/forms";
import { catchError, map, Observable, of, from } from "rxjs";
import { MachineService } from "../../services/machine/machine.service";

@Injectable({ providedIn: 'root' })
export class UniqueMachineSerialNumberValidator implements AsyncValidator {
    private readonly machineService = inject(MachineService);

    validate(control: AbstractControl): Observable<ValidationErrors | null> {
        if(!control.value) { return of(null);}
         
        const isTaken = this.machineService.isSerialNumberTaken(control.value);

        return from(isTaken).pipe(
            map((isTaken) => (isTaken ? { isTaken: true } : null)),
            catchError(() => of(null)),
        )
    }
} 