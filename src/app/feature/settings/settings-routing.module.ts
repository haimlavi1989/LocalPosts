import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CategoriesComponent } from './../../feature/posts/categories/categories.component';
import { PostsonmapComponent } from './../../feature/posts/postsonmap/postsonmap.component';
import { AuthGuard } from "./../../feature/auth/auth.guard";


const routes: Routes = [
    { path : 'categories', component : CategoriesComponent, canActivate: [AuthGuard]},
    { path : 'postsonmap', component : PostsonmapComponent, canActivate: [AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingsRoutingModule {}
