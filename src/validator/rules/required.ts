import { RuleInterface } from "./ruleInterface";

export class Required implements RuleInterface{
    name:string

    constructor(name:string){
        this.name = name
    }
    
    validate(value:any) {
        if(value) return
        throw new Error(`O campo ${this.name} é obrigatório`)
    }
    
}