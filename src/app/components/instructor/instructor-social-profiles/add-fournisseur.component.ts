import { Component, OnInit } from '@angular/core';
import { Fournisseur } from 'src/app/models/fournisseur';
import { FournisseurService} from "../../../services/fournisseur/fournisseur.service";
import { SpecialtyFourn, SpecialtyFourn2LabelMapping } from 'src/app/models/specialty-fourn';

@Component({
  selector: 'app-add-fournisseur',
  templateUrl: './add-fournisseur.component.html',
  styleUrls: ['./add-fournisseur.component.css']
})
export class AddFournisseurComponent implements OnInit {

  public specialtyFournLabelMapping = SpecialtyFourn2LabelMapping;
  //public specialtyFourn = Object.values(SpecialtyFourn);
  public specialtyFourn = Object.values(SpecialtyFourn).filter(value => typeof value === 'number');

  fournisseur = new Fournisseur();
  showAlert=false; //the alert isn't going to be shown by default since we have set its value to false in here
  constructor(private fournisseurService: FournisseurService ) { }

  ngOnInit(): void {


  }
  saveFournisseur () {
    this.fournisseurService.addFournisseur(this.fournisseur).subscribe((response)=>{
      console.log(response); //because we just want to print sth

      //to clear the form's fields after hitting the save button
      this.fournisseur=new Fournisseur(); //assign a new reference (new reference => we will get all default values) so all will be replaced

      //to switch the alert's state to true once the save is successful, to show the success alert
      this.showAlert=true;
    });
  }

  //to reset the alert state to false once the close alert button is clicked
  closeAlert() {
    this.showAlert=false
  }



}
