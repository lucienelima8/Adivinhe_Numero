
       //Gerando um número aleatório

//Math.floor retorna no menor número inteiro dentro da condição descrita
const numero_aleatorio = Math.floor(Math.random() * 100) + 1;

//quantidade de tentativas permitidas
let total_tentativas = 10;




        //Função pra calcular

function adivinhar() {

    //palpite receberá o número que o usuário digitar no input
    const palpite = parseInt(document.getElementById("numero").value);




    //Verificando se o palpite  é válido

    //palpite deve ser < 1 e > 100
    if (isNaN(palpite) || palpite < 1 || palpite > 100) {
       
        //Mensagem caso o usuário digite um número menor que 1 e maior que 100
        document.getElementById("resultado").innerHTML = "Por favor, digite um número válido entre 1 e 100.";
        return;

    }




        //Diminuindo a quantidade de tentativas
    
    //total de tentativas ir decrementando (diminuindo de si mesma a quantidade)
    total_tentativas--;




        //Verificando se o palpite está correto

    if (palpite === numero_aleatorio) {  //o palpite do usuário estava igual ao número sorteado

        //Mensagem de acerto, palpite correto.
        document.getElementById("resultado").innerHTML = `Parabéns! Você acertou  em  ${10 - total_tentativas} tentativas!`;
        finalizarJogo();


    }else if (total_tentativas === 0){ //zeeou a quantidade de tentativas e não acertou

        document.getElementById("resultado").innerHTML = `Você perdeu! O número correto era ${numero_aleatorio}.`;
        finalizarJogo();


    }else {

        //Mensagem com dica se é maior ou menor ao palpite do usuário
        document.getElementById("resultado").innerHTML = `Errado! O número é ${palpite < numero_aleatorio ? 'maior' : 'menor'}. Você tem ${total_tentativas} tentativas restantes.`;

    }




        //Limpando o input
  
    //para acessar o valor digitado no input para processá-lo ou invalidá-lo  
    document.getElementById("numero").value;

    //focus para que após o palpite o cursor volte pro input para que o usuário volte a digitar nele sem ter que clicar nele
    document.getElementById("numero").focus();




        //Desabilitando o input e btn ao encerrar o jogo

    function finalizarJogo() {

        //Desabilita o campo de entrada quando temrinar o jogo
        document.getElementById("numero").disabled = true;

        //Desabilita o primeiro botão encontrado quando terminar o jogo
        document.querySelector("button").disabled = true;

    }


}












