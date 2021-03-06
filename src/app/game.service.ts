import { Injectable } from '@angular/core';
import { Field } from "../model/field.model";
import { Row } from '../model/row.model';
import { Gameboard } from '../model/gameboard.model';
import {MatSnackBar} from '@angular/material';
import { MinesweeperComponent } from './minesweeper/minesweeper.component';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})

export class GameService {

  board: Field[] = new Array()
  gameboard:Gameboard
  length

  private subject = new BehaviorSubject<Boolean>(false);
  gameOver = this.subject.asObservable();

  constructor(public snackBar: MatSnackBar) { 
      this.gameboard = new Gameboard()
  }
  updateGame(field:Field){
        if(!field){
            console.warn("Error in updateGame");
        }
        else if(field.isMine){
           const snackRef = this.snackBar.open("Game Over","Retry");

            snackRef.onAction().subscribe((res)=>{
                this.subject.next(true);
           })
        }
        else{
            if(field.value == 0){
                
            }
            let hiddenFields =  [];

            this.gameboard.rows.forEach((row) =>{
                var fields = row.fields.filter((field) => {return !field.isRevealed});
                if(fields.length != 0)
                    hiddenFields.push(false);
            })

            if(hiddenFields.length == 0){
                const snackRef = this.snackBar.open("Winner","Retry");

                snackRef.onAction().subscribe((res)=>{
                    this.subject.next(true);
               }) 
            }
            

        }
  }
  recursiveZeroDetection(){

  }
  createGame(amountMines:number,col:number,row:number){
    this.gameboard = new Gameboard();
    this.board = [];
    this.distributeMines(amountMines,col,row)
    return this.gameboard;
  }

  private distributeMines(amountMines:number,col:number,row:number){       
    this.subject.next(false);
    //distributes mines
    while(amountMines > 0){
         let x = Math.floor(Math.random() * col) +1 
         let y = Math.floor(Math.random() * row) +1
         if(checkIfFieldAlreadyExist(x,y,this.board)){
            let mine = new Field(true,x,y)
            mine.value = 'X'
            this.board.push(mine)
            amountMines--
         }
    }
    //distribute fields
    for(let x = 1; x <= col; x++){
        for(let y = 1; y <= row; y++){
            if(checkIfFieldAlreadyExist(x,y,this.board)){
                let field = new Field(false,x,y)
                this.board.push(field)
            }
        }
    }

    let mines = this.board.filter( el => el.isMine === true) 
    let fields = this.board.filter( el => el.isMine === false)

    let neighbors: Field[] =  new Array()
    mines.forEach(mine => {
        neighbors.push(fields.find(el =>  el.x === (mine.x + 1) && el.y === mine.y ))
        neighbors.push(fields.find(el =>  el.x === (mine.x - 1) && el.y === mine.y ))
        neighbors.push(fields.find(el =>  el.x === (mine.x - 1) && el.y === (mine.y - 1)))
        neighbors.push(fields.find(el =>  el.x === mine.x && el.y === (mine.y - 1) ))
        neighbors.push(fields.find(el =>  el.x === (mine.x + 1) && el.y === (mine.y - 1)))
        neighbors.push(fields.find(el =>  el.x === mine.x  && el.y === (mine.y + 1)))
        neighbors.push(fields.find(el =>  el.x === (mine.x + 1) && el.y === (mine.y + 1)))
        neighbors.push(fields.find(el =>  el.x === (mine.x - 1) && el.y === (mine.y + 1)))
    })
    neighbors.forEach(el => {
        if(this.board.includes(el)){
            this.board[this.board.indexOf(el)].value ++
        }
    })

    // sort array
    this.board.sort((a,b) => {
        return (this.length * a.y + a.x) - (this.length * b.y + b.x)
    })

    var _row: Row
    for(var i = 1; i <= row;i++){
        _row =  new Row(this.getAllFieldsOfARow(i))
        _row.fields.sort((a,b) => {
            return (a.x) - (b.x)
        })
        this.gameboard.addRow(_row)
    }
}
getLength(){
    return this.gameboard.rows
}
private getAllFieldsOfARow(i: number) :Array<Field>{
    return this.board.filter((field) => {
        return field.y === i
    })
}
}
function checkIfFieldAlreadyExist(x,y,board){
let filteredEl =  board.find(el =>
     el.x === x && el.y === y
)
return filteredEl === undefined
}





