import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Row } from "../../model/row.model";

@Component({
  selector: 'app-row',
  templateUrl: './row.component.html',
  styleUrls: ['./row.component.css']
})
export class RowComponent implements OnInit,OnChanges {
  @Input() row:Row
  fields = new Array()
  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes){
    if(changes.row){
      this.fields = this.row.fields
    }
  }

}
