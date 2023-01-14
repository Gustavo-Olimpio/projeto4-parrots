
let acertos=0;
let jogadas=0;

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
<div data-test="card" onclick="vira(this)" class="card">
  <div class="ff face">
  <img data-test="face-down-image" class="passaro" src="img/back.png">
  </div>
  <div class="bf face">
  <img data-test="face-up-image" class="passaro gif" src="img/${embaralhado[cont]}.gif">
  </div>
</div>`+carta.innerHTML;
    cont+=1;
    
}
const twocards = [];
const paramudar = [];
let contvira=0;

function vira(valor){
    if (contvira<2){
        const ff = valor.querySelector('.ff');
        const bf = valor.querySelector('.bf');
        ff.classList.add("front-face");
        bf.classList.add("back-face");
        gif = valor.querySelector('.gif').src;
        twocards.push(gif);
        paramudar.push(valor);
        paramudar[0].classList.add('nclicado');
        jogadas+=1;
    
        contvira+=1;
            if (contvira==2){
                setTimeout(comparar, 1000);   
                
            }
        }
    }
  function comparar(){
    if (twocards[0] == twocards[1]){
        contvira=0;
        twocards.pop();
        twocards.pop();
        let a = "Igual"
        console.log(a);
        paramudar[0].classList.add('nclicado');
        paramudar[1].classList.add('nclicado');
        paramudar.pop();
        paramudar.pop();
        acertos+=1;
        setTimeout(terminarjogo, 500);
        
}   else{
        contvira=0;
        twocards.pop();
        twocards.pop();
        let a = "Diferente"
        console.log(a)
        paramudar[0].classList.remove('nclicado');
        const ff1 = paramudar[0].querySelector('.ff');
        const bf1 = paramudar[0].querySelector('.bf');
        const ff2 = paramudar[1].querySelector('.ff');
        const bf2 = paramudar[1].querySelector('.bf');
        ff1.classList.remove("front-face");
        bf1.classList.remove("back-face");
        ff2.classList.remove("front-face");
        bf2.classList.remove("back-face");
        paramudar.pop();
        paramudar.pop();
  }
}
function terminarjogo(){
    if (cartas/2 ==acertos){
        alert(`Você ganhou em ${jogadas} jogadas!`);
    }
}


