import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './feature/login/login.component';
import { RegisterComponent } from './feature/register/register.component';
import { CategoriesComponent } from './feature/posts/categories/categories.component';
import { PostsonmapComponent } from './feature/posts/postsonmap/postsonmap.component';
import { PostsComponent } from './feature/posts/posts.component';

 const routes: Routes = [
  { path : 'login', component : LoginComponent },
  { path : 'register', component : RegisterComponent },
  { path : 'categories', component : CategoriesComponent },
  { path : 'postsonmap', component : PostsonmapComponent },
  { path : 'posts', component : PostsComponent },
  { path : 'posts/:id', component : PostsComponent },
  { path: '', redirectTo: 'register', pathMatch: 'full' },
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
