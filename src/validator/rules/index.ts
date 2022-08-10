export function createRequiredRule(name:string){
    return {
        name: { type: 'string', required: true, message: `O campo ${name} é obrigatório` },
    }
}

export default {required: createRequiredRule }