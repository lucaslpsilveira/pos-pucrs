console.log('hello world');
console.log('Fundamentos de computação e algoritmos');

function avaliaParidade(limiteSuperior){
    for(let i = 0; i <= limiteSuperior; i++){
        if(i % 2 == 0){
            console.log(i + ' - Par');
        }else{
            console.log(i + ' - Impar');
        }
    }
}

avaliaParidade(10);

