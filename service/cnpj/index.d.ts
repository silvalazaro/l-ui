/// <reference types="lodash" />
export declare function fetchCnpj(cnpj: string): Promise<any>;
export declare const delayedFetchCnpj: import("lodash").DebouncedFunc<typeof fetchCnpj>;
