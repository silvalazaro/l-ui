export interface ValidatorInterface {
    execute(value: any): Promise<void>;
}
export declare abstract class Validator implements ValidatorInterface {
    private name;
    private rules;
    constructor(name: string);
    execute(value: any): Promise<void>;
    required(): this;
    cnpj(): this;
    cpf(): this;
}
