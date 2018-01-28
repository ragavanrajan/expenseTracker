import {Component, OnInit, Output, EventEmitter} from '@angular/core';

import {Entries} from '../../models/Entries';


@Component({
  selector: 'app-add-entry',
  templateUrl: './add-entry.component.html',
  styleUrls: ['./add-entry.component.css']
})
export class AddEntryComponent implements OnInit {

  @Output() expenseAdded = new EventEmitter<Entries>();
  No: number;
  Date: string;
  Amount: number;
  Category: string;
  Info: string;
  Comments: string;


  constructor() {
  }

  ngOnInit() {
  }

  addExpense() {

    this.expenseAdded.emit({
      No: this.No, Date: this.Date, Amount: this.Amount, Category: this.Category,
      Info: this.Info, Comments: this.Comments
    });
    this.No = null;
    this.Date = null;
    this.Amount = null;
    this.Category = null;
    this.Info = null;
    this.Comments = null;

  }

}
