import { Component, OnInit, Input } from '@angular/core';
import { Row } from "../../model/row.model";

@Component({
  selector: 'app-row',
  templateUrl: './row.component.html',
  styleUrls: ['./row.component.css']
})
export class RowComponent implements OnInit {
  @Input() row:Row
  constructor() { }

  ngOnInit() {
  }

}
