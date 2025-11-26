/* ==========================================================
   MAIN.JS — Lógica general (Formulario de contacto)
   ========================================================== */

document.addEventListener('DOMContentLoaded', () => {
    
    console.log("Sistema de la Vanguardia: Iniciado.");

    const contactForm = document.getElementById('contact-form');
    const feedbackBox = document.getElementById('form-feedback');

    // Solo ejecutamos si el formulario existe
    if (contactForm) {
        
        contactForm.addEventListener('submit', (e) => {
            
            // 1. DETENER EL ENVÍO REAL
            e.preventDefault(); 
            
            // Verificación de seguridad: Si falta la caja, avisamos y no seguimos
            if (!feedbackBox) {
                alert("ERROR TÉCNICO: Falta el elemento <div id='form-feedback'> en tu HTML. Revisa el código.");
                return;
            }

            console.log("Envío interceptado. Procesando...");

            // 2. OBTENER DATOS
            const nameInput = document.getElementById('name');
            const guardianName = nameInput ? nameInput.value : 'Guardián';

            // 3. MOSTRAR MENSAJE
            feedbackBox.classList.remove('hidden');
            
            // Pequeño retraso para la animación CSS
            setTimeout(() => {
                feedbackBox.classList.add('success');
                feedbackBox.innerHTML = `✅ ¡Transmisión enviada con éxito, <strong>${guardianName}</strong>! La Vanguardia ha recibido tu mensaje.`;
            }, 10);

            // 4. LIMPIAR FORMULARIO
            contactForm.reset();

            // 5. OCULTAR AUTOMÁTICAMENTE
            setTimeout(() => {
                feedbackBox.classList.remove('success');
                // Esperar a que termine la transición de opacidad
                setTimeout(() => {
                    feedbackBox.classList.add('hidden');
                    feedbackBox.innerHTML = '';
                }, 500);
            }, 6000);
        });
    }
});