import { CnpjAsync } from "./asyncValidator/rules/cnpj"
import { RequiredAsync } from "./asyncValidator/rules/required"
import { Cpf } from "./rules/Cpf"
import { RuleInterface } from "./rules/RuleInterface"

export interface ValidatorInterface {
    execute(value:any): Promise<void>
}

export abstract class Validator implements ValidatorInterface {
    private name: string
    private rules: Array<RuleInterface>

    constructor(name: string) {
        this.name = name
        this.rules = []
    }

    execute(value:any): Promise<void> {
        const me = this
        return new Promise<void>(
            function (resolve, reject) {
                for (const rule of me.rules) rule.validate(value)
                resolve()
            });
    }

    required() {
        this.rules.push(new RequiredAsync(this.name))
        return this
    }

    cnpj() {
        this.rules.push(new CnpjAsync(this.name))
        return this
    }

    cpf() {
        this.rules.push(new Cpf(this.name))
        return this
    }
}