import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { EmitService } from 'app/core/service/emit/emit.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  condition = true;

  constructor(
    private emitService: EmitService
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

  public btnClick(): void {
    this.condition = !this.condition;
  }

}
