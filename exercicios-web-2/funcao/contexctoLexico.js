const valor = 'Global';

function minhaFuncao() {
    console.log(valor);
};

function exec() {
    const valor = 'Local';
    minhaFuncao();
}

exec()

function minhafuncao2(valorVar) {
    console.log(valorVar);
}

function exec2() {
    const valor2 = 'Local'
    minhafuncao2(valor2);
}

exec2();