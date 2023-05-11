import { Component, OnInit } from '@angular/core';
import { Ngo } from 'src/app/models/ngo';
import { NgoService } from '../../../services/ngo/ngo.service';


@Component({
  selector: 'app-add-ngo',
  templateUrl: './add-ngo.component.html',
  styleUrls: ['./add-ngo.component.css']
})
export class AddNgoComponent implements OnInit {


  ngo = new Ngo();
  showAlert=false;

  constructor(private ngoService: NgoService) { }

  ngOnInit(): void {
  }

  saveNgo () {
    this.ngoService.addNgo(this.ngo).subscribe((response)=>{
      console.log(response); //because we just want to print sth

      //to clear the form's fields after hitting the save button
      this.ngo=new Ngo(); //assign a new reference (new reference => we will get all default values) so all will be replaced

      //to switch the alert's state to true once the save is successful, to show the success alert
      this.showAlert=true;
    });
  }

  //to reset the alert state to false once the close alert button is clicked
  closeAlert() {
    this.showAlert=false
  }

}
