/* ==========================================================
   VIDEO.JS — Lógica de Transcripción y Salto de Tiempo
   ========================================================== */

document.addEventListener("DOMContentLoaded", () => {

    // 1. Elementos Principales
    const mainPlayer = document.getElementById("main-player");
    const btnTranscript = document.getElementById("btn-toggle-transcript");
    const transcriptPanel = document.getElementById("transcript-panel");

    // ==========================================================
    // CONTROL: MOSTRAR / OCULTAR TRANSCRIPCIÓN
    // ==========================================================
    if (btnTranscript && transcriptPanel) {
        btnTranscript.addEventListener("click", () => {
            const isExpanded = btnTranscript.getAttribute("aria-expanded") === "true";
            
            if (isExpanded) {
                // OCULTAR
                transcriptPanel.hidden = true;
                btnTranscript.setAttribute("aria-expanded", "false");
                btnTranscript.classList.remove("active");
                btnTranscript.textContent = "📜 Ver Transcripción Completa (Diálogos y Descripción)";
            } else {
                // MOSTRAR
                transcriptPanel.hidden = false;
                btnTranscript.setAttribute("aria-expanded", "true");
                btnTranscript.classList.add("active");
                btnTranscript.textContent = "📜 Ocultar Transcripción";
                
                // Pausar video para que el usuario lea con calma
                if (mainPlayer) mainPlayer.pause();

                // Scroll suave hacia la transcripción
                setTimeout(() => {
                    transcriptPanel.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }, 100);
            }
        });
    }

    // ==========================================================
    // CONTROL: SALTO DE TIEMPO (INTERACTIVIDAD)
    // ==========================================================
    const timeButtons = document.querySelectorAll(".time-jump");

    timeButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            // Obtenemos el tiempo del atributo data-time="15"
            const time = parseFloat(btn.dataset.time);
            
            if (mainPlayer && !isNaN(time)) {
                // Movemos el video a ese segundo
                mainPlayer.currentTime = time;
                // Reproducimos automáticamente para continuidad
                mainPlayer.play();
                
                // Scroll suave hacia el video para que el usuario vea lo que seleccionó
                mainPlayer.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
        });
    });

});