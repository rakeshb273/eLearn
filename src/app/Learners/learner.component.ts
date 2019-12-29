import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker/ngx-bootstrap-datepicker';
import { HttpClient, HttpHeaders,HttpClientModule } from '@angular/common/http';
import * as moment from "moment";

@Component({
  selector: 'app-learner',
  templateUrl: './learner.component.html',
  styleUrls: ['./learner.component.css']
})
export class LearnerComponent implements OnInit {
  Learner: any;
  Url:string = 'http://localhost:2588/Api';
datePickerConfig : Partial<BsDatepickerConfig>;
  constructor(private route: ActivatedRoute,private http: HttpClient) {
    this.datePickerConfig=Object.assign({},{containerClass:'theme-dark-blue',showWeekNumbers:false,   
dateInputFormat:'DD/MMM/YYYY'});
   
   }

  ngOnInit() {
    this.http.get<any>(this.Url + '/Learners/'+this.route.params['value'].ID).subscribe((res)=>{this.Learner=res;
      this.Learner.DOB=moment(res.DOB).format('DD/MM/YYYY'); 
      console.log(this.Learner);
    });
  }

  DeleteLearner(){
    this.http.delete(this.Url + '/Learners/'+this.Learner.ID).subscribe(() => console.log("Course deleted"));
  }
  removeCourse(cl_index:number){
    console.log(cl_index);
    console.log(this.Url + '/CoursesTakens/'+cl_index)     
    this.http.delete(this.Url + '/CoursesTakens/'+cl_index).subscribe(() => console.log("Course deleted"));

  }
}
