import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule,Routes} from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListCoursesComponent } from './courses/list-courses.component';
import { ListLearnersComponent } from './Learners/list-learners.component';
import {HttpClientModule} from '@angular/common/http';
import { CourseComponent } from './Courses/course.component'
import {BsDatepickerModule} from 'ngx-bootstrap/datepicker'
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
  {path:'',redirectTo:'/courses',pathMatch:'full'}
]

@NgModule({
  declarations: [
    AppComponent,
    ListCoursesComponent,
    ListLearnersComponent,
    CourseComponent,
     
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    BsDatepickerModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
