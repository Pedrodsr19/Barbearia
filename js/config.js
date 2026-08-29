let botaoSair = document.getElementById("botaoSair")

function salvarJson() {
    localStorage.setItem("ativo", "false")
}

botaoSair.addEventListener("click", () => {
    if (confirm("Deseja Sair da sua Conta?")) {
    salvarJson()
    window.location.href = "login.html"
    } else {
        return
    }
})