import { Routes } from '@angular/router';
import { MachineListPage } from './features/machines/pages/machine-list.page';

export const routes: Routes = [
    // { path: 'machines', children: MACHINE_ROUTES }
    {
        path: '',
        component: MachineListPage,
        title: 'CBOM - Machines'
    }
];
