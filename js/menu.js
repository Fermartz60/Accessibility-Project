/* ==========================================================
   MENU.JS — Control accesible del menú de navegación
   ========================================================== */

document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Seleccionamos los elementos del HTML
    const menuToggle = document.getElementById('menu-toggle');
    const menu = document.getElementById('menu');

    // Verificamos que existan para evitar errores
    if (!menuToggle || !menu) return;

    // 2. Escuchamos el "click" en el botón hamburguesa
    menuToggle.addEventListener('click', () => {
        
        // Verificamos si el menú está abierto o cerrado actualmente
        // "aria-expanded" nos dice "true" (abierto) o "false" (cerrado)
        const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';

        // 3. Cambiamos el estado (Si estaba abierto, lo cerramos, y viceversa)
        // .toggle('open') añade o quita la clase CSS que muestra el menú
        menu.classList.toggle('open');

        // 4. ACTUALIZACIÓN DE ACCESIBILIDAD (¡Muy importante!)
        // Le decimos al lector de pantalla el nuevo estado
        menuToggle.setAttribute('aria-expanded', !isExpanded);

        // Opcional: Cambiar el ícono de hamburguesa (☰) a una X visualmente
        if (!isExpanded) {
            menuToggle.innerHTML = '✕'; // Muestra una X
            menuToggle.setAttribute('aria-label', 'Cerrar menú de navegación');
        } else {
            menuToggle.innerHTML = '☰'; // Vuelve a la hamburguesa
            menuToggle.setAttribute('aria-label', 'Abrir menú de navegación');
        }
    });

    // 5. Cerrar menú al presionar la tecla ESCAPE (Buena práctica de teclado)
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && menu.classList.contains('open')) {
            menu.classList.remove('open');
            menuToggle.setAttribute('aria-expanded', 'false');
            menuToggle.innerHTML = '☰';
            menuToggle.focus(); // Devolvemos el foco al botón
        }
    });
});