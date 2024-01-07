const dataPonto = require('../data/ponto-data')


const adicionarZeroEsquerda = (item) => {
    return item < 10 ? `0${item}`: item
}

const buscarData = () => {
    const dataHoraAtualCompleto = new Date();
    const diaAtual = dataHoraAtualCompleto.getDate()
    const mesAtual = dataHoraAtualCompleto.getMonth() + 1;
    const anoAtual = dataHoraAtualCompleto.getFullYear()
    const dataFormatada = `${adicionarZeroEsquerda(diaAtual)}/${adicionarZeroEsquerda(mesAtual)}/${adicionarZeroEsquerda(anoAtual)}`
    return dataFormatada
}

const buscarHora = () => {
    const dataHoraAtualCompleto = new Date();
    const horaAtual = dataHoraAtualCompleto.getHours();
    const minutoAtual = dataHoraAtualCompleto.getMinutes();
    const segundoAtual = dataHoraAtualCompleto.getSeconds();
    const horaFormatada = `${adicionarZeroEsquerda(horaAtual)}:${adicionarZeroEsquerda(minutoAtual)}:${adicionarZeroEsquerda(segundoAtual)}`
    return horaFormatada
}



const iniciarPonto = async (req, res) => {
    const {id, email} = req.usuario
    const dataFormatada = buscarData()
    const horaFormatada = buscarHora()
  
    try {
        const buscarPontoCadastradoDia = await dataPonto.buscarPontoCadastradoDia(id, dataFormatada)
        
        if(!buscarPontoCadastradoDia){
            
        }
        
        return res.json(buscarPontoCadastradoDia)

    } catch (error) {
        console.log(error)
    }

    console.log(`${dataFormatada} ${horaFormatada}`)
}




module.exports = {
    iniciarPonto
}