const {obterPessoas} = require('./service');

Array.prototype.meuReduce = function(callback, valorInicial){
    
    let novoValorTotal = valorInicial === undefined ? 0:valorInicial;

    for(value of this){
        novoValorTotal = callback(novoValorTotal, value,this); 
    }

    return novoValorTotal;
}

async function main(){
    try {
        const {results} = await obterPessoas('a');

        const pesos = results.map(pessoa => parseInt(pessoa.height) )
        const total = pesos.meuReduce((anterior, proximo) => {
            console.log(`anterior + proximo = ${anterior} + ${proximo} `)
         
            return anterior + proximo;
        })

        const minhaList = [
            ['Tiago', 'Mateus'],
            ['DevMedia', 'geração foda-se']
        ];

        const oneList = minhaList.meuReduce((anterior, proximo) =>{
            return anterior.concat(proximo);
        },[])
        .join(',')
       
        console.log(pesos)
        console.log('total', total)

        console.log('Lista: ', oneList)
    } catch (error) {
        console.error(`erro interno ${error}`);
    }
}

main();