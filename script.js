function ex1(){
    let x = prompt("Digite um valor para ser fatorado:");
    let fat = x;
    for(let i = 1 ; i < fat; i++) {
        x *= i;
    }
    alert(x);
}

function ex2(){
    x = prompt("Digite um nome:");
    alert("O nome tem " + x.length + " letras.");
}

function ex3(){
    x = prompt("Digite a senha:");
    if(x==='M4R1A')
        alert("A senha está correta");
    else
        alert("A senha está incorreta");
}

function ex4(){
    const city = ["Goiania", "Rio de Janeiro", "Belo Horizonte", "Uberaba", "São Paulo"];
    alert(city[3]);
}

function ex5(){
    const frutas = ["Banana", " Laranja", " Maçã", " Manga"];
    frutas.push(" Abacaxi");
    alert(frutas);
}

function ex6(){
    x = prompt("Digite um nome:");
    alert("O nome tem " + x.length + " letras.");
}

function ex7(){
    x = prompt("Digite o nome de uma cidade:");
    alert(x.toUpperCase());
}

function ex8(){
    alert("Você está no mês " + (new Date().getMonth()+1))
}

function ex9(){
    let i = new Date().getDay();
    const dia = ["domingo", "segunda-feira", "terça-feira", "quarta-feira", "quinta-feira", "sexta-feira", "sábado"]
    alert("Hoje é " + (dia[i]));
}

function ex10(){
    i = new Date().getDate();
    alert("Daqui a 60 dias será o dia " + (i+60));
}