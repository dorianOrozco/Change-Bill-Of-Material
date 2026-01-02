import { Component, input, output } from '@angular/core';
import { Button } from 'primeng/button';
import { IconField } from 'primeng/iconfield';
import { InputIcon } from 'primeng/inputicon';
import { ToolbarModule } from 'primeng/toolbar';
import { ToolbarAction } from './toolbar-action';
import { SplitButton } from 'primeng/splitbutton';
import { TooltipModule } from 'primeng/tooltip';
import { InputText } from 'primeng/inputtext';

@Component({
  selector: 'app-toolbar',
  imports: [ToolbarModule, Button, IconField, InputText, InputIcon, SplitButton, TooltipModule],
  templateUrl: './toolbar.html',
  styleUrl: './toolbar.scss',
})
export class Toolbar {
    
  // Inputs using signal-based API
  startActions = input<ToolbarAction[]>([]);
  endActions = input<ToolbarAction[]>([]);
  showSearch = input<boolean>(true);
  searchPlaceholder = input<string>('Search');
  searchValue = input<string>('');
  styleClass = input<string[]>(['toolbar']);

  // Outputs using signal-based API
  searchChange = output<string>();
  actionClick = output<{ action: ToolbarAction, event: Event }>();

  // Upon toolbar action click emit the action as an event for the parent
  handleActionClick(action: ToolbarAction, event: Event): void {
    if (action.command) {
      action.command(event);
    }
    this.actionClick.emit({ action, event});
  }

  // Upon search value change emit the new value as an event for the parent
  onSearchChange(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.searchChange.emit(target.value);
  }


}
