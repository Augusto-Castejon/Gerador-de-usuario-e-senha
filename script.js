// Função para capitalizar a primeira letra de cada palavra
function capitalizarNome(nome) {
    return nome
        .toLowerCase() // Primeiro, transforme tudo para minúsculo
        .split(" ") // Divida por espaço
        .map(palavra => palavra.charAt(0).toUpperCase() + palavra.slice(1)) // Capitalize a primeira letra
        .join(" "); // Junte novamente com espaços
}

function gerarUsuarioESenha() {
    const nomeCompletoRaw = document.getElementById("nome-completo").value.trim();

    if (!nomeCompletoRaw) {
        alert("Por favor, insira um nome completo.");
        return;
    }

    const nomeCompleto = capitalizarNome(nomeCompletoRaw);

    // Dividindo o nome completo para obter o primeiro e o último nome
    const nomes = nomeCompleto.split(" ");
    if (nomes.length < 2) {
        alert("Por favor, insira pelo menos um primeiro e um último nome.");
        return;
    }

    const primeiroNome = nomes[0].toLowerCase();
    const ultimoNome = nomes[nomes.length - 1].toLowerCase();
    const nomeDeUsuario = `${primeiroNome}.${ultimoNome}`;

    const senha = gerarSenhaAleatoria();

    const resultado = `
        Nome completo:<br>
        ${nomeCompleto}<br><br>
        Usuário:<br>
        ${nomeDeUsuario}<br><br>
        Senha sugerida:<br>
        ${senha}
    `;

    document.getElementById("resultado").innerHTML = resultado;
}

function gerarSenhaAleatoria() {
    // Funções para gerar caracteres aleatórios
    function letraMaiuscula() {
        const letras = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        return letras.charAt(Math.floor(Math.random() * letras.length));
    }

    function letrasMinusculas(quantidade) {
        const letras = "abcdefghijklmnopqrstuvwxyz";
        let resultado = "";
        for (let i = 0; i < quantidade; i++) {
            resultado += letras.charAt(Math.floor(Math.random() * letras.length));
        }
        return resultado;
    }

    function caractereEspecial() {
        const especiais = "!@#*_.";
        return especiais.charAt(Math.floor(Math.random() * especiais.length));
    }

    function numeros(quantidade) {
        const digitos = "0123456789";
        let resultado = "";
        for (let i = 0; i < quantidade; i++) {
            resultado += digitos.charAt(Math.floor(Math.random() * digitos.length));
        }
        return resultado;
    }

    // Gerando a senha na ordem especificada
    const senha = `${letraMaiuscula()}${letrasMinusculas(3)}${caractereEspecial()}${numeros(4)}`;
    
    return senha;
}

// Função para animação de digitação
function typeWrite(elemento) {
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = ' ';
    textoArray.forEach((letra, i) => {
        setTimeout(() => {
            elemento.innerHTML += letra;
        }, 75 * i);
    });
}

const titulo = document.querySelector('.titulo-principal');
typeWrite(titulo);
