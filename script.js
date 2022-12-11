function ex1(){
    let x = prompt("Digite um valor para ser fatorado:");
    let fat = x;
    for(let i = 1 ; i < fat; i++) {
        x *= i;
    }
    alert(x);
}

function ex2(){
    x = prompt("Digite algum nome ou frase e descubra quantas letras tem:");
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
    const frutas = ["Banana", " Laranja", " Maçã", " Manga"];
    y = prompt("Digite uma fruta:");
    frutas.push( y);
    alert(frutas);
}

function ex6(){
    x = prompt("Digite algo e veja crescer:");
    alert(x.toUpperCase());
}

function ex7(){
    alert("Você está no mês " + (new Date().getMonth()+1))
}

function ex9(){
    let i = new Date().getDay();
    const dia = ["domingo", "segunda-feira", "terça-feira", "quarta-feira", "quinta-feira", "sexta-feira", "sábado"]
    alert("Hoje é " + (dia[i]));
}

function ex10(){
    x = prompt("Digite algo e veja Diminuir:");
    alert(x.toLowercase());
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