import { Component, OnInit } from '@angular/core';
import { Learner } from '../models/learners.model'
import { SearchCourse } from '../models/SearchCourse.model'
import { Observable } from 'rxjs';

import { HttpClient, HttpHeaders,HttpClientModule } from '@angular/common/http'; 
import { datepickerAnimation } from 'ngx-bootstrap/datepicker/datepicker-animations';
import{ BsDatepickerConfig } from 'ngx-bootstrap/datepicker'
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list-learners',
  templateUrl: './list-learners.component.html',
  styleUrls: ['./list-learners.component.css']
})
export class ListLearnersComponent implements OnInit {

  allLearners: any ;
  name_S:string;
  Url:string = 'http://localhost:2588/Api';
  datePickerConfig : Partial<BsDatepickerConfig>;
  constructor(public http: HttpClient,private route: ActivatedRoute) { 
    //this.datePickerConfig=Object.assign({},{containerClass:'theme-dark-blue',showWeekNumbers:false,  
    //dateInputFormat:'DD/MMM/YYYY'});
  }
getLearners(){
  this.http.get<any[]>(this.Url + '/Learners/').subscribe((res)=>{this.allLearners=res;
    console.log(this.allLearners)});
}
  ngOnInit() {
    
    this.getLearners();
  }
  DeleteLearner(idNow:number){
    this.http.delete(this.Url + '/Learners/'+idNow).subscribe(() => console.log("Course deleted"));
  }
  search(){
    this.http.get<any[]>(this.Url + '/Learners/Search/'+this.name_S).subscribe((res)=>{this.allLearners=res});
  }


}
