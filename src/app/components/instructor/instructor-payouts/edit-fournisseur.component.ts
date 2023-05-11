import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Fournisseur } from 'src/app/models/fournisseur';
import { FournisseurService} from "../../../services/fournisseur/fournisseur.service";


@Component({
  selector: 'app-edit-fournisseur',
  templateUrl: './edit-fournisseur.component.html',
  styleUrls: ['./edit-fournisseur.component.css']
})
export class EditFournisseurComponent implements OnInit {

  /*to read the id parameter*/
  idFourn:any
  showAlert = false
  fournisseur = new Fournisseur()

  constructor(private route:ActivatedRoute, private fournisseurService:FournisseurService) { } /*dependecy used to read the id parameter*/



  ngOnInit(): void {
    this.idFourn = this.route.snapshot.params['idFourn']

    this.fournisseurService.getFournisseur(this.idFourn).subscribe((response: any) => {
        this.fournisseur = response
        console.log(response)

      })
  }

  editFournisseur() {
    this.fournisseurService.editFournisseur(this.fournisseur,this.idFourn).subscribe((response) => {
      this.showAlert = true
      console.log(response)
    });


  }
  closeAlert() {
    this.showAlert = false
  }

}
