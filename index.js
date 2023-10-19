// for show and hide password:
const pasInput = document.getElementById("password");
const eye = document.getElementById("eye");
eye.addEventListener('click', function () {
    if (pasInput.type === "password") {
        pasInput.type = "text";
    }
    else {
        pasInput.type = "password";
        pasInput.classList.add("visible");
    }
});

const pasInput1 = document.getElementById("password2");
document.getElementById("eye2").addEventListener('click', function () {
    if (pasInput1.type === "password") {
        pasInput1.type = "text";
    }
    else {
        pasInput1.type = "password";
    }
});

function checkStrength() {
    const passStrength1 = document.getElementById("passwordStrength1");
    
    var passwordLength1 = document.getElementById("password").value.length;
    
    if(passwordLength1 > 8)
    {
        passStrength1.textContent = "Strong";
        passStrength1.style.color = "#0cefoc";
    }
    else if(passwordLength1 >= 6){
        passStrength1.textContent = "Medium";
        passStrength1.style.color = "orange";

    }else if(passwordLength1 < 6 && passwordLength1 != 0){
        passStrength1.textContent = "Weak";
        passStrength1.style.color = "red";
    }
}
function checkStrength2() {
    const passStrength2 = document.getElementById("passwordStrength2");
    var passwordLength2 = document.getElementById("password2").value.length;
    if(passwordLength2 > 8)
    {
        passStrength2.textContent = "Strong";
        passStrength2.style.color = "#0cefoc";
    }
    else if(passwordLength2 >= 6){
        passStrength2.textContent = "Medium";
        passStrength2.style.color = "orange";

    }else if(passwordLength2 < 6 && passwordLength2 != 0){
        passStrength2.textContent = "Weak";
        passStrength2.style.color = "red";
    }
}

