import { Component, OnInit, Input } from '@angular/core';
import { Field } from "../../model/field.model";

@Component({
  selector: 'app-tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.css']
})
export class TileComponent implements OnInit {
  @Input() field:Field
  constructor() {
  }

  ngOnInit() {
  }

}
