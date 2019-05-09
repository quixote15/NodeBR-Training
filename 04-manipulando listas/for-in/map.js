const service = require('./service');

Array.prototype.meuMap = function (callback){
    let results = [];
    for(let indice = 0; indice <= this.length-1; indice++){
        let item = callback(this[indice], indice);
        results.push(item);
    }
    return results;
}

async function main(){
    try {
        const response = await service.obterPessoas('a');
        //let names  = [];
        // console.time('foreach');
        // response.results.forEach(function(item){
        //     names.push(item.name);
        // })
        // console.timeEnd('foreach');
        // console.time('map')
        // let names = response.results.map(pessoa => pessoa.name);
        
        // console.timeEnd('map')
        console.time('meuMap')
        let names = response.results.meuMap(function(pessoa, indice){
            return pessoa.name
        });
        
        console.timeEnd('meuMap')


        console.log(names);
    } catch (error) {
        console.error(`erro interno ${error}`);
    }
}

main();