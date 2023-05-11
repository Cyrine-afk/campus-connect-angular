import { Component, OnInit } from '@angular/core';
import { Fournisseur } from 'src/app/models/fournisseur';
import { FournisseurService } from 'src/app/services/fournisseur/fournisseur.service';
import { SpecialtyFourn, SpecialtyFourn2LabelMapping } from 'src/app/models/specialty-fourn';
import * as jspdf from 'jspdf';
import html2canvas from 'html2canvas';
import {map} from "rxjs";
import {userAssigned} from "../../../models/userAssigned.model";
import {DashboardService} from 'src/app/services/dashboardService.service'
@Component({
  selector: 'app-fournisseur-list',
  templateUrl: './fournisseur-list.component.html',
  styleUrls: ['./fournisseur-list.component.css']
})
export class FournisseurListComponent implements OnInit {

  assignedResponses:any;
  page: number = 1;
  count: number = 0;
  tableSize: number = 5;
  tableSizes: any = [3, 6, 9, 12];

  fournisseurs!: Fournisseur[]; //to get the list of the fournisseurs in it
  public searchTxt: Fournisseur['nomFourn'];
  constructor(private fournisseurService : FournisseurService, private dashboardService : DashboardService) { } //calling external API from service API

  signature: any;


  ngOnInit(): void {
    //at the time of loading, we want to call the API to get the fournisseur list
    this.getChambersAndUsersAssigned()
    this.fournisseurService.getAllFourniseurs().subscribe((response:any)=> {
      this.fournisseurs=response
    }); //API call + load API response (result) in this.fournisseur
    //the subscribe is because the return type of the getAllFournisseurs() function is post/get/put/delete, so once it's ready the subscribe function is going to call the get/post/put/delete
  }

  deleteFournisseur(idFourn: any) {
    this.fournisseurService.deleteFournisseur(idFourn).subscribe((response:any)=>{
      console.log(response);
      this.fournisseurs = this.fournisseurs.filter(f => {
        return f.idFourn != idFourn;
      });
    });
  }



  onExportPdf() {

    const img = new Image();

    html2canvas(document.getElementById("tableFourn")!).then(canvas => {


      const contentDataURL = canvas.toDataURL('image/png')
      let pdf = new jspdf.default();
      var width = pdf.internal.pageSize.getWidth();
      var height = canvas.height * width / canvas.width;
      pdf.addImage(contentDataURL, 'PNG',8,50,width,height),


      // Add title text
    pdf.setFontSize(20);
    pdf.setFont('helvetica', 'bold');
    pdf.text('List of Fournisseurs - CampusConnect', 50, 20);

    // Add image
    pdf.addImage(img, 'PNG', 2, 10, 45, 25);


      pdf.save('FournisseurPDF.pdf');

    })
    img.crossOrigin = '';
       img.src = '../../assets/img/CampusConnect2.png';
  }


  onTableDataChange(event: any) {
    this.page = event;
    this.fournisseurService.getAllFourniseurs().subscribe((response:any)=> {
      this.fournisseurs=response
    });
  }
  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.fournisseurService.getAllFourniseurs().subscribe((response:any)=> {
      this.fournisseurs=response
    });
  }

  getChambersAndUsersAssigned() {
    this.dashboardService.getChambersAndUsersAssigned()
      .pipe(
        map((response: userAssigned[]) => response.map((item: userAssigned) => ({
          id: item.id,
          bloc: item.bloc
        })))
      )
      .subscribe((response: any) => {
        console.log(response);
        this.assignedResponses = response;
      });

  }
}
