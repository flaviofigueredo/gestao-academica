import { Aluno } from "./Aluno.js";
import { Professor } from "./Professor.js";

export class GestorAcademico {
    alunos = [];
    professores = [];

    cadastrarAluno(nome, cpf, email, idade, curso){

        try {
            console.log(`\n[INICIANDO COMUNICAÇÃO...]`);
            const alunoa = new Aluno(nome, cpf, email, idade, curso);
            console.log(`✅ Sucesso!`);
            this.alunos.push(alunoa);
        } catch (excecaoCapturada) {
            
            console.log(`[ERRO INTERCEPTADO] A operação não pode ser concluída.`);
            this.traduzirErroParaOCliente(excecaoCapturada.message);

        } finally {

            console.log("🔒 Operação encerrada com segurança.");

        }
    }

    cadastrarProfessor(nome, cpf, email, salario, titulacao){

        try {
            console.log(`\n[INICIANDO COMUNICAÇÃO...]`);
            const prof = new Professor(nome, cpf, email, salario, titulacao);
            console.log(`✅ Sucesso!`);
            this.professores.push(prof);
        } catch (excecaoCapturada) {
            
            console.log(`[ERRO INTERCEPTADO] A operação não pode ser concluída.`);
            this.traduzirErroParaOCliente(excecaoCapturada.message);

        } finally {

            console.log("🔒 Operação encerrada com segurança.");

        }
    }

    buscar(cpf){
        const pessoa = [...this.alunos, ...this.professores].find(p => p.cpf === cpf);
        if (!pessoa) { 
            console.log("[NÃO ENCONTRADO]"); 
            return; 
        }
        console.log("[ENCONTRADO]");
        console.log(`Nome: ${pessoa.nome}`);
        console.log(`CPF: ${pessoa.cpf}`);
        console.log(`E-mail: ${pessoa.email}`);
        if (pessoa instanceof Aluno) {
            console.log(`Idade: ${pessoa.idade} | Curso: ${pessoa.curso} | Status: ${pessoa.status}`);
        } else {
            console.log(`Salário: R$ ${pessoa.salario.toFixed(2)} | Titulação: ${pessoa.titulacao}`);
        }
    }

    traduzirErroParaOCliente(codigoTecnicoDoErro) {
        switch (codigoTecnicoDoErro) {

            case "ERR_CLASSE_ABSTRATA":
                console.log("❌ AVISO: Não é possível cadastrar uma Pessoa genérica no sistema.");
                break;

            case "ERR_NOME_VAZIO":
                console.log("❌ AVISO: O campo de nome é obrigatório e não pode ficar em branco.");
                break;

            case "ERR_CPF_INVALIDO":
                console.log("❌ AVISO: O CPF informado é inválido. Digite exatamente 11 números sem formatação.");
                break;

            case "ERR_EMAIL_INVALIDO":
                console.log("❌ AVISO: O endereço de e-mail deve conter um formato válido (ex: nome@dominio.com).");
                break;

            case "ERR_IDADE_MINIMA":
                console.log("❌ AVISO: O aluno deve ter no mínimo 14 anos para efetuar a matrícula no SENAI.");
                break;

            case "ERR_SALARIO_BASE":
                console.log("❌ AVISO: O salário registrado não pode ser inferior ao piso da categoria (R$ 1500,00).");
                break;

            default:
                console.log("❌ AVISO SISTÊMICO: Falha no processamento dos dados. Tente novamente.");
        }
    }
}