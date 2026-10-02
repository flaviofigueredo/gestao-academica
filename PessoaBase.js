import { ValidadorUtil } from "./ValidadorUtil.js";

export class PessoaBase {
    #nome;
    #cpf;
    #email;

    constructor(nome, cpf, email){
        if (new.target === PessoaBase) {
            throw new Error("ERR_CLASSE_ABSTRATA");
        }
        this.nome = nome;
        this.#cpf = cpf;
        this.#email = email;
        
    }

    get nome(){
        return this.#nome;
    }

    set nome(nome){
        if (nome === ""){
            throw new Error("ERR_NOME_VAZIO");
        }
        this.#nome = nome;
    }

    get cpf(){
        return this.#cpf;
    }

    set cpf(cpf){
        validacao.verificarCPF(cpf);
        this.#cpf = cpf
    }

    get email(){ 
        return this.#email;
    }

    set email(email){
        validacao.verificaremail(email);
        this.#email = email
    }

}