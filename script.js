const numeros = document.querySelectorAll('.botao-numero');
const input = document.querySelector('#inputValor')
const botaoLimpar = document.getElementById('botao-limpar')
const botaoNegativo = document.getElementById('botao-negativo');
const botaoPorcentagem = document.getElementById('botao-porcentagem')
const botaoSoma = document.getElementById('botao-soma')
const botaoDivisao = document.getElementById('botao-divisao')
const botaoMultiplica = document.getElementById('botao-multiplica')
const botaoSubtrai = document.getElementById('botao-subtrai')
const botaoResultado = document.getElementById('botao-resultado')

const operacoes = [botaoDivisao, botaoMultiplica, botaoSubtrai, botaoSoma, botaoResultado]
let valorAtual = 0;
let primeiroNumero = 0;
let operacaoPendente = null;

operacoes.forEach(operacao => {
    operacao.addEventListener('click', ()=>{
        realizarOperacao(operacao.innerText)


    })
})

function realizarOperacao(operacao) {
    switch (operacao) {
        case '÷':
        case 'x':
        case '-':
        case '+':
            primeiroNumero = parseFloat(valorAtual);
            valorAtual = '0';
            operacaoPendente = operacao;
            break;
        case '=':
            if (operacaoPendente !== null) {
                switch (operacaoPendente) {
                    case '÷':
                        valorAtual = primeiroNumero / parseFloat(valorAtual);
                        break;
                    case 'x':
                        valorAtual = primeiroNumero * parseFloat(valorAtual);
                        break;
                    case '-':
                        valorAtual = primeiroNumero - parseFloat(valorAtual);
                        break;
                    case '+':
                        valorAtual = primeiroNumero + parseFloat(valorAtual);
                        break;
                    default:
                        break;
                }
                input.value = valorAtual;
                primeiroNumero = 0;
                operacaoPendente = null;
            }
            break;
        default:
            break;
    }
}
function mostrarBotao(letra){
        botaoLimpar.children[0].innerHTML = letra
}

for(let i = 0; i < numeros.length; i++){

    const numero = numeros[i];
    const numeroClicado = numero.children[0].innerHTML;
    
    

    numero.onclick = function (){
        /* 
            A linha de baixo usa uma forma resumida de escrever um if-else
            - verifica se valor atual é igual a zero, que é quando a calculadora é iniciada
            - "?" é o operador ternário, funciona como um atalho para a instrução if-else. O que vem antes do "?"
                é a condição a ser avaliada.
            - Se a condição for verdadeira, ou seja, se 'valorAtual' for igual a 0, então o primeiro número clicado
                (numeroClicado) é atribuído a valorAtual.
            - ":" indica a separação entre a expressão a ser avaliada quando a condição é verdadeira e quando a expressão for falsa.
            - Se a condição for falsa, ou seja, se 'valorAtual' não for igual a 0, então 'valorAtual + numeroClicado' é atribuído
                a 'valorAtual'.          
        */
        valorAtual = (valorAtual == 0) ? numeroClicado : valorAtual + numeroClicado;
        input.value = valorAtual; // o input.value está apenas recebendo como seu valor, o "valorAtual"
        
        mostrarBotao('C');
        
        //console.log(valorAtual)
    }
    limparCampo();
    
    
}
negativarNumero();
fazerPorcentagem();

function fazerPorcentagem(){
    botaoPorcentagem.onclick = function(){
        let valorPorcentagem = parseFloat(valorAtual) / 100;
        console.log(valorPorcentagem)
        input.value = valorPorcentagem; // input.value é o valor que está aparecendo após a operação
        valorAtual = valorPorcentagem;
    }
}
function limparCampo(){
    botaoLimpar.onclick = function(){
        // "!==" verifica se o "valorAtual" é diferente de '0'. O operador verifica desigualdade estrita, verifica se os valores e os
        // tipos são diferentes.
        if(valorAtual !== 0){
            input.value = 0;
            valorAtual = 0;
            mostrarBotao('AC')
        }
    }
}

function negativarNumero(){

    botaoNegativo.onclick = function(){
        if(valorAtual !== 0){
            valorAtual = `-${valorAtual}`
        }
    }
    
}
    



    
    





