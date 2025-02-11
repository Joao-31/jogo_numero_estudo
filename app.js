let listaNumerosEscolhidos = [];
let tamanhoMaximo = 10;
let numeroSecreto = numeroAleatorio();
let tentativa = 1;
function exibirTexto(tag, texto){
    let celula = document.querySelector(tag);
    celula.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate: 1.2});
}
function exibirMensagemInicial(){
    exibirTexto('h1', 'Jogo do número Secreto');
    exibirTexto('p', 'Escolha um número de 1 a 100');
}

exibirMensagemInicial();

function verificarChute(){
    let chute = document.querySelector('input').value;
    if(chute ==  numeroSecreto){
        let palavraTentativa = tentativa>1 ? 'tentativas' : 'tentativa';
        let mensagemTentativa = `Você acertou o número secreto com ${tentativa} ${palavraTentativa}!`;
        exibirTexto('h1', 'Acertou!');
        exibirTexto('p',mensagemTentativa);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }
    else{
        if(chute>numeroSecreto){
            exibirTexto('p', 'O número secreto é menor');
        }
        else{
            exibirTexto('p', 'O número secreto é maior')
        }
        tentativa++;
        limparChute();
    }
}

function numeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * tamanhoMaximo + 1);
    let quantidadeDeElementos = listaNumerosEscolhidos.length
    if(quantidadeDeElementos == tamanhoMaximo){
        listaNumerosEscolhidos= [];
    }
    if(listaNumerosEscolhidos.includes(numeroEscolhido)){
        return numeroAleatorio();
    }
    else{
        listaNumerosEscolhidos.push(numeroEscolhido);
        return numeroEscolhido;
    }
}

function limparChute(){
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo(){
    numeroSecreto = numeroAleatorio();
    tentativa = 1;
    limparChute();
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}