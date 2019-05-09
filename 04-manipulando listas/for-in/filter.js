const {obterPessoas} = require('./service');

Array.prototype.meuFilter = function (callback){
    let novoArrayFiltrado = [];

    for(let indice = 0; indice <= this.length-1; indice++){
        let podeAdicionarItem = callback(this[indice], indice, this); //returns a boolean
        if(podeAdicionarItem)
            novoArrayFiltrado.push(this[indice]);
    }

    return novoArrayFiltrado;
}


async function main(){
    try {
        const {results} = await obterPessoas('a');
        const familiaLars = results.meuFilter(function(pessoa){
            //por padrão retorna booleano
            //se false remove do array
            //se true mantem
            return pessoa.name.toLowerCase().indexOf('lars') !== -1;
        })

        const larsNames = familiaLars.map(pessoa => pessoa.name)
       
        console.log(larsNames)
    } catch (error) {
        console.error(`erro interno ${error}`);
    }
}

main();