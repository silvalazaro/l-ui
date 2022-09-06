import { RuleInterface } from "./RuleInterface";
export declare class Cnpj implements RuleInterface {
    name: string;
    constructor(name: string);
    validate(cnpj: string): void;
    isCpfValid(cpf: string): boolean;
    isValid(cnpj: string): boolean;
    formatCpf(cpf: string): string;
    formatCnpj(cnpj: string): string;
    format(digits: string, correctDigitsLength: number, firstDotPosition: number, secondDotPosition: number, slashPosition: number, dashPosition: number): string;
    checkValid(digits: string, correctDigitsLength: number, weights: number[]): boolean;
    getOnlyNumbers(digits: string): string;
    isAllTheSameDigits(digits: string): boolean;
    calcChecker(digits: string, weights: number[]): string;
}
