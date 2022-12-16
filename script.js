function ex1(){
    let x = prompt("Digite um valor para ser fatorado:");
    let fat = x;
    for(let i = 1 ; i < fat; i++) {
        x *= i;
    }
    alert(x);
}

function ex2(){
    x = prompt("Digite algo e descubra quantas letras tem:");
    alert("O nome tem " + x.length + " letras.");
}

function ex3(){
    x = prompt("Qual o nome do menino que foi preso em uma casa de doces:");
    if(x==='João')
        alert("Correto!");
    else
        alert("Incorreto!");
}

function ex4(){
    let y = prompt("Digite um número de 1 a 5, cada um mostrará uma ciade:");
    const city = ["Goiania", "Rio de Janeiro", "Belo Horizonte", "Uberaba", "São Paulo"];
    alert(city[y]);
}

function ex5(){
    let i = new Date().getDay();
    const dia = ["domingo", "segunda-feira", "terça-feira", "quarta-feira", "quinta-feira", "sexta-feira", "sábado"]
    alert("Hoje é " + (dia[i]) + "!");
}

function ex6(){
    alert("Você está no mês " + (new Date().getMonth()+1) + "!")
}

function ex7(){
    x = prompt("Digite algo para ficar maiúsculo:");
    alert(x.toUpperCase());
}

function ex8(){
    x = prompt("Digite algo para ficar minúsculo:");
    alert(x.toLowerCase());
}

function ex9() {
    const frase = prompt("Apenas as primeiras letras vão ser maiúsculas:");
    const palavras = frase.split(" ");
    
    for (let i = 0; i < palavras.length; i++) {
        palavras[i] = palavras[i][0].toUpperCase() + palavras[i].toLowerCase().substr(1);
    }
    
    alert(palavras.join(" "));

}

function typeWrite(elemento){
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = ' ';
    textoArray.forEach(function(letra, i){   
      
    setTimeout(function(){
        elemento.innerHTML += letra;
    }, 75 * i)

  });
}
const titulo = document.querySelector('.titulo-principal');
typeWrite(titulo);