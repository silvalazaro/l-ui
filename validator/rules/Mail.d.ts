import { RuleInterface } from "./RuleInterface";
export declare class Mail implements RuleInterface {
    name: string;
    constructor(name?: string);
    isValid(mail: string): boolean;
    validate(value: string): void;
}
