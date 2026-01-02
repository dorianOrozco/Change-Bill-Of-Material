import { Component, model } from '@angular/core';
import { Drawer } from '../../../../shared/components/drawer/drawer';

@Component({
  selector: 'app-machine-import-drawer',
  imports: [Drawer],
  templateUrl: './machine-import-drawer.html',
  styleUrl: './machine-import-drawer.scss',
})
export class MachineImportDrawer {
    visible = model<boolean>(false);
}
