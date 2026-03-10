import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', loadComponent: () => import('./features/home/home').then(m => m.Home) },
    { path: 'experience', loadComponent: () => import('./features/experience/experience').then(m => m.Experience) },
    { path: 'education', loadComponent: () => import('./features/education/education').then(m => m.Education) },
    { path: 'portfolio', loadComponent: () => import('./features/portfolio/portfolio').then(m => m.Portfolio) },
    {
        path: 'portfolio/:id',
        loadComponent: () =>
            import('./features/portfolio/project-detail/project-detail')
                .then(m => m.ProjectDetail)
    },
    { path: 'contact', loadComponent: () => import('./features/contact/contact').then(m => m.Contact) },
    { path: 'competences', loadComponent: () => import('./features/competences/competences').then(m => m.Competences) },
    { path: '**', redirectTo: '' },

];
