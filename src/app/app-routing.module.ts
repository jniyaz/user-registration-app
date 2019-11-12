import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { BeforeLoginService } from './services/before-login.service';
import { AfterLoginService } from './services/after-login.service';
import { RequestResetComponent } from './components/password/request-reset/request-reset.component';
import { ResponseResetComponent } from './components/password/response-reset/response-reset.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    canActivate: [BeforeLoginService]
  },
  {
    path: 'about',
    component: AboutComponent,
    canActivate: [BeforeLoginService]
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [BeforeLoginService]
  },
  {
    path: 'register',
    component: RegisterComponent,
    canActivate: [BeforeLoginService]
  },
  {
    path: 'request-reset-password',
    component: RequestResetComponent,
    canActivate: [BeforeLoginService]
  },
  {
    path: 'response-reset-password',
    component: ResponseResetComponent,
    canActivate: [BeforeLoginService]
  },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [AfterLoginService]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
