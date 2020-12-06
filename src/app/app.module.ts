import { AuthorsService } from './authors.service';
import { CoursesService } from './courses.service';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CoursesComponent } from './courses.component';
import { AuthorsComponent } from './authors/authors.component';
import { SummaryPipe } from './summary.pipe';
import { FavouriteComponent } from './favourite/favourite.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PanelComponent } from './panel/panel.component';
import { LikeComponent } from './like/like.component';
import { InputFormatDirective } from './input-format.directive';
import { ZippyComponent } from './zippy/zippy.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { NewCourseFormComponent } from './new-course-form/new-course-form.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { PostsComponent } from './posts/posts.component';
import {PostService} from './services/post.service';
import {AppErrorHandler} from './common/app-error-handler';
import {ErrorHandler} from 'protractor/built/exitCodes';
import { GithubFollowersComponent } from './github-followers/github-followers.component';
import {GithubFollowersService} from './github-followers.service';

@NgModule({
  declarations: [
    AppComponent,
    SignupFormComponent,
    CoursesComponent,
    AuthorsComponent,
    SummaryPipe,
    FavouriteComponent,
    PanelComponent,
    LikeComponent,
    InputFormatDirective,
    ZippyComponent,
    ContactFormComponent,
    NewCourseFormComponent,
    ChangePasswordComponent,
    PostsComponent,
    GithubFollowersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [
    PostService,
    CoursesService,
    AuthorsService,
    GithubFollowersService,
    {
      provide: ErrorHandler,
      useClass: AppErrorHandler
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
