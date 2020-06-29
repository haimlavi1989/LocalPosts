import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './feature/components/login/login.component';
import { HeaderComponent } from './feature/components/header/header.component';
import { RegisterComponent } from './feature/components/register/register.component';
import { MenuComponent } from './feature/components/menu/menu.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RECAPTCHA_V3_SITE_KEY, RecaptchaV3Module } from 'ng-recaptcha';
import { CategoriesComponent } from './feature/components/posts/categories/categories.component';
import { PostsonmapComponent } from './feature/components/posts/postsonmap/postsonmap.component';
import { GoogleMapsModule } from '@angular/google-maps';
import { ShareComponent } from './feature/components/posts/share/share.component';
import { PostsComponent } from './feature/components/posts/posts.component'

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
    PostsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    RecaptchaV3Module,
    GoogleMapsModule
  ],
  providers: [{ provide: RECAPTCHA_V3_SITE_KEY, useValue: '6Lfa1qQZAAAAAJyfeDdC0X8j0rtP_rIRnFpvwcQX' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
