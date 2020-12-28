import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './feature/login/login.component';
import { RegisterComponent } from './feature/register/register.component';
import { CategoriesComponent } from './feature/posts/categories/categories.component';
import { PostsonmapComponent } from './feature/posts/postsonmap/postsonmap.component';
import { PostsComponent } from './feature/posts/posts.component';
import { AuthGuard } from "./feature/auth/auth.guard";

 const routes: Routes = [
  { path : 'login', component : LoginComponent },
  { path : 'register', component : RegisterComponent },
  { path : 'categories', component : CategoriesComponent },
  { path : 'postsonmap', component : PostsonmapComponent, canActivate: [AuthGuard]},
  { path : 'posts', component : PostsComponent },
  { path : 'posts/:subjectName', component : PostsComponent },
  { path: '', redirectTo: 'register', pathMatch: 'full' },
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { 

}
