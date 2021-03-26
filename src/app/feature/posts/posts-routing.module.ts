import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CategoriesComponent } from './../../feature/posts/categories/categories.component';
import { PostsonmapComponent } from './../../feature/posts/postsonmap/postsonmap.component';
import { PostsComponent } from './../../feature/posts/posts.component';
import { AuthGuard } from "./../../feature/auth/auth.guard";
import { DetailComponent } from './../../feature/posts/detail/detail.component';
import { PostsResolverService } from './posts-resolver.service'

const routes: Routes = [
    { path : 'categories', component : CategoriesComponent, canActivate: [AuthGuard]},
    { path : 'postsonmap', component : PostsonmapComponent, canActivate: [AuthGuard]},
    { path : 'posts', 
      component : PostsComponent, 
      canActivate: [AuthGuard],
    },
    { path : 'posts/:subjectName',
      component : PostsComponent,
      canActivate: [AuthGuard],
    },
    { path : 'postdetail/:id',
      component : DetailComponent,
      canActivate: [AuthGuard],
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostsRoutingModule {}
