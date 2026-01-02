import { Component, computed, inject, signal } from '@angular/core';
import { MenuItem, PassThroughOptions } from 'primeng/api';
import { Popover } from 'primeng/popover';
import { Menu } from 'primeng/menu';
import { Button } from "primeng/button";
import { Menubar, MenubarPassThrough } from 'primeng/menubar';
import { ThemePreference, ThemeService } from '../../services/theme-service';
import { SelectModule } from 'primeng/select';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-header',
  imports: [Menubar, Popover, Menu, Button, SelectModule, FormsModule],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  themeService = inject(ThemeService);

  logoPath = computed(() => {
    return this.themeService.currentTheme() === 'dark' ? '/assets/logo-light.png' : '/assets/logo-dark.png';
  })

  items = signal<MenuItem[]>([
    {
      label: 'Home',
      icon: 'pi pi-file',
      url: '/home',
      routerLinkActiveOptions: { exact: true },
    },
    {
      label: 'Machines',
      icon: 'pi pi-cog',
      url: '/machines',
      routerLinkActiveOptions: { exact: true }
    },
    {
      label: 'Users',
      icon: 'pi pi-users',
      url: '/users',
      routerLinkActiveOptions: { exact: true }
    }
  ]);

  userItems = signal<MenuItem[]>([
    {
      label: 'Profile',
      icon: 'pi pi-user',
      command: () => {
        // Handle profile
      }
    },  
    {
      label: 'Logout',
      icon: 'pi pi-sign-out',
      command: () => {
        // Handle logout
      }
    }
  ]);
}
