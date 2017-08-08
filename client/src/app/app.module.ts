import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
// import { FileUploadModule } from "ng2-file-upload";
import { FileSelectDirective } from "ng2-file-upload";

// Routes
import { RouterModule } from '@angular/router';
import {routes} from './routes';

// services
import { SessionService } from '../services/session.service';
import { LoggedInService } from '../services/loggedin.service';
import { EmotionService } from '../services/emotion.service';
import { RecommendationService } from '../services/recommendation.service';

// components
import { LoginFormComponent } from './login-form/login-form.component';
import { AddPhotoEmotionComponent } from './add-photo-emotion/add-photo-emotion.component';
import { EmotionListComponent } from './emotion-list/emotion-list.component';
import { SignupComponent } from './signup/signup.component';
import { UserComponent } from './user/user.component';
import { HomeComponent } from './home/home.component';
import { EmotionSingleComponent } from './emotion-single/emotion-single.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    AddPhotoEmotionComponent,
    EmotionListComponent,
    SignupComponent,
    UserComponent,
    HomeComponent,
    FileSelectDirective,
    EmotionSingleComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    // FileUploadModule,
    RouterModule.forRoot(routes)
  ],
  providers: [SessionService, LoggedInService, EmotionService, RecommendationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
