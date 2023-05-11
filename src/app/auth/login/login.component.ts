import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { DataService } from 'src/app/shared/service/data/data.service';
import { Router } from '@angular/router';
import { routes } from 'src/app/shared/service/routes/routes';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../services/auth.services";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  /*
  public routes = routes;
  password= 'password';
  show = true;
formGroup:FormGroup;
  public welcomeLogin: any = [];

  public welcomeLoginOwlOptions: OwlOptions = {
    margin: 25,
    nav: true,
    loop: true,
    responsive: {
        0: {
          items: 1
        },
        768 : {
          items: 3
        },
        1170: {
          items: 4
        }
    },
  };

  constructor(private DataService: DataService, public router: Router) {
    this.welcomeLogin = this.DataService.welcomeLogin;
  }

  ngOnInit(): void {}

  onClick() {
    if (this.password === 'password') {
      this.password = 'text';
      this.show = false;
    } else {
      this.password = 'password';
      this.show = true;
    }
  }
  directIndex() {
    this.router.navigate(['/instructor/instructor-dashboard']);
  }
  */

  public routes = routes;
  password = 'password';
  show = true;
  formGroup: FormGroup;
  public welcomeLogin: any = [];

  public welcomeLoginOwlOptions: OwlOptions = {
    margin: 25,
    nav: true,
    loop: true,
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 3
      },
      1170: {
        items: 4
      }
    },
  };

  constructor(private authService: AuthService, private DataService: DataService, public router: Router) {
    this.formGroup = new FormGroup({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    })
  }

  ngOnInit() {
    this.initForm();
  }

  //hedhi ena zedtha
  initForm() {
    this.formGroup = new FormGroup({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    })
  }

  onClick() {
    if (this.password === 'password') {
      this.password = 'text';
      this.show = false;
    } else {
      this.password = 'password';
      this.show = true;
    }
  }

  directIndex() {
    this.router.navigate(['/instructor/instructor-dashboard']);
  }


  loginProcess() {
    console.log("loginProcess() called");
    if (this.formGroup.valid) {
      console.log("formGroup is valid");
      this.authService.signin(this.formGroup.value).subscribe(result => {
        console.log("signin result:", result);
        if (result.success) {
          console.log(result);
          // Redirect the user to the home page upon successful login
          this.router.navigate(['/home-three']);
        } else {
          alert(result.message);
        }
      });
    } else {
      console.log("formGroup is invalid");
    }
  }
  navigateToAdduser() {
    this.router.navigate(['/home-three']);
    this.loginProcess();
  }
}