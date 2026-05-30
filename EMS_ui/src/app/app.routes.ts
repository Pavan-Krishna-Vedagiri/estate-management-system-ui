import { Routes } from '@angular/router';
import { DashboardComponent } from './feature/dashboard-component/dashboard-component';
import { authGuard } from './core/auth/auth-guard';
import { HomeLayoutComponent } from './layouts/home-layout-component/home-layout-component'
import { AuthLayoutComponent } from './layouts/auth-layout-component/auth-layout-component'
import { LoginComponent } from './feature/auth/login-component/login-component';

export const routes: Routes = [
    {
        path: "", component: HomeLayoutComponent, children: [
            { path: "", component: DashboardComponent, canActivate: [authGuard] },
            { path: "residents", loadChildren: () => import('./feature/resident/resident-module').then(m => m.ResidentModule), canActivate: [authGuard] },
            { path: "rooms", loadChildren: () => import('./feature/room/room-module').then(m => m.RoomModule), canActivate: [authGuard] },
            { path: "invoices", loadChildren: () => import("./feature/invoices/invoices-module").then(m => m.InvoicesModule), canActivate: [authGuard] },
            { path: "payments", loadChildren: () => import("./feature/payments/payments-module").then(m => m.PaymentsModule), canActivate: [authGuard] }
        ], canActivate : [authGuard]
    },

    { path: "login", component: AuthLayoutComponent, children : [
        {path : "", component : LoginComponent}
    ] },
    { path: "**", component: AuthLayoutComponent }
];
