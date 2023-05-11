import { Component, OnInit } from '@angular/core';
import { DepenseService } from 'src/app/shared/service/depense/depense.service';
import { DataService } from 'src/app/shared/service/data/data.service';
import { routes } from 'src/app/shared/service/routes/routes';
import { Router } from '@angular/router';
import { ignoreElements } from 'rxjs';

@Component({
  selector: 'app-list-depenses',
  templateUrl: './list-depenses.component.html',
  styleUrls: ['./list-depenses.component.scss']
})
export class ListDepensesComponent implements OnInit {
  public routes = routes;
  public studentList: any = [];
  ngOnInit(): void {
    
  }

  depenses : any

  constructor(
    private depenseService :DepenseService,
    private DataService: DataService,
    private router : Router
  ){
    this.studentList = this.DataService.studentList
    this.getAll()
  }

  getAll(){
    this.depenseService.getDeoense().subscribe(res=>{
      console.log(res)
      this.depenses  =res
    })
  }

  edit(data:any){
    const url ='pages/depense/edit-depense/'+data.idDepense
    this.router.navigateByUrl(url)
    
  }

  delete(data:any){
    if(confirm('are you sure ?')){
      this.depenseService.deleteDepense(data.idDepense).subscribe(res=>{
        alert('depence deleted ')
        this.getAll()
      })
    }else{
      alert('server error')
    }

  }
}
