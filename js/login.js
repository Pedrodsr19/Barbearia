let botaoLogin = document.getElementById('logar')
let inputEmailLogin = document.getElementById("inputEmailLogin")
let inputSenhaLogin = document.getElementById("inputSenhaLogin")
const usuarioSalvo = JSON.parse(localStorage.getItem("usuario"))

botaoLogin.addEventListener("click", () => {
    if (localStorage.getItem("usuario") != null) {
        if (inputEmailLogin.value.trim() != "" && 
        inputSenhaLogin.value.trim() != "" && 
        inputEmailLogin.value.includes("@")) {
            if (usuarioSalvo.email === inputEmailLogin.value && usuarioSalvo.senha === inputSenhaLogin.value){
             alert("Bem Vindo de Volta")
             window.location.href = "home.html"
            } else {
                alert("Email ou Senhas Incorretos")
                return
            }
        } else {
            alert("Email ou Senha Invalidos")
            return
        }
    } else {
        alert("Nao existe um usuario cadastrado")
        return
    }
})