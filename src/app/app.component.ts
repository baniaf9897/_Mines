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
  game:Gameboard;
  subscription;

  //inject service 
  constructor(private gameService:GameService){
    
    this.subscription = this.gameService.gameOver.subscribe((isGameOver)=>{
      if(isGameOver){
        this.startGame();
      }
    })
    
  }
  
  ngOnInit(){
    this.startGame();
  }
  
  startGame(){
    this.game = this.gameService.createGame(0,2,2)
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

}
