let length = document.querySelector(".token-length input");
let options = document.querySelectorAll(".checkboxes-box div input");
let generateBtn = document.querySelector(".generate-btn");
let token = document.querySelector(".token");

const characters = {
    lowercase: "abcdefghijklmnopqrstuvwxyz",
    numbers: "0123456789",
};

function getCheckCharacter() {
    let checks = []
    options.forEach((option) => {
        if (option.checked) {
            checks.push(characters[option.id]);
        }
    });
    return checks;
}

function generateRandomCharacter(type) {
    return type[Math.floor(Math.random() * type.length)];
}

function generateToken(length, checks) {
    let tokenText = "";

    // pelo menos um caractere de cada tipo seja incluído
    for (let i = 0; i < checks.length; i++) {
        tokenText += generateRandomCharacter(checks[i]);
    }

    for (let i = tokenText.length; i < length; i++) {
        let type = checks[Math.floor(Math.random() * checks.length)];
        tokenText += generateRandomCharacter(type);
    }

    return tokenText;
}

function tokenLenght() {
    document.querySelector(".length-value").innerHTML = length.value;
}

function generateDisplayToken() {
    let tokenLength = length.value;
    let checks = getCheckCharacter();

    if (checks.length === 0) {
        alert("Selecione pelo menos uma opção");
        return;
    }

    let tokenText = generateToken(tokenLength, checks);
    token.innerHTML = tokenText;
    localStorage.setItem('token', tokenText); // armazena o token no localStorage
}

generateBtn.addEventListener('click', generateDisplayToken);
length.addEventListener('input', tokenLenght);