import { Validator } from './validator';
export declare function createValidator(rules: string, name: string): void;
export declare class ValidatorFactory {
    static createValidator(name: string): Validator;
}
