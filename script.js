function calcularFactorial() {
    let input = document.getElementById('numero').value;

    let numero = Number(input);

    if (isNaN(numero)) {
        alert("Error: Debes ingresar un número válido.");
        return;
    }

    let factorial = 1;
    for (let i = 1; i <= numero; i++) {
        factorial *= i;
    }

    document.getElementById('resultado').innerText = `El factorial de ${numero} es: ${factorial}`;
}
