const form = document.getElementById('formulario');
const arrayNome = [];
const arrayTel = [];
let linhas = "";


form.addEventListener('submit', function(e) {
    e.preventDefault();
    adicionaContato();
    totalContatos();
});

function adicionaContato() {
    const inputNome = document.getElementById('inputNome');
    const inputTelefone = document.getElementById('inputTelefone');

    if (arrayTel.includes(inputTelefone.value)) {
        alert(`O telefone ${inputTelefone.value} já foi inserido`);
    } else {
        arrayNome.push(inputNome.value);
        arrayTel.push(inputTelefone.value);

        const novaLinha = `<tr>
            <td>${inputNome.value}</td>
            <td>${inputTelefone.value}</td>
        </tr>`;

        linhas += novaLinha;

        const corpoTabela = document.querySelector('tbody');
        corpoTabela.innerHTML = linhas;

        inputNome.value = "";
        inputTelefone.value = "";
    }
}

function totalContatos(){
    const somaContatos = arrayNome.length;
    document.getElementById('totalContatos').innerHTML = somaContatos;
}