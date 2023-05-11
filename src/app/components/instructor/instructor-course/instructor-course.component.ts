import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { DataService } from 'src/app/shared/service/data/data.service';
import { Sort } from '@angular/material/sort';
import { routes } from 'src/app/shared/service/routes/routes';
import { Plat } from 'src/app/models/plat';
import { PlatService } from 'src/app/services/Restaurant/plat.service';

@Component({
  selector: 'app-instructor-course',
  templateUrl: './instructor-course.component.html',
  styleUrls: ['./instructor-course.component.scss']
})
export class InstructorCourseComponent implements OnInit {
  public routes = routes;
  public instructorCourse: any = [];
  public searchDataValue = '';
  dataSource!: MatTableDataSource<any>;
  public myCourse : any = [];

  public listPlats : any = [];
  form : boolean = false;
   plat!: Plat;
   closeResult! : string;



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
  selected = '1';
  public selectedPage: number = 0;

  pages: number[] = [];



  constructor(private data: DataService, private ps : PlatService) {
   // this.myCourse = this.data.myCourse;
        this.listPlats= this.ps.getAllPlats;
  }

  ngOnInit(): void {
    //this.getinstructorCourse();
    this.getAllPlats();;


    this.plat = {
      idPlat: null,
      typePlat: null,
      nomMenu: null,
      imagePlat: null,
      specificationMenu: null,
      nutritionalInformation: null,
      calories:  null,
      protein:  null,
      fat:  null,
      carbohydrates:  null,
    }
  }

 /* getAllPlats(){
    this.ps.getAllPlats().subscribe(res => this.listPlats = res)
  } */

/*
  private getinstructorCourse(): void {
    this.instructorCourse = [];
    this.serialNumberArray = [];

    this.data.instructorCourseList().subscribe((res: any) => {
      this.totalData = res.totalData;
      res.data.map((res: any, index: number) => {
        let serialNumber = index + 1;
        if (index >= this.skip && serialNumber <= this.limit) {
          res.id = serialNumber;
          this.instructorCourse.push(res);
          this.serialNumberArray.push(serialNumber);
        }
      });
         this.dataSource = new MatTableDataSource<any>(this.instructorCourse);
    this.calculateTotalPages(this.totalData, this.pageSize);
    });


  }

*/


public deletePlat(idPlat: any) {
  if (confirm("Are you sure you want to delete this plat?")) {
    this.ps.deletePlat(idPlat).subscribe(() => {
      this.getAllPlats();
    });
  }
}

private getAllPlats(): void {
  this.listPlats = [];

  this.ps.getAllPlats().subscribe((res: any) => {
    res.map((res: any, index: number) => {
      let serialNumber = index + 1;
      if (index >= this.skip && serialNumber <= this.limit) {
        res.id = serialNumber;
        this.listPlats.push(res);
      }
    });
    this.dataSource = new MatTableDataSource<any>(this.listPlats);
    this.calculateTotalPages(this.listPlats.length, this.pageSize);
  });
}

  public sortData(sort: Sort) {
    const data = this.instructorCourse.slice();

    if (!sort.active || sort.direction === '') {
      this.instructorCourse = data;
    } else {
      this.instructorCourse = data.sort((a: any, b: any) => {
        const aValue = (a as any)[sort.active];
        const bValue = (b as any)[sort.active];
        return (aValue < bValue ? -1 : 1) * (sort.direction === 'asc' ? 1 : -1);
      });
    }
  }

  public searchData(value: any): void {
    this.dataSource.filter = value.trim().toLowerCase();
    this.instructorCourse = this.dataSource.filteredData;
  }

public getMoreData(event: string): void {
    if (event == 'next') {
      this.currentPage++;
      this.pageIndex = this.currentPage - 1;
      this.limit += this.pageSize;
      this.skip = this.pageSize * this.pageIndex;
      this.getAllPlats();
    } else if (event == 'previous') {
      this.currentPage--;
      this.pageIndex = this.currentPage - 1;
      this.limit -= this.pageSize;
      this.skip = this.pageSize * this.pageIndex;
      this.getAllPlats();
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
    this.getAllPlats();
    }

    moveToPage1(): void {
      const input = (document.getElementById('moveToPageInput') as HTMLInputElement).value;
      const page = parseInt(input);

      if (page && page > 0 && page <= this.totalPages) {
        this.currentPage = page;
        this.getAllPlats();
      }
    }

  public changePageSize(): void {
    this.pageSelection = [];
    this.limit = this.pageSize;
    this.skip = 0;
    this.currentPage = 1;
    this.getAllPlats();
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


    previousPage(): void {
      if (this.currentPage > 1) {
        this.currentPage--;
        this.getAllPlats();
      }
    }

    setPage(page: number): void {
      if (this.currentPage !== page) {
        this.currentPage = page;
        this.getAllPlats();
      }
    }
}
export interface pageSelection {
  skip: number;
  limit: number;
}
