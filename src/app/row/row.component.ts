import { Component, OnInit, Input, OnChanges, Output } from '@angular/core';
import { Row } from "../../model/row.model";
import { EventEmitter } from 'protractor';
import { GameService } from '../game.service';
import { TileComponent } from '../tile/tile.component';

@Component({
  selector: 'app-row',
  templateUrl: './row.component.html',
  styleUrls: ['./row.component.css']
})
export class RowComponent implements OnInit,OnChanges {
  @Input() row:Row;
   fields = new Array();
  constructor(private gameService:GameService) { }

  ngOnInit() {
  }

  ngOnChanges(changes){
    if(changes.row){
      this.fields = this.row.fields;
    }
  }

  handleClick(tile){
    tile.isRevealed = true; 
    this.gameService.updateGame(tile);
  }
  onRightClick($event,tile){
    $event.preventDefault();
    
    tile.isMarked = !tile.isMarked;
  }

}
