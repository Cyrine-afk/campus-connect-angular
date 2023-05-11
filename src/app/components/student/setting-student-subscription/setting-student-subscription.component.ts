import { Component, OnInit } from '@angular/core';
import { SubscriptionsService } from 'src/app/services/subscriptions.service';
import { DataService } from 'src/app/shared/service/data/data.service';
import { routes } from 'src/app/shared/service/routes/routes';
import { Subscription } from 'src/app/models/subscriptions.model';
import { Observable } from 'rxjs';
import { Chambre } from 'src/app/models/chambre.model';


@Component({
  selector: 'app-setting-student-subscription',
  templateUrl: './setting-student-subscription.component.html',
  styleUrls: ['./setting-student-subscription.component.scss']
})
export class SettingStudentSubscriptionComponent implements OnInit {
  disponibiliteFilter: string = ''; // Default filter value is empty
  public chambresDisponible : Chambre[] = [];
  public chambersLowerThanPrice: Chambre[] = [];
  public routes = routes;
  public settingStudentActive: any = [];
  public settingStudentExpired: any = [];
  public subs: Subscription[] = [];
  public showForm = false;
  public showAddForm = false;
  public selectedSub: Subscription[] | any;
  showResultTable: boolean = false;
  showChambreTable : boolean = false;
  public maxPrice : number = 0;
  constructor(private DataService: DataService, private subscriptionService: SubscriptionsService) {
    this.settingStudentActive = this.DataService.settingStudentActive;
    this.settingStudentExpired = this.DataService.settingStudentExpired;
    this.subscriptionService.getAbonnements().subscribe(subs => {
      this.subs = subs;
    });


  }
  modifySub() {
    if (this.selectedSub) {
      this.subscriptionService.modifySub(this.selectedSub).subscribe(() => {
        this.closeForm();
        console.log('Sub updated successfully');
      });
    }
  }
  
  addSub() {
    this.subscriptionService.addSub(this.selectedSub).subscribe(() => {
      this.closeAddForm();
      console.log('Sub updated successfully');
    });
    
  }
  deleteSub(id: any) {
    this.subscriptionService.deleteSub(id).subscribe(() => {
      this.subs = this.subs.filter(v => v.id != id);
    })
  }
  closeForm() {
    // Reset the form and hide it
    this.subs;
    this.showForm = false;
  }

  openForm(sub: Subscription) {
    this.selectedSub = { ...sub }; // Create a copy of the selected sub
    this.showForm = true; // Show the form
  }
  closeAddForm() {
    // Reset the form and hide it
    this.subs;
    this.showAddForm = false;
  }

  openAddForm() {
    this.selectedSub = new Subscription(0, new Date(), new Date(), 0, true, true);
    this.showAddForm = true;
  }
  
  ngOnInit(): void {
    this.showForm = false
    this.showAddForm = false; 
  }

  loadChambersLowerThanPrice() {
    this.subscriptionService.findChambersLowerThanPrice(this.maxPrice)
      .subscribe(
        (response: Chambre[]) => {
          this.chambersLowerThanPrice = response;
          console.log(this.chambersLowerThanPrice);
          this.showResultTable = true; // Set the flag to show the result table
        },
        (error) => {
          console.error(error);
        }
      );
  }
  
loadChambresDisponibles() {
  this.subscriptionService.getChambresDisponibles(true).subscribe(
    (response: Chambre[]) => {
      this.chambresDisponible = response;
      this.showChambreTable = true;
    },
    (error) => {
      console.error(error);
    }
  );
}
  
}
