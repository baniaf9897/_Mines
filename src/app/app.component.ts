import { Component,OnInit } from '@angular/core';
import { Gameboard } from '../model/gameboard.model';
import { GameService } from './game.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Mines';
  game:Gameboard
  length
  //inject service 
  constructor(private gameService:GameService){}
  
  ngOnInit(){
    this.startGame();
  }
  
  startGame(){
    this.game = this.gameService.createGame(10,10,10)
    //starting game here
    // calling service for distributing mines and creating game
  }

}
