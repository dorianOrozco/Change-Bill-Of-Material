import { Component, inject, resource, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EcbmService } from './core/services/ecbm.service';
import { Button } from 'primeng/button';
import { LoadingService } from './core/services/loading.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Button],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected ecbm = inject(EcbmService);
  protected loading = inject(LoadingService)
  protected readonly title = signal('Change-Bill-Of-Material');

  // Used as a trigger
  public ecbmTrigger = signal<number>(0);

   async awd() {
    await this.ecbm.loadList({ page: 1, perPage: 10, sort: '-created'});
  }
}
