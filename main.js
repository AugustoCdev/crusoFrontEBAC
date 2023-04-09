const form = document.getElementById('formulario');
const nome = [];
const tel = [];
let linhas = '';


form.addEventListener('submit' , function(e)
{
    e.preventDefault();

    criarLinhas();
    atualizaTabela();

})

function criarLinhas() {
    const inputNome = document.getElementById('nome');
    const inputTel = document.getElementById('tel');


    nome.push(inputNome.value);
    tel.push(parseInt(inputTel.value));

    let linha = `<tr>`;
    linha += `<td>${inputNome.value}</td>`;
    linha += `<td>${inputTel.value}</td>`;
    linha += `</tr>`;

    linhas += linha

    inputNome.value = "";
    inputTel.value = "";
} 

function atualizaTabela() {

    const corpoDaTabela = document.querySelector('tbody')
    corpoDaTabela.innerHTML = linhas;
}