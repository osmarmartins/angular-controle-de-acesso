export class Usuario {

    constructor(
        public id: number,
        public nome: string,
        public login: string,
        public email: string,
        public senha: string,
        public ativo: boolean
    ) {}

}
