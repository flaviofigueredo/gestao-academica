import { StatusMatriculaEnum, TitulacaoEnum } from './Dominio.js';
import { ValidadorUtil } from "./ValidadorUtil.js";
import { PessoaBase } from "./PessoaBase.js";

export class Aluno extends PessoaBase {
    #idade;
    #curso;
    #status;

    constructor(nomeinformado, cpfinformado, emailinformado, idade, curso){
        super(nomeinformado, cpfinformado, emailinformado, idade, curso);
        const pessoa = new ValidadorUtil();
        this.idade = idade;
        this.#curso = curso;
        this.#status = StatusMatriculaEnum.ATIVA;
        pessoa.verificarCPF(cpfinformado);
        pessoa.verificaremail(emailinformado);
    }

    get curso() {
        return this.#curso;
    }

    get status() {
        return this.#status;
    }

    get idade() {
        return this.#idade;
    }

    set idade(idade) {
        if (typeof idade !== 'number' || idade < 14 || idade > 120){
            throw new Error("ERR_IDADE_MINIMA");
        }
        this.#idade = idade;
    }
}