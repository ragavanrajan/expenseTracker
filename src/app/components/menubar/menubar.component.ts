import {Component, OnInit} from '@angular/core';
import {MenuItem} from 'primeng/primeng';
import {Router} from '@angular/router';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.css']
})
export class MenubarComponent implements OnInit {
  private items: MenuItem[];
  expenseView = false;
  mainView = true;

  constructor(private router: Router, public auth: AuthService) {
  }

  ngOnInit() {
    this.items = [
      {
        label: 'Expense Tracker', icon: 'fa fa-money',
        routerLink: ['/']
      }

    ];

  }

}
