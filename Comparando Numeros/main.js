
const Number_A = document.getElementById("Number_A");
const Number_B = document.getElementById("Number_B");
const message_suc = document.getElementById('success-message');
const message_Err = document.getElementById('Error-message');


form.addEventListener('submit', function(e){
    e.preventDefault();
    
    const mensagem_A = `${Number_A.value} Maior ${Number_B.value}`;
    const mensagem_B = `${Number_B.value} Maior ${Number_A.value}`;
    const mensagem_C = `Os numeros são idênticos`;

    if (Number(Number_A.value) && Number(Number_B.value)){
        if (Number(Number_A.value) > Number(Number_B.value)) {
            message_suc.innerHTML = mensagem_A;
            message_suc.style.display = 'flex';
            message_Err.style.display = 'none';
        } 
        else if (Number(Number_A.value) < Number(Number_B.value)){
            message_suc.innerHTML = mensagem_B;
            message_suc.style.display = 'flex';
            message_Err.style.display = 'none';
        } 
        else {
            message_suc.innerHTML = mensagem_C;
            message_suc.style.display = 'flex';
            message_Err.style.display = 'none';
        }
    }else{
        message_suc.style.display = 'none';
        message_Err.style.display = 'flex';
    }
});


