import { Component, OnInit } from '@angular/core';
import { AuthService } from 'app/core/service/auth/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  condition = true;


  constructor(
    private auth: AuthService
  ) { }

  ngOnInit() {
    const signUpButton = document.getElementById('signUp');
    const signInButton = document.getElementById('signIn');
    const container = document.getElementById('container');


    signUpButton.addEventListener('click', () => {
      container.classList.add("right-panel-active");
    });


    signInButton.addEventListener('click', () => {
      container.classList.remove("right-panel-active");
    });
  }

  public login(data: string[]) {
    this.auth.SigninEmail(data[0], data[1]);
  }

  public signup(data: string[]) {
    this.auth.SignupEmail(data[0], data[1]);
  }

  public btnClick(): void {
    this.condition = !this.condition;
  }

}
