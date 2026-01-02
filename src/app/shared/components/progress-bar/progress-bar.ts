import { Component, computed, inject, signal } from '@angular/core';
import { ProgressBar } from "primeng/progressbar";
import { LoadingService } from '../../../core/services/loading.service';

@Component({
  selector: 'app-progress-bar',
  imports: [ProgressBar],
  templateUrl: './progress-bar.html',
  styleUrl: './progress-bar.scss',
})
export class ProgressBarLoader {
  private loading = inject(LoadingService);

  readonly mode = computed(() => this.loading.isLoading() ? 'indeterminate' : 'determinate');

}
