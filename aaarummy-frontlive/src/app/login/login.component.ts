import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';
declare var UIkit: any;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  username: String;
  password: String;

  constructor(
    private authService: AuthService,
    private router: Router,
    private flashMessage: FlashMessagesService
  ) { }

  ngOnInit() {
  }

  onLoginSubmit(){
    const user = {
      username: this.username,
      password: this.password
    }

    this.authService.authenticateUser(user).subscribe(data => {
      if(data.success){
        this.authService.storeUserData(data.token, data.user);
        this.flashMessage.show(UIkit.notification({message: 'You are now logged in', status: 'success', pos: 'top-right', timeout: 4000}));
          this.router.navigate(['/lobby']);
      } else {
        this.flashMessage.show(UIkit.notification({message: data.msg, status: 'danger', pos: 'top-right', timeout: 4000}));
          this.router.navigate(['/login']);
      }
    });
  }
}
