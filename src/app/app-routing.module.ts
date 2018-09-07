import { NgModule } from '@angular/core';
import { RouterModule, Routes,  } from '@angular/router';

//Components

import { CreateCatComponent } from './create-cat/create-cat.component'
import { SignInComponent } from './sign-in/sign-in.component'
import { LogInComponent } from './log-in/log-in.component'
import { RegisterComponent } from './register/register.component'
import { HomeComponent } from './home/home.component'
import { ViewAllComponent } from './view-all/view-all.component'
import { ProfileComponent } from './profile/profile.component'
import { AdminComponent } from './admin/admin.component'
import { AboutComponent } from './about/about.component'
import { MessagesComponent } from './messages/messages.component'
import { ViewCatInfoComponent } from './view-cat-info/view-cat-info.component'
import { InboxComponent } from './inbox/inbox.component'
import { IncorrectPageComponent } from './incorrect-page/incorrect-page.component'





//Routes
const routes : Routes = [
    {path:'', pathMatch:"full", redirectTo: 'about'},
    {path: 'home', component: HomeComponent},
  { path: 'signin', component: SignInComponent },
  { path: 'login', component: LogInComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'create', component: CreateCatComponent},
  { path: 'viewAll', component: ViewAllComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'about', component: AboutComponent },
  { path: 'messages', component: MessagesComponent },
  { path: 'view-cat/:id', component: ViewCatInfoComponent },
  { path: 'Inbox', component: InboxComponent },
  { path: '**', component: IncorrectPageComponent }

  
];




@NgModule({
  exports: [ RouterModule ],
  imports: [RouterModule.forRoot(routes)]
  
})




export class AppRoutingModule { }
