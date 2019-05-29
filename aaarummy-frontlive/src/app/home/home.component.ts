import { Component, OnInit } from '@angular/core';
import { ValidateService } from '../services/validate.service';
import { AuthService } from '../services/auth.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';
declare var UIkit: any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  username: String;
  contact: String;
  password: String;

  constructor(
    private validateService: ValidateService,
    private authService: AuthService,
    private flashMessage: FlashMessagesService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  onRegisterSubmit(){
    const user = {
      username: this.username,
      contact: this.contact,
      password: this.password
    }

    // Required Fields
    if(!this.validateService.validateRegister(user)){
      this.flashMessage.show(UIkit.notification({message: 'Please fill in all fields', status: 'danger', pos: 'top-right', timeout: 4000}));
      return false;
    }

  //Register user
    this.authService.registerUser(user).subscribe(data => {
      if(data.success){
        this.flashMessage.show(UIkit.notification({message: 'You are now registered and can now login', status: 'success', pos: 'top-right', timeout: 4000}));
        this.router.navigate(['/login']);
      } else {
        this.flashMessage.show(UIkit.notification({message: 'Something went wrong', status: 'danger', pos: 'top-right', timeout: 4000}));
        this.router.navigate(['/']);
      }
    });
  }
}
