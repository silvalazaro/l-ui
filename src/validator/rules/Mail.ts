import { RuleInterface } from "./RuleInterface";

export class Mail implements RuleInterface {
    name: string

    constructor(name: string = 'E-mail') {
        this.name = name
    }

    isValid(mail: string): boolean {
        var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        return filter.test(mail)
    }

    validate(value: string) {
        if (!value) return
        if (!this.isValid(value))
            throw new Error(`O campo ${this.name} é inválido`)
    }

}