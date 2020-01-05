import { Component, OnInit } from '@angular/core';
import { AuthService } from 'app/core/service/auth/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor(private auth: AuthService) { }

  ngOnInit() {
  }

  logout() {
    // this.auth.signOut();
  }

}  
