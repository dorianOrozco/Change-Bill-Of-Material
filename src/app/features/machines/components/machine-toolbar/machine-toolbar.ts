import { Component, output, signal } from '@angular/core';
import { Toolbar } from '../../../../shared/components/toolbar/toolbar';
import { ToolbarAction } from '../../../../shared/components/toolbar/toolbar-action';
import { TabsModule } from 'primeng/tabs';

@Component({
  selector: 'app-machine-toolbar',
  imports: [Toolbar, TabsModule],
  templateUrl: './machine-toolbar.html',
  styleUrl: './machine-toolbar.scss',
})
export class MachineToolbar {
  searchTerm = signal('');

  btnImport = output<void>();
  btnCreateMachine = output<void>();

  startActions = signal<ToolbarAction[]>([
    {
      id: 'btn-import',
      type: 'button',
      icon: 'pi pi-upload',
      label: 'Import',
      text: true,
      // tooltip: 'Import Data',
      command: () => {
        this.btnImport.emit();
      }
    },
    {
      id: 'btn-remind',
      type: 'button',
      icon: 'pi pi-send',
      text: true,
      label: 'Remind Users',
      // tooltip: 'Remind Users',
      command: () => [

      ]
    }
  ]);

  endActions = signal<ToolbarAction[]>([
    {
      id: 'btn-create',
      type: 'split',
      label: 'Add ECBM',
      icon: 'pi pi-plus',
      text: false,
      // tooltip: 'Create ECBM',
      command: () => {},
      model: [
        {
          label: 'Add Machine',
          icon: 'pi pi-plus',
          command: () => {
            this.btnCreateMachine.emit();
          }
        }
      ]
    }
  ]);
}
