import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import{ BsDatepickerConfig } from 'ngx-bootstrap/datepicker'
import { NgForm } from '@angular/forms';

import { flushModuleScopingQueueAsMuchAsPossible } from '@angular/core/src/render3/jit/module';
import{BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { Course } from "../models/courses.model";
import { HttpClient, HttpHeaders,HttpClientModule } from '@angular/common/http'; 
import * as moment from "moment";

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  course: any;
  Url:string = 'http://localhost:2588/Api';
datePickerConfig : Partial<BsDatepickerConfig>;
  constructor(private route: ActivatedRoute,public http: HttpClient) {
    this.datePickerConfig=Object.assign({},{containerClass:'theme-dark-blue',showWeekNumbers:false,   
dateInputFormat:'DD/MMM/YYYY'});
   
   }

  ngOnInit() {
  //  this.course.ID= this.route.params['value'].ID;
  //  this.course.CourseName="";
  //  this.course.CourseCode="";
  //  this.course.Description="";
  //  this.course.StartDate=new Date(2019,12,12);
  //  this.course.EndDate=new Date(2019,12,12);

  //  this.http.get<{CourseName:string;CourseCode:string;Description:string}>(this.Url + '/Courses/'+this.course.ID).subscribe();
   this.http.get<any>(this.Url + '/Courses/'+this.route.params['value'].ID).subscribe((res)=>{this.course=res;
    this.course.StartDate=moment(res.StartDate).format('DD/MM/YYYY'); 
  });
    console.log(this.course)
   //(res)=>{this.course=res}
  }
  
  SaveCourse(){
    if(this.course.StartDate>this.course.EndDate){
      
    }
    this.http.get(this.Url + '/Courses/CoursesExists/',this.course).subscribe(
      (res) =>{
        if(!res){
          this.http.put(this.Url + '/Courses',this.course).subscribe(() => alert("Course Details saved"));
        }
        else{
          this.http.post(this.Url + '/Courses',this.course).subscribe(() => alert("Course Details Added"));
        }
      } 
      
      );
   
  }

  DeleteCourse(){
    this.http.delete(this.Url + '/Courses/'+this.course.ID).subscribe(() => console.log("Course deleted"));
  }
  removeLearner(cl_index:number){
    console.log(cl_index);
    console.log(this.Url + '/CoursesTakens/'+cl_index)     
    this.http.delete(this.Url + '/CoursesTakens/'+cl_index).subscribe(() => console.log("user deleted"));

  }
}
