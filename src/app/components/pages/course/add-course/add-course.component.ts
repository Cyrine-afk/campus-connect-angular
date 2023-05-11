/*import { Component, OnInit, OnDestroy, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Editor, Toolbar } from 'ngx-editor';
import { EventService } from 'src/app/services/events.services';
import { Event } from 'src/app/models/events.model';

import { routes } from 'src/app/shared/service/routes/routes';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course1.component.html',
  styleUrls: ['./add-course.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AddCourse1Component implements OnInit, OnDestroy {
  public routes = routes;
  public form = new FormGroup({
    editorContent: new FormControl('', Validators.required),
  });
  selected = "1";
  selected2 = "1";
  public activeIndex = 0;
  editor!: Editor;
  toolbar: Toolbar = [
    ['bold', 'italic'],
    ['underline', 'strike'],
    ['code', 'blockquote'],
    ['ordered_list', 'bullet_list'],
    [{ heading: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] }],
    ['link', 'image'],
    ['text_color', 'background_color'],
    ['align_left', 'align_center', 'align_right', 'align_justify'],
  ];
  selectedEvent: Event | undefined;
  events: Event[] = [];



  constructor(private eventService: EventService, private http: HttpClient) { }

  ngOnInit(): void {
    this.editor = new Editor();
    this.getAllEvents().subscribe(
      (events: Event[]) => {
        this.events = events;
      },
      (error: any) => {
        console.log(error);
      }
    );
  }

  onSelect(event: Event): void {
    this.selectedEvent = event;
  }

  onCreate(event: Event): void {
    this.eventService.createEvent(event).subscribe(
      (event: Event) => {
        this.events.push(event);
      },
      (error: any) => {
        console.log(error);
      }
    );
  }

  onUpdate(event: Event): void {
    this.eventService.updateEvent(event).subscribe(
      (event: Event) => {
        const index = this.events.findIndex((e: Event) => e.idEvents === event.idEvents);
        if (index !== -1) {
          this.events[index] = event;
        }
      },
      (error: any) => {
        console.log(error);
      }
    );
  }

  onDelete(event: Event): void {
    this.eventService.deleteEvent(event.idEvents).subscribe(
      () => {
        this.events = this.events.filter((e: Event) => e.idEvents !== event.idEvents);
        this.selectedEvent = undefined;
      },
      (error: any) => {
        console.log(error);
      }
    );
  }

  ngOnDestroy(): void {
    this.editor.destroy();
  }

  public onSubmit(index: number): void {
    this.activeIndex = index;
  }

  public onBack(index: number): void {
    this.activeIndex = index;
  }

  previousStep(): void {
    if (this.activeIndex > 0) {
      this.activeIndex--;
    }
  }

  nextStep(): void {
    this.activeIndex++;
  }

  getAllEvents(): Observable<Event[]> {
    const authToken = localStorage.getItem('jwtToken');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${authToken}`);
    return this.http.get<Event[]>('http://localhost:8097/GetAllEvents', { headers });
  }
}
*/
import { Component, OnInit, OnDestroy, ViewEncapsulation } from '@angular/core';
import { toHTML } from 'ngx-editor';
import { AbstractControl, FormControl, FormGroup } from '@angular/forms';
import { Validators, Editor, Toolbar } from 'ngx-editor';
import { routes } from 'src/app/shared/service/routes/routes';
//import { Event } from 'src/app/models/events.model';
import { EventService } from 'src/app/services/events.services';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
//import { Places, Themes } from 'src/app/models/events.model';
import { Event } from 'src/app/models/events.model';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AddCourseComponent implements OnInit, OnDestroy {

  public routes = routes;
  selected="1";
  selected2="1";
  public activeIndex:number=0
  editor!: Editor;
  toolbar: Toolbar = [
    ['bold', 'italic'],
    ['underline', 'strike'],
    ['code', 'blockquote'],
    ['ordered_list', 'bullet_list'],
    [{ heading: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] }],
    ['link', 'image'],
    ['text_color', 'background_color'],
    ['align_left', 'align_center', 'align_right', 'align_justify'],
  ];
  // events: Event[] = [];
  selectedEvent: Event | undefined;
  myCourse: any;
  events: any;
  listEvents : any;
  form : boolean = false;
  constructor(private eventService: EventService, private http: HttpClient,private router: Router) { }
 /* form = new FormGroup({
    editorContent: new FormControl('', Validators.required()),
  });*/
  Event!: Event;
  ngOnInit(): void {
    // this.editor = new Editor();

 //   this.addEvent(this.events);;
    //  this.loadEvents();;*/
    this.Event = {
      idEvents: '',
      Name: '',
      Topic: '',
      location: '',
      Image: '',
      StartDate: '',
      EndDate: '',
      Places: '',
      Themes: '',
     // Ratiing: '',
      nbrParticipant: '',
      MaxNbrParticipant: ''
    };


  }
  /* loadEvents(): void {
     const authToken = localStorage.getItem('eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ0ZWF6dXNlciIsImlhdCI6MTY4MjcyOTM3NCwiZXhwIjoxNjgyNzQ3Mzc0fQ.K3fHUkqQGUNCCKA4TJFdEYOsp9ueQ7nJ5TGK8DAO_gE');
     const headers = new HttpHeaders().set('Authorization', `Bearer ${authToken}`);
     this.eventService.getAllEvents(headers).subscribe(
       (events: Event[]) => {
         this.events = events;
       },
       (error: any) => {
         console.log(error);
       }
     );
   }
 */

  onSelect(event: Event): void {
    this.selectedEvent = event;
  }



  /*
  createEvent(events: any): void {
    const authToken = localStorage.getItem('eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ0ZWF6dXNlciIsImlhdCI6MTY4MzAyOTQ1OSwiZXhwIjoxNjgzMDQ3NDU5fQ.tbJZmvsbKmm6AiHtvnHBvFQBALz6JshBrh-GDwrgiz8');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${authToken}`);
    this.http.post<Event>('http://localhost:8097/Post', event, { headers }).subscribe(
      (createdEvent: Event) => {
        this.events.push(createdEvent);
      },
      (error: any) => {
        console.log(error);
      }
    );
  } */
  onUpdate(event: Event): void {
    this.eventService.updateEvent(event).subscribe(
      (event: Event) => {
        const index = this.events.findIndex((e: Event) => e.idEvents === event.idEvents);
        if (index !== -1) {
          this.events[index] = event;
        }
      },
      (error: any) => {
        console.log(error);
      }
    );
  }

  onDelete(event: Event): void {
    this.eventService.deleteEvent(event.idEvents).subscribe(
      () => {
        this.events = this.events.filter((e: Event) => e.idEvents !== event.idEvents);
        this.selectedEvent = undefined;
      },
      (error: any) => {
        console.log(error);
      }
    );
  }

  ngOnDestroy(): void {
    this.editor.destroy();
  }

  public onSubmit(index:number){
    this.activeIndex = index
  }

  public onBack(index:number){
    this.activeIndex = index

  }

  previousStep() {
    if (this.activeIndex > 0) {
      this.activeIndex--;
    }
  }

  nextStep() {
    this.activeIndex++;
  }
 /* getAllEvents(headers: HttpHeaders): Observable<Event[]> {
    return this.http.get<Event[]>('http://localhost:8097/GetAllEvents', { headers });
  }
*/
  getAllEvents(){
    this.eventService.getAllEvents().subscribe(res => this.listEvents = res)
  }
  /*
  addEvent(event: Event): void {
    this.eventService.createEvent(event).subscribe(
      (event: Event) => {
        this.events.push(event);
      },
      (error: any) => {
        console.log(error);
      }
    );
  }
*/

/*

  addEvent(event: Event): void {
    // Try to parse the id string to a Long
    try {
      event.idEvents = Long.fromString(event.idEvents.toString());
    } catch (e) {
      console.log("Failed to parse id to Long: " + event.idEvents);
      // Handle the error, such as throwing an exception or returning a default value
      return;
    }
    this.eventService.createEvent(event).subscribe(
      (event: Event) => {
        this.events.push(event);
      },
      (error: any) => {
        console.log(error);
      }
    );
}
 */

  addEvent(event: any){
    console.log('Data being passed to backend:', event);
    this.eventService.addEvent(event).subscribe(() => {
      this.getAllEvents();
      this.form = false;
    });
  }





  saveAndRedirect() {
    this.addEvent(this.events);
    this.router.navigate(['course/course-list']);
  }


}
