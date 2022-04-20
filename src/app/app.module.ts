import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component'
import { ReposComponent } from './repos/repos.component';
import { NoUserComponent } from './no-user/no-user.component';
import { JoinPipe } from './join.pipe';
import { Router, RouterModule } from '@angular/router';
import { TruncatePipe } from './truncate.pipe';
import { NavComponent } from './nav/nav.component';
import { HoverDirective } from './hover.directive';


@NgModule({
  declarations: [
    AppComponent,
    NoUserComponent,
    JoinPipe,
    TruncatePipe,
    NavComponent,
    HoverDirective,
    UserComponent,
    ReposComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    HttpClientModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
