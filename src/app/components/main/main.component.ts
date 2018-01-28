import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor( public router: Router,  public auth: AuthService) { }

  ngOnInit() {
  }


  createEntry() {
    this.auth.login();
    // this.router.navigate(['/createEntry']);
  }
}
