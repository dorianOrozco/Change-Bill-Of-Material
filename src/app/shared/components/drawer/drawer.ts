import { Component, effect, input, model, output } from '@angular/core';
import { Drawer as NgDrawer } from "primeng/drawer";
import { DrawerPositions } from './drawer-positions';

@Component({
  selector: 'app-drawer',
  imports: [NgDrawer],
  templateUrl: './drawer.html',
  styleUrl: './drawer.scss',
})
export class Drawer {
  visible = model<boolean>(false);
  position = input<DrawerPositions>('right');
  styleClass = input<string>('drawer');
  modal = input<boolean>(true);
  dismissible = input<boolean>(true);

  // Method callbacks
  onShow = output<void>();
  onHide = output<void>();

  // Preferably keep true for accessibility reasons
  closeOnEscape = input<boolean>(true);

}
