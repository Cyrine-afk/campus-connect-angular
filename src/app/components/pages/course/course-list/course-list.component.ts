import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/shared/service/data/data.service';
import { MatTableDataSource } from '@angular/material/table';
import { Sort } from '@angular/material/sort';
import { routes } from 'src/app/shared/service/routes/routes';
import { ReclamationService } from 'src/app/shared/service/reclamation/reclamation.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss']
})
export class CourseListComponent implements OnInit {
  public routes = routes;
  selected ='1';
  public searchDataValue = '';
  dataSource!: MatTableDataSource<any>;
  repondre : any
  valeur : any

  // pagination variables
  public lastIndex: number = 0;
  public reclamations : any
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
  public courseList: any = [];
  public latestCourses: any = [];

  constructor(
    private data: DataService,
    private reclamationService : ReclamationService,
    private router : Router,
    private http : HttpClient
    ) {
    // this.courseList = this.data.courseList;
    this.latestCourses = this.data.latestCourses;
  }

  ngOnInit(): void {
    this.getcourseList();
    this.getReclamationList()
  }

  getReclamationList() :void {
    this.reclamationService.getReclamation().subscribe(res=>{
      this.reclamations = res
      console.log(this.reclamations)
    })
  }


filtre(event :any)
{
  this.reclamationService.getReclamation().subscribe(res=>{
    this.reclamations = res
    console.log(this.reclamations)
    if(event.target.value !== "ALL"){
      console.log(event)
  this.reclamations = this.reclamations.filter((i:any)=>{

    return i.type == event.target.value
  })
    }

  })}
  
  
  pdf(reclamation:any){
 this.http.get("http://localhost:8089/pdf" ,{ responseType: 'blob' } )
    .subscribe(
         data => {
            var file = new Blob([data], {type: 'application/pdf'});
            var fileURL = URL.createObjectURL(file);
            window.open(fileURL);
         }
     );
  }
  goToEdit(data : any){
    const url = 'pages/course/edit/'+data.idRec
    this.router.navigateByUrl(url)
  }

  nbReclamation(){
    this.http.get('http://localhost:8089/reclamation/nombresReclamationAujourdhui').subscribe(res=>{
      this.valeur = res
    })
  } 

  delete(rec : any){
    if(confirm('did you want to delete this reclamation ?')){
      this.reclamationService.delete(rec.idRec).subscribe(res=>{
        this.getReclamationList()
        alert('OK')
      },err => {
        alert('Error server')
      })
    }
  }

  reply(rec : any){
    const obj = {
      "description": this.repondre,
      "idResponse": rec.idRec
    }
    this.reclamationService.postRepondre(obj , rec.idRec).subscribe(res=>{
      this.repondre = null
      this.getReclamationList()
    })
  }


  private getcourseList(): void {
    this.courseList = [];
    this.serialNumberArray = [];

    this.data.allCourseList().subscribe((res: any) => {
      this.totalData = res.totalData;
      res.data.map((res: any, index: number) => {
        let serialNumber = index + 1;
        if (index >= this.skip && serialNumber <= this.limit) {
          res.id = serialNumber;
          this.courseList.push(res);
          this.serialNumberArray.push(serialNumber);
        }
      });
         this.dataSource = new MatTableDataSource<any>(this.courseList);
    this.calculateTotalPages(this.totalData, this.pageSize);
    });

 
  }
  public sortData(sort: Sort) {
    const data = this.courseList.slice();

    if (!sort.active || sort.direction === '') {
      this.courseList = data;
    } else {
      this.courseList = data.sort((a: any, b: any) => {
        const aValue = (a as any)[sort.active];
        const bValue = (b as any)[sort.active];
        return (aValue < bValue ? -1 : 1) * (sort.direction === 'asc' ? 1 : -1);
      });
    }
  }

  public searchData(value: any): void {
    this.dataSource.filter = value.trim().toLowerCase();
    this.courseList = this.dataSource.filteredData;
  }

public getMoreData(event: string): void {
    if (event == 'next') {
      this.currentPage++;
      this.pageIndex = this.currentPage - 1;
      this.limit += this.pageSize;
      this.skip = this.pageSize * this.pageIndex;
      this.getcourseList();
    } else if (event == 'previous') {
      this.currentPage--;
      this.pageIndex = this.currentPage - 1;
      this.limit -= this.pageSize;
      this.skip = this.pageSize * this.pageIndex;
      this.getcourseList();
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
    this.getcourseList();
    }

  public changePageSize(): void {
    this.pageSelection = [];
    this.limit = this.pageSize;
    this.skip = 0;
    this.currentPage = 1;
    this.getcourseList();
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
}
export interface pageSelection {
  skip: number;
  limit: number;
}
