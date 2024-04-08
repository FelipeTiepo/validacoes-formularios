export default function menorIdade(campo){
    const dataNascimento = new Date(campo.value)
    if(!validaIdade(dataNascimento)){
        campo.setCustomValidity('O usuário não é maior de idade')
    }
}

function validaIdade(data){
    //Se não colocar parametros o NEW DATE() pega a data atual
    const dataAtual = new Date()
    const dataMais18 = new Date(data.getUTCFullYear() + 18, data.getUTCMonth(), data.getUTCDate())

    return dataAtual >= dataMais18
}