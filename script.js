document.getElementById("colorVerde").addEventListener("input", function () {
    document.querySelector(".verde").style.backgroundColor = this.value;
    document.getElementById("codigoVerde").textContent = this.value;
});
document.getElementById("colorRojo").addEventListener("input", function () {
    document.querySelector(".rojo").style.backgroundColor = this.value;
    document.getElementById("codigoRojo").textContent = this.value;
});

