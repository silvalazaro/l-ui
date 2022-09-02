import { Required } from "@src/validator/rules/Required"

export class RequiredAsync extends Required{
   
    validate(value:any) {
        if(value) return
        throw new Error(`O campo ${this.name} é obrigatório`)
    }
    
}