// "Smart component" tied to a route, calls services, handles query params, sets status messages and passes data to the table.

import { Component, inject, signal } from "@angular/core";
import { MachineService } from "../../../core/services/machine/machine.service";
import { StatusService } from "../../../core/services/status.service";
import { LoadingService } from "../../../core/services/loading.service";
import { Machine } from "../../../core/models/machine/machine";
import { TableModule } from "primeng/table";
import { TooltipModule } from "primeng/tooltip";
import { MachineToolbar } from "../components/machine-toolbar/machine-toolbar";
import { MachineImportDrawer } from "../components/machine-import-drawer/machine-import-drawer";
import { MachineCreateDialog } from "../components/machine-create-dialog/machine-create-dialog";

@Component({
    selector: 'app-machine-list-page',
    templateUrl: 'machine-list.page.html',
    styleUrl: 'machine-list.page.scss',
    imports: [TableModule, TooltipModule, MachineToolbar, MachineImportDrawer, MachineCreateDialog]
})

export class MachineListPage {

    machines = signal<Machine[]>([]);

    importDrawerVisible = signal<boolean>(false);
    createMachineDialogVisible = signal<boolean>(true);    

    onImportDetection(): void {
        this.importDrawerVisible.set(true);
    }

    onCreateMachineDetection(): void {
        this.createMachineDialogVisible.set(true);
    }
}