export class Field {
    isMine:boolean
    value:any
    isRevealed:boolean
    x:number
    y:number
    isMarked:boolean
    constructor(isMine:boolean, xCoordinate:number, yCoordinate:number ){
        this.isMine = isMine
        this.value = 0
        this.x = xCoordinate
        this.y = yCoordinate
        this.isRevealed = false
        this.isMarked = false;
    }
}
