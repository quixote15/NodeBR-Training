const {
    deepEqual,
    ok
} = require('assert');

const database = require('./database');

const DEFAULT_ITEM_CADASTRAR = {
    id: 1,
    nome: 'flash',
    poder: 'speed'
};

describe('Suite de testes de manipulação de Herois', ()=>{

    it('Deve pesquisar por um herói, manipulando arquivos', async ()=>{
        const expected = DEFAULT_ITEM_CADASTRAR;
        const [resultado] = await database.listar(expected.id);
    
        deepEqual(resultado, expected);
    });


    // it('Deve cadastrar um herói, usando arquivos', async ()=>{
    //     const expected = DEFAULT_ITEM_CADASTRAR;

    //     ok(null, expected);
    // });
});