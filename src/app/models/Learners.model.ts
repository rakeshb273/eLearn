import { CoursesTaken } from './CoursesTaken.model';

export class Learner {
  id:Number;
  FirstName:string;
  LastName:string;
  MobileNo:string;
  DOB:Date;
  Email:String;
  CoursesTakens?:CoursesTaken[];  
  
  
}