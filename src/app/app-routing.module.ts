import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateCommunityComponent } from './community/create-community/create-community.component';
import { ViewCommunityComponent } from './community/view-community/view-community.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CreatePostComponent } from './post/create-post/create-post.component';
import { RegistrationComponent } from './registration/registration.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegistrationComponent},
  { path: 'posts', component: HomeComponent},
  { path: 'create-community', component: CreateCommunityComponent},
  { path: 'view-community/:id', component: ViewCommunityComponent},
  { path: 'create-post/id', component: CreatePostComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
