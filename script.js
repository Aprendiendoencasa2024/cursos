// Función para mostrar la pestaña correspondiente
function mostrarPestaña(pestañaId) {
    const pestañas = document.querySelectorAll('.pestaña');
    pestañas.forEach(pestaña => pestaña.classList.remove('active'));
    document.getElementById(pestañaId).classList.add('active');
}

// Función para mostrar/ocultar el menú lateral
function toggleMenu() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('open');
}

// Función para mostrar la sección "Sobre Nosotros"
function mostrarSobreNosotros() {
    const sobreNosotros = document.querySelector('.sobre-nosotros');
    sobreNosotros.classList.toggle('active');
}

// Evento para cargar la sección "Sobre Nosotros" cuando se haga clic en el botón del menú
document.getElementById("btn-sobre-nosotros").addEventListener("click", mostrarSobreNosotros);

// Al cargar la página, mostrar la pestaña de "inicio" por defecto
document.addEventListener("DOMContentLoaded", () => {
    mostrarPestaña('inicio');
});
