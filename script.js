
      //Gerando um número aleatório

//Math.floor retorna no menor número inteiro dentro da condição descrita
let num_digitado = Math.floor(Math.random() * 100) + 1;

//quantidade de tentativas permitidas
let total_tentativas = 10;



      //Função pra calcular

function adivinhar() {

    const num_digitado = document.getElementById("numero").value;

    const resultado = document.getElementById("resultado");

    const palpite = parseInt(num_digitado.value);


    //Verificando o palpite se é válido
    if (isNaN(palpite) || palpite < 1 || palpite > 100) {
        return;

    }

    //Diminuindo a quantidade de tentativas
    tentativas_restantes--;


    //Verificando se o palpite está correto
    if (palpite === num_digitado) {
        resultado.innerHTML = `Parabéns! Você acertou ${numero_digitado} em ${10 - tentativas_restantes} tentativas!`;
        finalizarJogo();

    }else if (tentativas_restantes === 0){
        resultado.innerHTML = `Você perdeu! O número correto era ${numero_digitado}.`;
        finalizarJogo();

    }else {
        //Dica se é maior ou menor ao palpite do usuário
            resultado.innerHTML = `Errado! O número é ${palpite < numero_digitado ? 'maior' : 'menor'}. Você tem ${tentativas_restantes} tentativas restantes.`;

    }


    //Limpando o input
    //input recebe vazio
    num_digitado.value = '';
    num_digitado.focus();


    function finalizarJogo() {
        //Desabilitando o campo de entrada e o btn qndo terminar o jogo
        document.getElementById("numero").disabled = true;
        document.querySelector("button").disabled = true;

    }


    




}




      //Gerando um número aleatório
const numero_aleatorio = Math.floor(Math.random() * 100)








