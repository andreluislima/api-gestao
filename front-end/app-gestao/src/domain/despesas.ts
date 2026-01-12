
export interface Despesas{
    id?:number;
    data?:string | Date;
    descricao?:string;
    empresa?:string,
    forma_pagamento?:string;
    valor?:number;
}