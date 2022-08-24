import { ValidatorAsync } from './asyncValidator/validator'
import * as createRules from './rules'
import { Validator } from './validator'

export function createValidator(rules:string, name:string){
    // const listRules = rules.split('|')
    // const allRules = []
    // for(const rule of listRules){
    //     // check if role exists
    //     if(!createRules[rule])
    //         throw new Error(`The ${rule} rule does not exist`)
    //     allRules.push(createRules[rule](name))
    // }
    // return new Schema({
    //     name
    // })
}

export class ValidatorFactory{
    static createValidator(name:string):Validator {
        return new ValidatorAsync(name)    
    }
}