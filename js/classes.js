/* ==========================================================
   CLASSES.JS — Lógica para cargar contenido dinámico
   ========================================================== */

const classes = {
    titan: {
        name: "Titán",
        logo: "assets/logos/logotitan2.png",
        logoAlt: "Emblema de la clase Titán",
        image: "assets/img/titan2.jpg",
        altDesc: "Guardián clase Titán con armadura pesada",
        description: "Guerreros fortificados con armadura pesada que lideran el ataque. Los Titanes son la muralla contra la cual la Oscuridad se estrella.",
        playstyle: "Tanque de alta resistencia enfocado en combate cercano y apoyo defensivo del equipo.",
        
        // NUEVA ESTRUCTURA: Subclases detalladas
        subclasses: [
            {
                name: "Asaltante",
                element: "Arco",
                color: "arc", // Clase CSS para el color
                superName: "Puño del Caos",
                desc: "Canaliza energía de arco para devastar enemigos con ataques cuerpo a cuerpo electrificantes."
            },
            {
                name: "Defensor",
                element: "Vacío",
                color: "void",
                superName: "Amparo del Alba",
                desc: "Genera una burbuja de luz invencible que protege a los aliados dentro de ella."
            },
            {
                name: "Quiebrasoles",
                element: "Solar",
                color: "solar",
                superName: "Martillo de Sol",
                desc: "Invoca un martillo de fuego que puede lanzarse para crear devastadoras explosiones."
            }
        ]
    },

    hunter: {
        name: "Cazador",
        logo: "assets/logos/logocaza.png",
        logoAlt: "Emblema de la clase Cazador",
        image: "assets/img/Cazador2.jpg",
        altDesc: "Guardián clase Cazador con capa",
        description: "Ágiles, letales y precisos. Maestros de la frontera y el sigilo.",
        playstyle: "DPS móvil especializado en daño crítico, agilidad y trampas.",
        
        subclasses: [
            {
                name: "Pistolero",
                element: "Solar",
                color: "solar",
                superName: "Pistola Dorada",
                desc: "Invoca una pistola llameante que desintegra a los enemigos con luz solar pura."
            },
            {
                name: "Acróbata del Filo",
                element: "Arco",
                color: "arc",
                superName: "Hoja de Arco",
                desc: "Carga tu hoja con energía de arco y conviértete en un rayo letal en el campo de batalla."
            },
            {
                name: "Acechador",
                element: "Vacío",
                color: "void",
                superName: "Tiro en la Sombra",
                desc: "Dispara una flecha de vacío que ata y debilita a los enemigos cercanos."
            }
        ]
    },

    warlock: {
        name: "Hechicero",
        logo: "assets/logos/logohechicero.png",
        logoAlt: "Emblema de la clase Hechicero",
        image: "assets/img/Hechicero.jpg",
        altDesc: "Guardián clase Hechicero con túnica",
        description: "Místicos del Viajero. Combinan daño devastador con soporte arcano.",
        playstyle: "Clase versátil con alto poder de habilidad, recuperación y control de zona.",
        
        subclasses: [
            {
                name: "Viajero del Vacío",
                element: "Vacío",
                color: "void",
                superName: "Bomba Nova",
                desc: "Lanza un perno explosivo de luz de vacío que desintegra a los enemigos atrapados en la explosión."
            },
            {
                name: "Aedo del Sol",
                element: "Solar",
                color: "solar",
                superName: "Radiancia",
                desc: "Llénate de luz solar para reducir el enfriamiento de habilidades y revivirte a ti mismo."
            },
            {
                name: "Invocatormentas",
                element: "Arco",
                color: "arc",
                superName: "Trance",
                desc: "Flota sobre el campo de batalla y electrocuta a múltiples enemigos con rayos de tus manos."
            }
        ]
    }
};

const content = document.getElementById("class-content");
const buttons = document.querySelectorAll('.class-buttons button');

function loadClass(classKey) {
    const c = classes[classKey];

    // Generamos las tarjetas de habilidades (HTML)
    const abilitiesHTML = c.subclasses.map(sub => `
        <div class="ability-card border-${sub.color}">
            <div class="ability-header">
                <!-- Icono del elemento (Círculo coloreado) -->
                <div class="element-icon bg-${sub.color}" aria-hidden="true"></div>
                <div class="ability-title">
                    <h4>${sub.name}</h4>
                    <span class="element-name text-${sub.color}">${sub.element}</span>
                </div>
            </div>
            <div class="ability-body">
                <p class="super-label text-${sub.color}">Súper: ${sub.superName}</p>
                <p class="ability-desc">${sub.desc}</p>
            </div>
        </div>
    `).join("");

    content.innerHTML = `
        <div class="class-img-wrapper">
            <img src="${c.image}" alt="${c.altDesc}" class="class-main-img">
        </div>
        
        <div class="class-info-text">
            
            <div class="class-title-header">
                <img src="${c.logo}" alt="${c.logoAlt}" class="class-logo-icon">
                <h3>${c.name}</h3>
            </div>

            <p class="class-description">${c.description}</p>

            <div class="playstyle-box">
                <strong>Estilo de juego:</strong> ${c.playstyle}
            </div>

            <h4 class="abilities-section-title">Subclases y Habilidades</h4>
            
            <!-- Aquí insertamos la cuadrícula de tarjetas -->
            <div class="abilities-grid">
                ${abilitiesHTML}
            </div>
        </div>
    `;
}

if (buttons.length > 0) {
    buttons.forEach(btn => {
        btn.addEventListener("click", () => {
            buttons.forEach(b => b.setAttribute("aria-selected", "false"));
            btn.setAttribute("aria-selected", "true");
            if (btn.dataset.class) loadClass(btn.dataset.class);
        });
    });
    loadClass("titan");
}