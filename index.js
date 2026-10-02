import * as readline from 'node:readline/promises';
import { GestorAcademico } from './GestorAcademico.js';
import { StatusMatriculaEnum, TitulacaoEnum } from './Dominio.js';
import { stdin as input, stdout as output } from 'node:process';

const rl = readline.createInterface({ input, output });
IniciarSistema();

async function IniciarSistema() {
    let sistemaRodando = true;

    const sistema = new GestorAcademico();


    while (sistemaRodando === true){

        console.log("\n Selecione o que deseja fazer:");
        console.log("1 - Matricular Aluno");
        console.log("2 - Contratar Professor");
        console.log("3 - Buscar Cadastro (por CPF)");
        console.log("4 - Sair do Sistema");
        let tipo = parseInt(await rl.question("Informe a opção escolhida: "));

        switch (tipo){
            case 1:
                const nome = await rl.question("Digite o nome do aluno: ");
                const cpf = await rl.question("Digite o cpf do aluno: ");
                const email = await rl.question("Digite o email do aluno: ");
                const idade = parseInt(await rl.question("Digite a idade do aluno: "));
                const curso = await rl.question("Digite o curso do aluno: ");
                sistema.cadastrarAluno(nome, cpf, email, idade, curso);
                break;

            case 2:
                const nomep = await rl.question("Digite o nome do professor: ");
                const cpfp = await rl.question("Digite o cpf do professor: ");
                const emailp = await rl.question("Digite o email do professor: ");
                const salario = parseFloat(await rl.question("Digite o salário do professor: "));

                let titulacao;
                console.log("\n Selecione a sua Titularização:");
                console.log("1 - ESPECIALISTA");
                console.log("2 - MESTRE");
                console.log("3 - DOUTOR");
                const titu = parseInt(await rl.question("Informe a opção escolhida: "));

                switch(titu){
                    case 1:
                        titulacao = TitulacaoEnum.ESPECIALISTA;
                        break;
                    case 2:
                        titulacao = TitulacaoEnum.MESTRE;
                        break;
                    case 3:
                        titulacao = TitulacaoEnum.DOUTOR;
                        break;
                    default:
                        console.log("Opção Inválida. Fechando o programa");
                        rl.close();
                        process.exit();
                }
                sistema.cadastrarProfessor(nomep, cpfp, emailp, salario, titulacao);
                break;

            case 3:
                const cpfa = await rl.question("Digite o cpf que deseja buscar: ");
                sistema.buscar(cpfa);
                break;

            case 4:
                sistemaRodando = false;
                break;

            default:
                console.log("Opção Inválida. Digite Corretamente.");              
        }
        
    }
    

    rl.close();
}