import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', loadComponent: () => import('./features/home/home').then(m => m.Home) },
    { path: 'experience', loadComponent: () => import('./features/experience/experience').then(m => m.Experience) },
    { path: 'education', loadComponent: () => import('./features/education/education').then(m => m.Education) },
    { path: '**', redirectTo: '' }
];
