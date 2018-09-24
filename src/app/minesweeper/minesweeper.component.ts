import { Component, OnInit, Input } from '@angular/core';
import { Row } from "../../model/row.model";
import { Field } from "../../model/field.model";
import { Gameboard } from '../../model/gameboard.model';

@Component({
  selector: 'app-minesweeper',
  templateUrl: './minesweeper.component.html',
  styleUrls: ['./minesweeper.component.css']
})
export class MinesweeperComponent implements OnInit {
  @Input() game:Gameboard
  
  row1 = [new Field(true,0,1),new Field(true,0,1),new Field(true,0,1),new Field(true,0,1)]
  row2 = [new Field(true,1,1)]
  rows = [this.row1,this.row2];
  
  constructor() { }

  ngOnInit() {
  }

}
