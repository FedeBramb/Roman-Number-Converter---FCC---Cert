const inputNumber = document.getElementById('number');
const convertButton = document.getElementById('convert-btn');
const resultContainer = document.getElementById('output');

resultContainer.classList.add("hidden");

function showError(message) {
    resultContainer.classList.remove("hidden");
    resultContainer.classList.add("alert");
    resultContainer.innerHTML = message;
}

function isValidInput() {
    let numero = parseInt(inputNumber.value, 10);

    if (isNaN(numero) || inputNumber.value === "") {
        showError("Please enter a valid number");
        return false;
    } else if (numero < 1) {
        showError("Please enter a number greater than or equal to 1.");
        return false;
    } else if (numero >= 4000) {
        showError("Please enter a number less than or equal to 3999");
        return false;
    }

    return true;
}

const toRoman = () => {
    resultContainer.classList.add("hidden"); // Nasconde i risultati al click successivo

    if (!isValidInput()) {
        return; // Esce dalla funzione se l'input non è valido
    }

    let numero = parseInt(inputNumber.value, 10);
    const romanNumber = [
        [1000, 'M'],
        [900, 'CM'],
        [500, 'D'],
        [400, 'CD'],
        [100, 'C'],
        [90, 'XC'],
        [50, 'L'],
        [40, 'XL'],
        [10, 'X'],
        [9, 'IX'],
        [5, 'V'],
        [4, 'IV'],
        [1, 'I']
    ];

    let result = '';

    for (let i = 0; i < romanNumber.length; i++) {
        while (numero >= romanNumber[i][0]) {
            result += romanNumber[i][1];
            numero -= romanNumber[i][0];
        }
    }
    resultContainer.classList.remove("hidden");
    resultContainer.innerHTML = result;
}

convertButton.addEventListener("click", toRoman);
document.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        toRoman();
    }
  });
