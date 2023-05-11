import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/shared/service/data/data.service';
import { routes } from 'src/app/shared/service/routes/routes';
import { FactureService } from 'src/app/services/Restaurant/factureService';
import { FactureR } from 'src/app/models/facture';

@Component({
  selector: 'app-setting-student-invoice',
  templateUrl: './setting-student-invoice.component.html',
  styleUrls: ['./setting-student-invoice.component.scss']
})
export class SettingStudentInvoiceComponent implements OnInit {
  public routes = routes;
  public settingStudentInvoice : any = [];

  listFactures : any;
  form : boolean = false;
   facture!: FactureR;

   factures!: FactureR[];


  constructor(private DataService: DataService, private ps: FactureService) {
    this.settingStudentInvoice = this.DataService.settingStudentInvoice;
    }

  ngOnInit(): void {
    this.getAllfactures();;

  }
  getAllfactures(): void {
    this.ps.getAllfactures().subscribe(
      (data: FactureR[]) => {
        this.factures = data;
        console.log(data);
      },
      error => {
        console.log(error);
      }
    );
  }
}
