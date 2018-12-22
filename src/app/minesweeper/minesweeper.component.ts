import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Row } from "../../model/row.model";
import { Field } from "../../model/field.model";
import { Gameboard } from '../../model/gameboard.model';

@Component({
  selector: 'app-minesweeper',
  templateUrl: './minesweeper.component.html',
  styleUrls: ['./minesweeper.component.css']
})
export class MinesweeperComponent implements OnInit, OnChanges {
  @Input() game:Gameboard;
  rows = new Array();

  ngOnChanges(changes){
    if(changes){
      this.rows = this.game.rows;
    }
  }
  constructor() {
   }

  ngOnInit() {
  }

}
