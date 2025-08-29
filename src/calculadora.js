function somarDoisNumeros (valor1, valor2) {
    const resultado = valor1 + valor2;
    return resultado;
}

function calcularMediaDeDoisNumeros (valor1, valor2) {
    // soma todos os valores;
    const resultadoSomaDeDoisValores = somarDoisNumeros(valor1, valor2);
    // divide pela quantidade de números passados;
    const resultadoMediaDeDoisValores = resultadoSomaDeDoisValores / 2;
    // Exibe o resultado.
    return resultadoMediaDeDoisValores;
}

function somarDoisValores (valor1, valor2) {
    const resultadoDaSoma = valor1 + valor2;
    return resultadoDaSoma;
}

function calcularMediaDeDoisNumeros (valor1, valor2) {
    const somandoDoisValores = somarDoisValores (valor1, valor2);
    const resultadoCalculoDeMediaDeDoisValores = somandoDoisValores /2;
    return resultadoCalculoDeMediaDeDoisValores;
}

module.exports = {
    somarDoisNumeros
}