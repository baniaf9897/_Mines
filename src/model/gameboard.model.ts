import { Row } from "./row.model"

export class Gameboard{
  rows:Row[] = new Array()

  constructor(){
   
  }
  addRow(row:Row){
    this.rows.push(row)
  }
}