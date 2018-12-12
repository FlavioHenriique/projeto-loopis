export class Funcionario {
    constructor(
        public email?: string,
        public senha?: string,
        public nome?: string,
        public cargo?: string,
        public perfilGithub?: string,
        public tipo?: string,
        public habilidades?: string
    ) { }

    public autenticarSenha(senha:string){
        return this.senha == senha;
    }
}