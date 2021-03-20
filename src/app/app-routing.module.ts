import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './feature/login/login.component';
import { RegisterComponent } from './feature/register/register.component';
import { AuthGuard } from "./feature/auth/auth.guard";
import { SettingsComponent } from './feature/settings/settings.component';
import { SearchComponent } from './feature/search/search.component';
import { MessagesComponent } from './feature/messages/messages.component';
    

 const routes: Routes = [
  { path : 'login', component : LoginComponent },
  { path : 'register', component : RegisterComponent },
  { path : 'settings', component : SettingsComponent, canActivate: [AuthGuard]},
  { path : 'search', component : SearchComponent, canActivate: [AuthGuard]},
  { path : 'messages', component : MessagesComponent, canActivate: [AuthGuard]},  
  { path: '', redirectTo: 'posts', pathMatch: 'full' },
  ];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { 

}
