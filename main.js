const form = document.getElementById ('form-valor');
const primeiroCampo = document.getElementById('campoA');
const segundoCampo = document.getElementById('campoB');
const containerMensagemErro = document.querySelector('.error-message');
const containerMensagemSucesso = document.querySelector('.sucss-message');
let formNvalido = false;



form.addEventListener ('submit', function(e) {
    e.preventDefault();

    function compara (campoA,campoB){
        let naoValido = campoB < campoA
        return naoValido
    }
    let campoA = document.getElementById('campoA').value
    campoA = parseInt (campoA)
    let campoB = document.getElementById('campoB').value
    campoB = parseInt (campoB)

    const mensagemSucss = `<b> Tudo certo ! O segundo valor é maior que o primeiro, Parabéns ! </b>`
    const mensagemErro = `<b> ERRO, O primeiro valor é maior que o segundo valor </b> !`
    
    formNvalido = compara (campoA,campoB)

    if (formNvalido){
        const containerMensagemErro = document.querySelector('.error-message')
        containerMensagemErro.innerHTML = mensagemErro
        containerMensagemErro.style.display = 'block';
        primeiroCampo.style.border = '1px solid red';
    }
    else {
        const containerMensagemSucesso = document.querySelector('.sucss-message')
        containerMensagemSucesso.innerHTML = mensagemSucss
        containerMensagemSucesso.style.display = 'block';
        segundoCampo.style.border = '1px solid green';
    }

})

segundoCampo,primeiroCampo.addEventListener('keyup', function (e) {
    console.log(e.target.value);
    formNvalido = (e.target.value)

    if (formNvalido == ''){
        primeiroCampo.style.border = 'none';
        containerMensagemErro.style.display = 'none';
        containerMensagemSucesso.style.display = 'none';
        segundoCampo.style.border = 'none'
    }
});


