import { RuleInterface } from "./RuleInterface";
export declare class Required implements RuleInterface {
    name: string;
    constructor(name: string);
    validate(value: any): void;
}
