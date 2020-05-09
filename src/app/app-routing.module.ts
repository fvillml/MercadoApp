import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { LoginGuard } from './guards/login.guard';
import { AlreadyLoggedGuard } from './guards/already-logged.guard';
import { RegisterComponent } from './components/register/register.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [AlreadyLoggedGuard]
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [LoginGuard]
  },
  {
    path: 'register',
    component: RegisterComponent,
    canActivate: [AlreadyLoggedGuard]
  },
  {path: '', redirectTo: '/home', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
