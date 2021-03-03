import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './feature/login/login.component';
import { HeaderComponent } from './feature/header/header.component';
import { RegisterComponent } from './feature/register/register.component';
import { MenuComponent } from './feature/menu/menu.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RECAPTCHA_V3_SITE_KEY, RecaptchaV3Module } from 'ng-recaptcha';
import { CategoriesComponent } from './feature/posts/categories/categories.component';
import { PostsonmapComponent } from './feature/posts/postsonmap/postsonmap.component';
import { GoogleMapsModule } from '@angular/google-maps';
import { ShareComponent } from './feature/posts/share/share.component';
import { PostsComponent } from './feature/posts/posts.component'
import { AuthInterceptor } from "./feature/auth/auth-interceptor";
import { SharedModule } from './feature/shared/shared.module';
import { environment } from '../environments/environment';
import { AuthService } from './feature/auth/auth.service';
import { PostComponent } from './feature/posts/post/post/post.component';
import { ErrorInterceptor } from './feature/erorrs/error-interceptor';
import { DetailComponent } from './feature/posts/detail/detail.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CommentsComponent } from './feature/posts/comments/comments.component';
import { CommentComponent } from './feature/posts/comments/comment/comment.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    RegisterComponent,
    MenuComponent,
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
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    RecaptchaV3Module,
    GoogleMapsModule,
    SharedModule,
    FontAwesomeModule
  ],
  providers: [
    { provide: RECAPTCHA_V3_SITE_KEY, useValue: environment.recaptcha_key },
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
