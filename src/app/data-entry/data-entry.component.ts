import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-data-entry',
  templateUrl: './data-entry.component.html',
  styleUrls: ['./data-entry.component.css']
})
export class DataEntryComponent implements OnInit {

  
  @Output() messageEvent = new EventEmitter<string>();

  constructor() {}

  ngOnInit() {
  }


}
