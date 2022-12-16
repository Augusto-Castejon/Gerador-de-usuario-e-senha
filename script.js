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
    const fru = ["27", " 126", " 49", " 51"];
    y = prompt("Digite um número:");
    fru.push(" " + y);
    alert(fru);
}

function ex6(){
    let i = new Date().getDay();
    const dia = ["domingo", "segunda-feira", "terça-feira", "quarta-feira", "quinta-feira", "sexta-feira", "sábado"]
    alert("Hoje é " + (dia[i]) + "!");
}

function ex7(){
    alert("Você está no mês " + (new Date().getMonth()+1) + "!")
}


function ex8(){
    x = prompt("Digite algo e veja crescer:");
    alert(x.toUpperCase());
}

function ex9(){
    x = prompt("Digite algo e veja diminuir:");
    alert(x.toLowerCase());
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