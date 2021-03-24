import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { PostComponent } from './../../feature/posts/post/post/post.component';
import { DetailComponent } from './../../feature/posts/detail/detail.component';
import { CommentsComponent } from './../../feature/posts/comments/comments.component';
import { CommentComponent } from './../../feature/posts/comments/comment/comment.component';
import { CategoriesComponent } from './../../feature/posts/categories/categories.component';
import { PostsonmapComponent } from './../../feature/posts/postsonmap/postsonmap.component';
import { ShareComponent } from './../../feature/posts/share/share.component';
import { PostsComponent } from './../../feature/posts/posts.component'
import { SharedModule } from '../shared/shared.module';
import { PostsRoutingModule } from './posts-routing.module';
import { PostService } from './post.service';

@NgModule({
  declarations: [
    CategoriesComponent,
    PostsonmapComponent,
    ShareComponent,
    PostsComponent,
    PostComponent,
    DetailComponent,
    CommentsComponent,
    CommentComponent,
  ],
  imports: [
    RouterModule,
    SharedModule,
    PostsRoutingModule,
  ],
  providers: [
    PostService
  ],
})
export class PostsModule {}
