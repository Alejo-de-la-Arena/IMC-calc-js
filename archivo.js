function calcularIMC() {
    let numSets = parseInt(prompt("Ingrese el número de conjuntos de peso y altura que desea calcular:"));
    for (let i = 1; i <= numSets; i++) {
        let peso = parseFloat(prompt("Ingrese el peso (kg) del conjunto " + i + ":"));
        let altura = parseFloat(prompt("Ingrese la altura (cm) del conjunto " + i + ":"));

        if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
            alert("Datos incorrectos para el conjunto " + i + ", ingrese nuevamente.");
            i--;
            continue;
        }
        let imc = peso / ((altura / 100) ** 2); {
            let categoria;
            if (imc >= 30) {
                categoria = "Obesidad";
            } else if (imc >= 25 && imc <= 29.9) {
                categoria = "Peso superior al normal";
            } else if (imc >= 18.5 && imc < 24.9) {
                categoria = "Peso Normal";
            } else {
                categoria = "Peso inferior al normal";
            }
            alert("El IMC del conjunto " + i + " es: " + imc.toFixed(2) + ". Categoría: " + categoria);
        }
    }
}



