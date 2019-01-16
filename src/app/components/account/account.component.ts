import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Account } from '../../models/account';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {

  @Input() accountsData: Account[];
  @Output() accountSelection = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onChange(event) {
    this.accountSelection.emit(event);
  }
}
