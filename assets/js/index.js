const form = document.querySelector('form');



//target mostra da onde vem o envento

form.addEventListener('submit', (e)=>{
    e.preventDefault();
    setResultado();
    const inputPeso = e.target.querySelector('#peso');
    const inputAltura = e.target.querySelector('#altura');
    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value)/100;

    if(!peso){
        setResultado('Peso inválido', false);
        return;
    }
    if(!altura){
        setResultado('Altura inválida', false);
        return;
    }

    const imc = getimc(peso, altura);

    function getimc(peso, altura){
        const imc = peso/altura ** 2;
        return imc.toFixed(2);
    }

    

    function getNivelImc(imc){
        const resultadoArray = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obesidade grau 1', 'Obesidade grau 2', 'Obresidade grau 3'];

        if(imc>= 39.9){return setResultado(`Calculo imc: ${imc} </br>Classificado como: ${resultadoArray[5]} `,true );}
        if(imc>= 34.9){return setResultado(`Calculo imc: ${imc} </br>Classificado como: ${resultadoArray[4]} `,true );}
        if(imc>= 29.9){return setResultado(`Calculo imc: ${imc} </br>Classificado como: ${resultadoArray[3]} `,true );}
        if(imc>= 24.9){return setResultado(`Calculo imc: ${imc} </br>Classificado como: ${resultadoArray[2]} `,true );}
        if(imc>= 18.5){return setResultado(`Calculo imc: ${imc} </br>Classificado como: ${resultadoArray[1]} `,true );}
                  else{return setResultado(`Calculo imc: ${imc} </br>Classificado como: ${resultadoArray[0]} `,true );}
    }

    

    if(peso && altura){

    getNivelImc(imc);


 }});

const setResultado = (msg, isValid)=>{
    const resultado = document.querySelector('.resultado');
    resultado.innerHTML = '';
    const p = criaP();
    resultado.appendChild(p);
    p.innerHTML = msg;
    if(isValid){
        p.classList.add('paragrafoResultado');
    }
    if(!isValid){

        p.classList.add('paragrafoNotResultado');
    
    }
}


const criaP = ()=>{
    const p = document.createElement('p');
    return p ;
   

}
