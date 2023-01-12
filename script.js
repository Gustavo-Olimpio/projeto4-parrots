let cartas = prompt("Com quantas cartas quer jogar?");
while (cartas > 14 || cartas<4 || cartas%2==1){
    alert("Digite um valor válido, número par maior que 3 e menor que 15")
    cartas = prompt("Com quantas cartas quer jogar?");
}

const deck = ["bob","ex","fi","me","re","tri","uni"];
let contbaralho=0;
const embaralhado = []
while(contbaralho < cartas/2){
    embaralhado.push(deck[contbaralho]);
    embaralhado.push(deck[contbaralho]);
    contbaralho+=1;
}
function comparador(){
    return Math.random() - 0.5; 
}
let cont=0;
const carta = document.querySelector('.totalcartas');
embaralhado.sort(comparador);
while(cont < cartas){
    carta.innerHTML = `
<div class="card">
  <div class="front-face face">
  <img class="passaro" src="img/back.png">
  </div>
  <div class="back-face face">
  <img class="passaro" src="img/${embaralhado[cont]}.gif">
  </div>
</div>`+carta.innerHTML;
    cont+=1;
    
}