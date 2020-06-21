import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './feature/components/login/login.component';
import { RegisterComponent } from './feature/components/register/register.component';
import { CategoriesComponent } from './feature/components/posts/categories/categories.component';

 const routes: Routes = [
  { path : 'login' , component : LoginComponent },
  { path : 'register' , component : RegisterComponent },
  { path : 'categories' , component : CategoriesComponent },
  { path: '',   redirectTo: 'login', pathMatch: 'full' },
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
