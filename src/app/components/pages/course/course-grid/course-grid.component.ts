import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/shared/service/data/data.service';
import { MatTableDataSource } from '@angular/material/table';
import { Sort } from '@angular/material/sort';
import { routes } from 'src/app/shared/service/routes/routes';
import {EventService} from "../../../../services/events.services";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Event} from "../../../../models/events.model";
import { Router } from '@angular/router';
import {Observable} from "rxjs";
import {AuthService} from "../../../../services/auth.services";

@Component({
  selector: 'app-course-grid',
  templateUrl: './course-grid.component.html',
  styleUrls: ['./course-grid.component.scss']
})
export class CourseGridComponent implements OnInit {
  public routes = routes;
  public searchDataValue = '';
  dataSource!: MatTableDataSource<any>;
  private apiUrl = 'http://localhost:8097';

  // pagination variables
  public lastIndex: number = 0;
  public pageSize: number = 10;
  public totalData: any = 0;
  public skip: number = 0;
  public limit: number = this.pageSize;
  public pageIndex: number = 0;
  public serialNumberArray: Array<any> = [];
  public currentPage: number = 1;
  public pageNumberArray: Array<any> = [];
  public pageSelection: Array<pageSelection> = [];
  public totalPages: number = 0;
  showReminderButton = false;
  public courseGrid: any = [];
  selected ='1'
  constructor(private data: DataService,private eventService: EventService, private http: HttpClient,private router: Router,private authService: AuthService) {
    // this.courseGrid = this.DataService.courseGrid;
    this.events = [];
  }
  selectedEvent: Event | undefined;
  myCourse: any;
  events: any;
  listEvents : any;
  form : boolean = false;
//  constructor(private eventService: EventService, private http: HttpClient) { }
  /* form = new FormGroup({
     editorContent: new FormControl('', Validators.required()),
   });*/
  Event!: Event;
  ngOnInit(): void {
    // this.editor = new Editor();
    this.getAllEvents();
    this.onUpdate(this.Event);
    //this.addEvent(this.events);;
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
  /*
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

*/
  onUpdate(event: Event): void {
    if (this.events) {
      if (event) {
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
      } else {
        console.log('Invalid event object');
      }
    } else {
      console.log('Events list is null or undefined');
    }
  }
  /*
    onUpdate(event : Event){
      this.eventService.updateEvent(event).subscribe();
    } */
  /* onDelete(event: Event): void {
     this.eventService.deleteEvent(event.idEvents).subscribe(
       () => {
         this.events = this.events.filter((e: Event) => e.idEvents !== event.idEvents);
         this.selectedEvent = undefined;
       },
       (error: any) => {
         console.log(error);
       }
     );
   }*/
  onDelete(idEvents : any){
    this.eventService.deleteEvent(idEvents).subscribe(() => this.getAllEvents())
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
    this.eventService.addEvent(event).subscribe(() => {
      this.getAllEvents();
      this.form = false;
    });
  }






  private getcourseGrid(): void {
    this.courseGrid = [];
    this.serialNumberArray = [];

    this.data.gridCourseList().subscribe((res: any) => {
      this.totalData = res.totalData;
      res.data.map((res: any, index: number) => {
        let serialNumber = index + 1;
        if (index >= this.skip && serialNumber <= this.limit) {
          res.id = serialNumber;
          this.courseGrid.push(res);
          this.serialNumberArray.push(serialNumber);
        }
      });
      this.dataSource = new MatTableDataSource<any>(this.courseGrid);
      this.calculateTotalPages(this.totalData, this.pageSize);
    });


  }
  public sortData(sort: Sort) {
    const data = this.courseGrid.slice();

    if (!sort.active || sort.direction === '') {
      this.courseGrid = data;
    } else {
      this.courseGrid = data.sort((a: any, b: any) => {
        const aValue = (a as any)[sort.active];
        const bValue = (b as any)[sort.active];
        return (aValue < bValue ? -1 : 1) * (sort.direction === 'asc' ? 1 : -1);
      });
    }
  }

  public searchData(value: any): void {
    this.dataSource.filter = value.trim().toLowerCase();
    this.courseGrid = this.dataSource.filteredData;
  }

  public getMoreData(event: string): void {
    if (event == 'next') {
      this.currentPage++;
      this.pageIndex = this.currentPage - 1;
      this.limit += this.pageSize;
      this.skip = this.pageSize * this.pageIndex;
      this.getcourseGrid();
    } else if (event == 'previous') {
      this.currentPage--;
      this.pageIndex = this.currentPage - 1;
      this.limit -= this.pageSize;
      this.skip = this.pageSize * this.pageIndex;
      this.getcourseGrid();
    }
  }

  public moveToPage(pageNumber: number): void {
    this.currentPage = pageNumber;
    this.skip = this.pageSelection[pageNumber - 1].skip;
    this.limit = this.pageSelection[pageNumber - 1].limit;
    if (pageNumber > this.currentPage) {
      this.pageIndex = pageNumber - 1;
    } else if (pageNumber < this.currentPage) {
      this.pageIndex = pageNumber + 1;
    }
    this.getcourseGrid();
  }
  navigateToAddCourse() {
    this.router.navigate(['/pages/course/course-details']);
  }
  public changePageSize(): void {
    this.pageSelection = [];
    this.limit = this.pageSize;
    this.skip = 0;
    this.currentPage = 1;
    this.getcourseGrid();
  }

  private calculateTotalPages(totalData: number, pageSize: number): void {
    this.pageNumberArray = [];
    this.totalPages = totalData / pageSize;
    if (this.totalPages % 1 != 0) {
      this.totalPages = Math.trunc(this.totalPages + 1);
    }
    for (var i = 1; i <= this.totalPages; i++) {
      let limit = pageSize * i;
      let skip = limit - pageSize;
      this.pageNumberArray.push(i);
      this.pageSelection.push({ skip: skip, limit: limit });
    }
  }
  toggleClass(data: any) {
    data.active = !data.active;
  }
  registerForEvent(eventId: number): void {
    this.authService.getUserId().subscribe(userId => {
      if (userId) {
        this.authService.registerUserForEvent(eventId, Number(userId)).subscribe(result => {
          console.log(result);
        });
      } else {
        console.log('User not logged in.');
      }
    });
  }
  sendSmsToRegisteredUsers(eventId: number) {
    const url = `http://localhost:8097/15/send-sms`;
    this.http.get(url).subscribe(
      () => {
        // Handle successful response here
        console.log('Reminder SMS sent successfully');
      },
      (error) => {
        // Handle error here
        console.error('Error sending reminder SMS:', error);
      }
    );
  }
  confirmParticipation(data: any) {
    const confirm = window.confirm('Are you sure you want to participate?');
    if (confirm) {
      this.showReminderButton = true;
      this.registerForEvent(data.id);
    }
  }
  downloadStatistics() {
    this.http.get('/api/events/statistics', { responseType: 'blob' })
      .subscribe((blob: Blob) => {
        const link = document.createElement('a');
        link.href = window.URL.createObjectURL(blob);
        link.download = 'event_statistics.pdf';
        link.click();
      });
  }
}

export interface pageSelection {
  skip: number;
  limit: number;
}
