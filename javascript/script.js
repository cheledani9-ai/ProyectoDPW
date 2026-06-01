//Modal Registro

function abrirModal() {
    document.getElementById("modal").classList.add("activo");
}

function cerrarModal() {
    document.getElementById("modal").classList.remove("activo");
}

window.onclick = function(e) {
    let modal = document.getElementById("modal");
    if (e.target === modal) {
        modal.classList.remove("activo");
    }
}

//Modal Inicio de sesion

function abrirModalLogin() {
    document.getElementById('modalLogin').classList.add ('activo');
}

function cerrarModalLogin() {
    document.getElementById('modalLogin').classList.remove ('activo');
}

window.addEventListener ('click', function(e) {
    const modal = document.getElementById('modalLogin');
    if (e.target === modal) {
        cerrarModalLogin();
    }
});




// boton hamburguesa
function toggleMenu() {
    document.querySelector('.menu').classList.toggle('abierto');
    document.querySelector('.registro').classList.toggle('abierto');
}


