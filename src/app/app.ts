import { Component, signal } from '@angular/core';
import { AppShell } from './core/layout/shell/shell';

@Component({
  selector: 'app-root',
  imports: [AppShell],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('Change-Bill-Of-Material');
}
