import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule,Routes} from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListCoursesComponent } from './courses/list-courses.component';
import { ListLearnersComponent } from './Learners/list-learners.component';
import {HttpClientModule} from '@angular/common/http';
import { CourseComponent } from './Courses/course.component';
import {BsDatepickerModule} from 'ngx-bootstrap/datepicker';
import { FormsModule }   from '@angular/forms';
import { LearnerComponent } from './Learners/learner.component'; 

const appRoutes:Routes=[
  {
    path:'courses',component:ListCoursesComponent
  },
  {
    path:'courses/:ID',component:CourseComponent
  },
  {
    path:'Learners',component:ListLearnersComponent
  },
  {
    path:'Learners/:ID',component:LearnerComponent
  },
  {path:'',redirectTo:'/courses',pathMatch:'full'}
]

@NgModule({
  declarations: [
    AppComponent,
    ListCoursesComponent,
    ListLearnersComponent,
    CourseComponent,
    LearnerComponent,
     
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    BsDatepickerModule.forRoot(),
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
