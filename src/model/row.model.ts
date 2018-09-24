import { Field } from "./field.model";

export class Row{
    fields:Field[]

    constructor(_field:Field[]){
        this.fields = _field
    }
}