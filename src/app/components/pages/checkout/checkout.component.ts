import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { StripeService } from 'src/app/services/Restaurant/StripeService';
import { routes } from 'src/app/shared/service/routes/routes';
import { FactureService } from 'src/app/services/Restaurant/factureService';
import { switchMap } from 'rxjs';
import { FactureR } from 'src/app/models/facture';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
  public routes = routes;
  httpClient: any;
  public fID: any;

  constructor(private stripeService: StripeService, private facture: FactureService,  private route: ActivatedRoute,
    private router: Router ) { }

  ngOnInit(): void {
    this.facture.getFactureRById;
    this.fID = this.route.snapshot.paramMap.get('id');
    console.log(this.fID);
  }


  public async generateQRCodeAndSendEmail() {
    if (!this.fID) {
      console.log("Error getting invoice id");
      return;
    }
    const factureid = await this.facture.getFactureRById(this.fID);
    console.log(factureid);
   factureid.pipe(
      switchMap(facture => this.stripeService.getQRCode(this.fID))
    ).subscribe(
      response => {
        console.log('QR code généré et envoyé par email avec succès', response);
      },
      error => {
        console.log('Erreur lors de la génération du QR code et de l\'envoi par email', error);
      }
    );
  }







 //public generateQRCodeAndSendEmail() {
 // this.stripeService.getQRCode(5).subscribe(
 //   response => {
 //     console.log('QR code généré et envoyé par email avec succès', response);
  //  },
  //  error => {
  //    console.log('Erreur lors de la génération du QR code et de l\'envoi par email', error);
  //  }
  //);
//}

  public pay() {
    if (!this.fID) {
      console.log("Error getting invoice id");
      return;
    }
    this.stripeService.pay(this.fID).subscribe(
      response => {
        console.log('Paiement effectué avec succès',response);
      },
      error => {
        console.log('Erreur lors du paiement', error);
      }
    );
  }

}




