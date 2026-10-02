import { PessoaBase } from "./PessoaBase.js";
import { ValidadorUtil } from "./ValidadorUtil.js";
import { StatusMatriculaEnum, TitulacaoEnum } from './Dominio.js';

export class Professor extends PessoaBase {
    #salario;
    #titulacao;

    constructor(nomeinformado, cpfinformado, emailinformado, salario, titulacao){
        super(nomeinformado, cpfinformado, emailinformado, salario, titulacao);
        const pessoa = new ValidadorUtil();
        this.salario = salario;
        this.titulacao = titulacao;
        pessoa.verificarCPF(cpfinformado);
        pessoa.verificaremail(emailinformado);
    }

    get titulacao(){
        return this.#titulacao;
    }
    
    get salario(){
        return this.#salario;
    }

    set salario(salario){
        if (typeof salario !== 'number' || salario < 1500){
            throw new Error("ERR_SALARIO_BASE");
        }
    }
}