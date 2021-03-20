import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './feature/login/login.component';
import { HeaderComponent } from './feature/header/header.component';
import { RegisterComponent } from './feature/register/register.component';
import { MenuComponent } from './feature/menu/menu.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RECAPTCHA_V3_SITE_KEY, RecaptchaV3Module } from 'ng-recaptcha';
import { AuthInterceptor } from "./feature/auth/auth-interceptor";
import { SharedModule } from './feature/shared/shared.module';
import { environment } from '../environments/environment';
import { AuthService } from './feature/auth/auth.service';
import { ErrorInterceptor } from './feature/erorrs/error-interceptor';
import { SettingsComponent } from './feature/settings/settings.component';
import { SearchComponent } from './feature/search/search.component';
import { MessagesComponent } from './feature/messages/messages.component';
import { PostsModule } from './feature/posts/posts.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    RegisterComponent,
    MenuComponent,
    SettingsComponent,
    SearchComponent,
    MessagesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RecaptchaV3Module,
    SharedModule,
    PostsModule,
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
