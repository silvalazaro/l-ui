import { Cnpj } from "@src/validator/rules/cnpj";
import consultarCNPJ from 'consultar-cnpj'
import { debounce } from "lodash";

const cnpjValidator = new Cnpj('CNPJ')

export async function fetchCnpj(cnpj:string):Promise<any>{
  
    if(!cnpjValidator.isValid(cnpj)) return
    return {
        lazaro: 103040
    }
    //return await consultarCNPJ(cnpj);
}

export const delayedFetchCnpj = debounce(fetchCnpj, 500);