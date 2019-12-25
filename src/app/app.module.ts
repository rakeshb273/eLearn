import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule,Routes} from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListCoursesComponent } from './courses/list-courses.component';
import { ListLearnersComponent } from './Learners/list-learners.component';
import {HttpClientModule} from '@angular/common/http'

const appRoutes:Routes=[
  {
    path:'courses',component:ListCoursesComponent
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
     
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
