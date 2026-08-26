let botaoCadastrar = document.getElementById("cadastrar")
let inputNome = document.getElementById("inputNome")
let inputEmail = document.getElementById("inputEmail")
let inputSenha = document.getElementById("inputSenha")
const usuario = {}

function salvar() {
    const usuarioJSON = JSON.stringify(usuario)
    localStorage.setItem("usuario", usuarioJSON)
}

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