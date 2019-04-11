

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './services/auth.guard';
import { DashComponent } from './dash/dash';
import { HomeComponents } from './home/home';
import { LoginComponent } from './login/login';



const routes: Routes = [
    { path: '', component: HomeComponents },
    { path: 'login',component: LoginComponent },
    { path: 'dash', component: DashComponent,canActivate:[AuthGuard] },
 
    
    

    
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {useHash: true})],
    exports: [RouterModule]
})
export class AppRoutingModule { }
