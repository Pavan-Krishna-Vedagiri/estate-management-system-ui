import { Routes } from '@angular/router';
import { DashboardComponent } from './feature/dashboard-component/dashboard-component';
import { authGuard } from './core/auth/auth-guard';

export const routes: Routes = [
    { path : "", loadChildren : () => import('./feature/auth/auth-module').then(m => m.AuthModule) },
    { path : "dashboard", component : DashboardComponent, canActivate : [authGuard] },
    { path : "residents", loadChildren : () => import('./feature/resident/resident-module').then( m => m.ResidentModule), canActivate : [authGuard]},
    { path : "rooms", loadChildren : () => import('./feature/room/room-module').then( m => m.RoomModule), canActivate : [authGuard]}
];
