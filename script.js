const inputTexto = document.querySelector("#texto-entrada");
const mensagem = document.querySelector("#resultado-texto");
const imgs = document.querySelector(".imagem");
const textarea = document.querySelector(".texto-resultado");
const orientacao = document.querySelector(".orientacao");
const textmensagem = document.querySelector(".text-mensagem");
const btncopiar = document.querySelector(".copiar");
const btnLimpar = document.querySelector("#btnLimpar");

function btnEncriptar() {
   const textoEncriptado = encriptar(inputTexto.value);
   mensagem.value = textoEncriptado;
   imgs.style.display = 'none';
   textarea.style.display = 'block';
   orientacao.style.display = 'none';
   textmensagem.style.display = 'none';
   btncopiar.style.display = 'block';
}


function encriptar(stringEncriptada) {
    
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++) {
        if(stringEncriptada.includes(matrizCodigo[i][0])) {
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }

    return stringEncriptada;
}

function btnDesencriptar() {
    const textoDesencriptado = desencriptar(inputTexto.value);
    mensagem.value = textoDesencriptado;
}

function desencriptar(stringDesencriptada) {
    
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase();
    console.table(matrizCodigo);

    for(let i = 0; i < matrizCodigo.length; i++) {
        if(stringDesencriptada.includes(matrizCodigo[i][0])) {
            stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }

    return stringDesencriptada;
}

mensagem.addEventListener('click', btncopiar);

function copiar() {
    mensagem.select();
    document.execCommand("copy");
        
    alert('Texto copiado!')
}

function recarregar(){
    
    location.reload();
}

