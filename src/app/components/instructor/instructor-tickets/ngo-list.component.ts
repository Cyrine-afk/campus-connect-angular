import { Component, OnInit } from '@angular/core';
import {Ngo} from 'src/app/models/ngo';
import { NgoService } from '../../../services/ngo/ngo.service';
@Component({
  selector: 'app-ngo-list',
  templateUrl: './ngo-list.component.html',
  styleUrls: ['./ngo-list.component.css']
})
export class NgoListComponent implements OnInit {

  page: number = 1;
  count: number = 0;
  tableSize: number = 2;
  tableSizes: any = [3, 6, 9, 12];

  ngos!: Ngo[];
  constructor(private ngoService : NgoService) { }

  ngOnInit(): void {
    this.ngoService.getAllNgos().subscribe((response:any)=> {
      this.ngos=response
    });
  }

  onTableDataChange(event: any) {
    this.page = event;
    this.ngoService.getAllNgos().subscribe((response:any)=> {
      this.ngos=response
    });
  }
  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.ngoService.getAllNgos().subscribe((response:any)=> {
      this.ngos=response
    });
  }

}
