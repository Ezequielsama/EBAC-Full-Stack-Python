
const form = document.getElementById('formContatos');
const Telefone = document.getElementById('Telefone');

var Linhas = '';

Contatos = [];
Telephone = [];

form.addEventListener('submit', function(e){
    e.preventDefault();

    gitLista()

});


function gitLista(){

    const NomeCompleto = document.getElementById('NomeCompleto');
    const Telefone = document.getElementById('Telefone');

    if (Telephone.includes(Telefone.value)){

        var AlertMsg = `+${Telefone.value} Ja foi Agendado verifique em seus agendamentos<img src="img/stop.ico" alt="">`;
        alert(AlertMsg)
    }
    else{
        Contatos.push(NomeCompleto.value);
        Telephone.push(Telefone.value);

        let linha = `<li>Nome: ${NomeCompleto.value}<br> Numero: ${Telefone.value}</li>`;
        Linhas += linha;
        
        const listCass = document.getElementById('list');
        listCass.innerHTML = Linhas;

    }

    NomeCompleto.value = '';
    Telefone.value ='';

}


Telefone.addEventListener('keyup', function(e){

    var limparvalor = Telefone.value.replace(/\D/g, "").substring(0, 13);

    var numerolimpo = limparvalor.split("")
    
    var numeroTelefone = '';

    if(numerolimpo.length > 0){
        numeroTelefone += `+(${numerolimpo.slice(0,2).join("")})`
    }

    if(numerolimpo.length > 2){
        numeroTelefone += ` ${numerolimpo.slice(2,4).join("")}`
    }

    if(numerolimpo.length > 4){
        numeroTelefone += ` ${numerolimpo.slice(4,9).join("")}`
    }
    if(numerolimpo.length > 9){
        numeroTelefone += `-${numerolimpo.slice(9,20).join("")}`
    }

    Telefone.value = numeroTelefone;

});
