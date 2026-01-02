import { Component, inject } from '@angular/core';
import { Header } from "../header/header";
import { RouterOutlet } from '@angular/router';
import { ProgressBarLoader } from "../../../shared/components/progress-bar/progress-bar";
import { Toast } from "../../../shared/components/toast/toast";
import { NotificationService } from '../../services/notification.service';

@Component({
  selector: 'app-shell',
  imports: [Header, RouterOutlet, ProgressBarLoader, Toast],
  templateUrl: './shell.html',
  styleUrl: './shell.scss',
})
export class AppShell {

}
