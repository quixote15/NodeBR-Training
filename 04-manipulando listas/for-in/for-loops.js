const service = require('./service');

async function main(){
    try {
        const response = await service.obterPessoas('a');
        let names  = [];
        console.time('for');
        for(let i = 0; i <= response.results.length-1; i++){
            let {name} = response.results[i];
            names.push(name);
        }
        console.timeEnd('for');

        console.time('forin');
        for(let i in response.results){
            let {name} = response.results[i];
            names.push(name);
        }
        console.timeEnd('forin');

        console.time('forof');
        for(pessoa of response.results){
            let {name} = pessoa;
            names.push(name);
        }
        console.timeEnd('forof');


        console.log(names);
    } catch (error) {
        console.error(`erro interno ${error}`);
    }
}

main();