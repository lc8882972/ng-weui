import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AComponent } from './components/a/a.component';
import { BComponent } from './components/b/b.component';
const appRoutes: Routes = [
    { path: '', redirectTo: 'a', pathMatch: 'full' },
    {
        path: 'a',
        component: AComponent
    },
    {
        path: 'b',
        component: BComponent
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
