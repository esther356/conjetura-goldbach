window.onload = function() {
    alert("Bienvenido a la página sobre la Conjetura de Goldbach");
};

function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i < num; i++) {
        if (num % i === 0) return false;
    }
    return true;
}

function verifyGoldbach() {
    const number = parseInt(document.getElementById('number-input').value);
    if (number % 2 !== 0 || number <= 2) {
        document.getElementById('result').innerText = "Introduce un número par mayor que 2.";
        return;
    }
    
    let found = false;
    for (let i = 2; i <= number / 2; i++) {
        if (isPrime(i) && isPrime(number - i)) {
            document.getElementById('result').innerText = `${number} = ${i} + ${number - i}`;
            found = true;
            break;
        }
    }
    
    if (!found) {
        document.getElementById('result').innerText = "No se encontró una combinación de dos números primos.";
    }
}
