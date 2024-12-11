let checkBtn = document.querySelector(".check-btn");
let tokenInput = document.querySelector("input.token-box");
let messageDiv = document.querySelector(".message");

checkBtn.addEventListener('click', () => {
    let tokenGerado = localStorage.getItem('token'); 
    let tokenDigitado = tokenInput.value;

    if (tokenGerado === tokenDigitado) {
        messageDiv.textContent = "Token correto!";
        messageDiv.style.color = "green"; 

        setTimeout(() => {
            window.location.href = 'index.html'; 
        }, 3000);
    } else {
        messageDiv.textContent = "Token incorreto. Tente novamente!";
        messageDiv.style.color = "red";
    }
});
