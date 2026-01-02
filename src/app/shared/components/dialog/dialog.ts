import { Component, input, model, output } from '@angular/core';
import { Dialog as NgDialog } from 'primeng/dialog';
@Component({
  selector: 'app-dialog',
  imports: [NgDialog],
  templateUrl: './dialog.html',
  styleUrl: './dialog.scss',
})
export class Dialog {
  visible = model<boolean>(false);
  heading = input<string>('SET HEADER');
  position = input<'left' | 'right' | 'top' | 'bottom' | 'center' | 'topleft' | 'topright' | 'bottomleft' | 'bottomright'>('center');
  maximizable = input<boolean>(false);  
  onHide = output<void>();
}
