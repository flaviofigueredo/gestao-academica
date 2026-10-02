export class ValidadorUtil {

    verificarCPF(cpf){
        let valor = cpf.replace(/\D/g, '');
        if (typeof valor !== 'string'){
            throw new Error("ERR_TIPO_INVALIDO");
        }
        if (valor.length !== 11){
            throw new Error("ERR_CPF_INVALIDO");
        }
        return;
    }

    verificaremail(email){
        let sentinela = false
        for (let i = 0; i < email.length; i++) {
            if (email[i] === "@") {
                sentinela = true
            }   
        }
        if (sentinela === false){
            throw new Error("ERR_EMAIL_INVALIDO");
        }
        return;
    }
}