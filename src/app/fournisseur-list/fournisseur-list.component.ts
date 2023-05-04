import { Component, OnInit } from '@angular/core';
import { Fournisseur } from '../model/fournisseur';
import { FournisseurService } from '../services/fournisseur/fournisseur.service';
import { SpecialtyFourn, SpecialtyFourn2LabelMapping } from '../model/specialty-fourn';

@Component({
  selector: 'app-fournisseur-list',
  templateUrl: './fournisseur-list.component.html',
  styleUrls: ['./fournisseur-list.component.css']
})
export class FournisseurListComponent implements OnInit {

  

  fournisseurs!: Fournisseur[]; //to get the list of the fournisseurs in it
  public searchTxt: Fournisseur['nomFourn'];
  constructor(private fournisseurService : FournisseurService) { } //calling external API from service API

  ngOnInit(): void {
    //at the time of loading, we want to call the API to get the fournisseur list
    this.fournisseurService.getAllFourniseurs().subscribe((response:any)=> {
      this.fournisseurs=response; 
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

}
