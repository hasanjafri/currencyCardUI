import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Ccy } from '../../models/ccy';

@Component({
  selector: 'app-ccy',
  templateUrl: './ccy.component.html',
  styleUrls: ['./ccy.component.scss']
})
export class CcyComponent implements OnInit {

  @Input() ccyData: Ccy[];
  @Output() ccySelection = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onChange(event) {
    this.ccySelection.emit(event);
  }
}
