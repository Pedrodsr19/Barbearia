if (localStorage.getItem("ativo") === "true") {
    window.location.href = "home.html"
}

let botaoCadastrar = document.getElementById("cadastrar")
let inputNome = document.getElementById("inputNome")
let inputEmail = document.getElementById("inputEmail")
let inputSenha = document.getElementById("inputSenha")
const usuario = {}

function salvar() {
    const usuarioJSON = JSON.stringify(usuario)
    localStorage.setItem("usuario", usuarioJSON)
}

document.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        botaoCadastrar.click()
    }
})

botaoCadastrar.addEventListener("click", () => {
    if (localStorage.getItem("usuario") != null) {
        alert("Usuario já cadastrado")
        return
    }
    if (
        inputNome.value.trim() != "" && 
        inputEmail.value.trim() != "" && 
        inputSenha.value.trim() != "" && 
        inputEmail.value.includes("@")){
        usuario.nome = inputNome.value
        usuario.email = inputEmail.value
        usuario.senha = inputSenha.value
        salvar()
        window.location.href = "login.html"
    } else {
        alert("nao aura")
    }
})