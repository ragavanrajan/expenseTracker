import {Component, OnInit} from '@angular/core';
import {DataService} from '../../services/data.service';
import {Entries} from '../../models/Entries';
import {logging} from 'selenium-webdriver';
import Entry = logging.Entry;

@Component({
  selector: 'app-create-entry',
  templateUrl: './create-entry.component.html',
  styleUrls: ['./create-entry.component.css']
})
export class CreateEntryComponent implements OnInit {
  entries: Entries[];

  constructor(public dataService: DataService) {

  }

  ngOnInit() {
    this.entries = this.dataService.getEntries();
  }

  addExpense(entry: Entries) {
    // console.log(entry);
    this.dataService.addExpense(entry);
  }

  removeExpense(entry: Entries) {
    this.dataService.removeEntry(entry);
  }

}
