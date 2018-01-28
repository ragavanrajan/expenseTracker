import {Injectable} from '@angular/core';
import {Entries} from '../models/Entries';

@Injectable()
export class DataService {
  entries: Entries[];

  constructor() {

   /* this.entries = [
      {
        No: 1,
        Date: '21-Jan-18',
        Amount: 56,
        Category: 'Clothing',
        Info: 'NA',
        Comments: 'NA'
      },
      {
        No: 2,
        Date: '22-Jan-18',
        Amount: 56,
        Category: 'Clothing',
        Info: 'NA',
        Comments: 'NA'
      },
      {
        No: 3,
        Date: '23-Jan-18',
        Amount: 56,
        Category: 'Electronics',
        Info: 'NA',
        Comments: 'NA'
      }
    ];*/
  }

  getEntries() {

    if (localStorage.getItem('entries') === null) {
      this.entries = [];
    } else {
      this.entries = JSON.parse(localStorage.getItem('entries'));
    }

    return this.entries;
  }

// Add Question to LS
  addExpense(entry: Entries){
    this.entries.unshift(entry);
    // Init local var
    let entries;
    if (localStorage.getItem('entries') === null) {
      entries = [];
      // Push new question
      entries.unshift(entry);
      // Set new array to LS
      localStorage.setItem('entries', JSON.stringify(entries));
    } else {
      entries = JSON.parse(localStorage.getItem('entries'));
      // Add new question
      entries.unshift(entry);
      // Re set LS
      localStorage.setItem('entries', JSON.stringify(entries));
    }

  }
// remove Question from LS
  removeEntry(entry: Entries) {
// Loop through the question and find the match and then splice it out of the array
    for (let i = 0; i < this.entries.length; i++) {
      if (entry == this.entries[i]) {
        this.entries.splice(i, 1);
        // Remove from LS if u refresh it will take out from LS
        localStorage.setItem('entries', JSON.stringify(this.entries));

      }
    }
  }

}
