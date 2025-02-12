import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        //component: HomeComponent ,
        loadComponent: () => import('./pages/home/home.component').then(c => c.HomeComponent),
    },
    {
        path: 'shop',
        loadComponent: () => import('./pages/shop/shop.component').then(c => c.ShopComponent)
    },
    {
        path: 'stores',
        loadComponent: () => import('./pages/stores/stores.component').then(c => c.StoresComponent)
    },
    {
        path: 'about',
        loadComponent: () => import('./pages/about/about.component').then(c => c.AboutComponent)
    },
    {
        path: 'not-found',
        loadComponent: () => import('./pages/not-found/not-found.component').then(c => c.NotFoundComponent)
    },
    {
        path: 'login',
        loadComponent: () => import('./pages/login/login.component').then(c => c.LoginComponent)
    },
    {
        path: '**',
        redirectTo : "/not-found",
        pathMatch : "full"
    }
];
