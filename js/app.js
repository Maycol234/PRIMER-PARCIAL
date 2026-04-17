
const proyectos = [
    {
        nombre: "APP Programación",
        descripcion: "Aplicación de programación - Primer parcial",
        enlace: "https://github.com/Maycol234/APP_PROGRAMACION",
        icono: "💻"
    },
    {
        nombre: "Streaming HTML5",
        descripcion: "Plataforma de streaming desarrollada en HTML5",
        enlace: "https://github.com/Maycol234/Streaming_HTML5",
        icono: "🎬"
    },
    {
        nombre: "P3 iOS Ejemplo App",
        descripcion: "Aplicación ejemplo para iOS",
        enlace: "https://github.com/Maycol234/P3_IOS_EJEMPLOAPP",
        icono: "🍎"
    },
    {
        nombre: "APP iOS",
        descripcion: "Aplicación iOS desarrollada",
        enlace: "https://github.com/Maycol234/APP_IOS",
        icono: "📲"
    },
    {
        nombre: "Sitio Web HTML5",
        descripcion: "Sitio web profesional en HTML5",
        enlace: "https://github.com/Maycol234/SITIO_WEB_HTML5",
        icono: "🌐"
    },
    {
        nombre: "Práctica 2 - Sub2",
        descripcion: "Práctica 2 - Subtema 2 del primer parcial",
        enlace: "https://github.com/Maycol234/practica2-sub2-KevinMichell",
        icono: "📝"
    }
];


function cargarProyectos() {
    const contenedor = document.getElementById('proyectos');
    
    proyectos.forEach(proyecto => {
        const card = document.createElement('div');
        card.className = 'proyecto-card';
        
        card.innerHTML = `
            <h3>${proyecto.icono} ${proyecto.nombre}</h3>
            <p>${proyecto.descripcion}</p>
            <a href="${proyecto.enlace}" target="_blank" class="btn">Ver en GitHub</a>
        `;
        
        contenedor.appendChild(card);
    });
}


document.addEventListener('DOMContentLoaded', cargarProyectos);
