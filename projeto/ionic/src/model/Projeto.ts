export class Projeto {
    constructor(
        public titulo?: string,
        public telefone?: string,
        public nomeContratante?: string,
        public emailContratante?: string,
        public descricao?: string,
        public dataEntrega?:Date,
        public id?:number
    ) { }

}