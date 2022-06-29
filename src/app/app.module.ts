import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/header/header.component';
import { NavbarComponent } from './core/navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { UserService } from './services/user.service';
import { UsersComponent } from './users/users.component';
import { HomeComponent } from './home/home.component';
import { ViewPostComponent } from './post/view-post/view-post.component';
import { PostListComponent } from './post/post-list/post-list.component';
import { VoteButtonComponent } from './post/vote-button/vote-button.component';
import { CreateCommunityComponent } from './community/create-community/create-community.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { CommunityListComponent } from './community/community-list/community-list.component';
import { CreatePostComponent } from './post/create-post/create-post.component';
import { ViewCommunityComponent } from './community/view-community/view-community.component';
import { EditPostComponent } from './post/edit-post/edit-post.component';
import { EditCommunityComponent } from './community/edit-community/edit-community.component';
import { AuthInterceptor } from './interceptors/auth.interceptor';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    LoginComponent,
    RegistrationComponent,
    UsersComponent,
    HomeComponent,
    ViewPostComponent,
    PostListComponent,
    VoteButtonComponent,
    CreateCommunityComponent,
    SideBarComponent,
    CommunityListComponent,
    CreatePostComponent,
    ViewCommunityComponent,
    EditPostComponent,
    EditCommunityComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
    FontAwesomeModule,
    ReactiveFormsModule

    
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },   UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
