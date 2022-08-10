import Schema from 'async-validator';
import * as createRules from './rules'

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