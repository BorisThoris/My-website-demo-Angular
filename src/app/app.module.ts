import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NaivagtionBarComponent } from './naivagtion-bar/naivagtion-bar.component';
import { FooterBarComponent } from './footer-bar/footer-bar.component';
import { AppRoutingModule } from './app-routing.module';
import { SignInComponent } from './sign-in/sign-in.component';
import { LogInComponent } from './log-in/log-in.component';
import { CreateCatComponent } from './create-cat/create-cat.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProfileComponent } from './profile/profile.component';
import { ViewAllComponent } from './view-all/view-all.component';
import { AdminComponent } from './admin/admin.component';
import { AboutComponent } from './about/about.component';
import { MessagesComponent } from './messages/messages.component';
import { PictureSliderComponent } from './picture-slider/picture-slider.component';
import { SearchOptionsComponent } from './search-options/search-options.component';
import { UserProfileCardComponent } from './user-profile-card/user-profile-card.component';
import { MessageTemplateComponent } from './message-template/message-template.component';
import { HttpClientModule } from '../../node_modules/@angular/common/http';
import { CatCardComponent } from './cat-card/cat-card.component';


@NgModule({
  declarations: [
    AppComponent,
    NaivagtionBarComponent,
    FooterBarComponent,
    SignInComponent,
    LogInComponent,
    CreateCatComponent,
    RegisterComponent,
    HomeComponent,
    ProfileComponent,
    ViewAllComponent,
    AdminComponent,
    AboutComponent,
    MessagesComponent,
    PictureSliderComponent,
    SearchOptionsComponent,
    UserProfileCardComponent,
    MessageTemplateComponent,
    CatCardComponent,
    
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule.forRoot(),
    FormsModule,
    HttpClientModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
