export class Field {
    isMine:boolean
    value:any
    isRevealed:boolean
    x:number
    y:number
    constructor(isMine:boolean, xCoordinate:number, yCoordinate:number ){
        this.isMine = isMine
        this.value = 0
        this.x = xCoordinate
        this.y = yCoordinate
        this.isRevealed = false
    }
}
