
const form = document.getElementById('form-atividade');
const img_aprovado = '<img src="img/aprovado.png" alt="aprovado" title="aprovado">';
const img_reprovado = '<img src="img/reprovado.png" alt="reprovado" title="reprovado">';

const notaMinima = parseInt(prompt('Digite a nota mínima:'))

document.getElementById('MediaFinal').innerHTML = 0;
document.querySelector('span').innerHTML = 'Nota Final';

var linhas = '';

var atividade = [];
var notas = [];

form.addEventListener('submit', function(e){
    e.preventDefault();

    AdicionarLinha();
    AtualizarLinha()

    media = MediaFinal()
    ResultadoFinal(media)

});


function AdicionarLinha(){

    const Nome_atividade = document.getElementById('Nome_atividade');
    const Nota_atividade = document.getElementById('Nota_atividade');

    if (atividade.includes(Nome_atividade.value)){
        alert(`Atividade: ${Nome_atividade.value} ja existe`)
    }
    else{
        atividade.push(Nome_atividade.value)
        notas.push(parseFloat(Nota_atividade.value))

        var linha = '<tr>';
        linha += `<td>${Nome_atividade.value}</td>`;
        linha += `<td>${Nota_atividade.value}</td>`;
        linha += `<td>${Nota_atividade.value >= notaMinima ? img_aprovado : img_reprovado}</td>`;
        linha += `</tr>`;
        linhas += linha;
    }

    Nome_atividade.value = '';
    Nota_atividade.value ='';

};

function AtualizarLinha(){

    const tbody = document.querySelector('tbody');
    tbody.innerHTML = linhas;
};

function MediaFinal(){

    let somasNotas = 0

    for (let i = 0; i < notas.length; i++){
        somasNotas += notas[i];
    }

    const media = somasNotas / notas.length;
    const Media_atividade = document.getElementById('MediaFinal');

    Media_atividade.innerHTML = media

    return media
}

function ResultadoFinal(media){
    
    
    const resultado = document.querySelector('span');

    if (media >= (notaMinima)){
        resultado.innerHTML = 'aprovado';
        resultado.classList.add("aprovado");
        resultado.classList.remove("reprovado");
    }
    else{
        resultado.innerHTML = 'reprovado';
        resultado.classList.add("reprovado");
        resultado.classList.remove("aprovado");
    }
}