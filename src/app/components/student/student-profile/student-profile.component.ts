import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/shared/service/data/data.service';
import { routes } from 'src/app/shared/service/routes/routes';

@Component({
  selector: 'app-student-profile',
  templateUrl: './student-profile.component.html',
  styleUrls: ['./student-profile.component.scss']
})
export class StudentProfileComponent implements OnInit {
  public studentProfileEducation: any = [];
  public studentProfileExperience: any = [];
  public studentProfileCourses: any = [];
  public studentProfileReviews: any = [];
  public routes = routes;
  public studentProfileContactDetails: any = [];

  constructor(private DataService: DataService) {
    this.studentProfileEducation = this.DataService.studentProfileEducation;
    this.studentProfileExperience = this.DataService.studentProfileExperience;
    this.studentProfileCourses = this.DataService.studentProfileCourses;
    this.studentProfileReviews = this.DataService.studentProfileReviews;
    this.studentProfileContactDetails = this.DataService.studentProfileContactDetails;
   }

  ngOnInit(): void {
  }

}
