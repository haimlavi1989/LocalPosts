import { Injectable } from '@angular/core';
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';

import { Post } from './../shared/models/Post';
import { PostsService } from './../shared/services/posts/posts.service';
import { PostService } from './../../feature/posts/post.service';

@Injectable({ providedIn: 'root' })

export class PostsResolverService implements Resolve<any> {

  private center;
  private posts: Post[];

  constructor(
    private postsService: PostsService,
    private postService: PostService
  ) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
  }

}
