const misDatos = {
    datosPerso: [
        "¡Hey! Soy Moisés, Desarrollador de Aplicaciones Web",
        `Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        Perspiciatis minima aliquam impedit. Sapiente dolorum rem velit id ipsa architecto veniam.
        Itaque magnam nulla molestias error totam, quidem minus odio culpa? `,
        "Moisés Alejandro Campos Perdomo", 
        "07. 10. 2003", 
        "moisescamposdaw@gmail.com", 
        "(+34) 603 123 456",
        "Canarias, España",
        "<a href='https://www.linkedin.com/in/moisescap/'><img src='img/linkedin.png' width='26px'></a>",
        "<a href='https://github.com/MoisesCDAW'><img src='img/github.png' width='26px'></a>",
        "<a href='https://www.instagram.com/moisescamposp/'><img src='img/instagram.png' width='26px'></a>"
    ],
    estudios: [
        {
            estudio: "Bachillerato",
            inicio: "Septiembre de 2015",
            fin: "Julio de 2020",
            sede: "Colegio Decroly",
            ubicacion: "Venezuela"
        },
        {
            estudio: "FP en Desarrollo de Aplicaciones Web",
            inicio: "Septiembre de 2023",
            fin: "Actualidad",
            sede: "IES José María Pérez Pulido",
            ubicacion: "La Palma, España"
        }
    ],
    experiencia: [
        {
            puesto: "Soporte Técnico",
            inicio: "Enero de 2022",
            fin: "Julio de 2022",
            sede: "Innovate Web",
            ubicacion: "España",
            descripcion: `Me encargué de proporcionar soporte técnico para las páginas web de los clientes 
            y de resolver los inconvenientes técnicos internos de la empresa cuando surgían`
        },
        {
            puesto: "Desarrollador Full Stack",
            inicio: "Julio de 2022",
            fin: "Actualidad",
            sede: "Innovate Web",
            ubicacion: "España",
            descripcion: `Me encargo del desarrollo y mantenimiento de aplicaciones web, 
            trabajando tanto en el frontend como en el backend. Además, me ocupé de la integración de bases de datos 
            y de resolver problemas técnicos para garantizar el buen funcionamiento de las plataformas.`
        }
    ],
    proyectos: [
        {
            codigo: 1,
            url: "mixapp.moisescap.com",
            titulo: "MIXAPP",
            img: "img/portada_mixapp.png",
            descripcion: `Es un programa con utilidades variadas. Contiene un tipo test y un juego de memorias sobre Los Simpsons.
            También posee un formulario con la finalidad de llevar un control de la distribución de un producto`
        },
        {
            codigo: 2,
            url: "calendario.moisescap.com",
            titulo: "Calendario",
            img: "img/portada_calendario.png",
            descripcion: `Calendario que muestra los días festivos del 2024 de Canarias. Permite filtrar por islas y marcar como favoritos a los festivos`
        },
        {
            codigo: 3,
            url: "trivia.moisescap.com",
            titulo: "Trivia",
            img: "img/portada_trivia.png",
            descripcion: `Es un trivia con 10 preguntas de todo tipo de temas. Posee un temporizador para medir el tiempo de respuesta y 
            un sistema de puntaje que mantiene el puntaje máximo de un usuario`
        }
    ]
}; 


/**
 * Crea el DOM de título con el nombre y la descripción del inicio
 */
function sobreMi(body, enlaceScript) {
    let contenedor_SobreMi = document.createElement("div");
    let tituloNombre = document.createElement("h2");
    let miDescripcion = document.createElement("p");

    body.insertBefore(contenedor_SobreMi, enlaceScript);

    contenedor_SobreMi.classList.add("sobreMi");
    contenedor_SobreMi.appendChild(tituloNombre);
    contenedor_SobreMi.appendChild(miDescripcion);

    tituloNombre.appendChild(document.createTextNode(misDatos.datosPerso[0]));
    miDescripcion.appendChild(document.createTextNode(misDatos.datosPerso[1]));
}


/**
 * Crea el DOM de los datos personales
 */
function datosPersonales(body, enlaceScript) {
    const titulos = ["nombre", "nacimiento", "email", "telefono", "ubicacion"];
    const redes = ["linkedIn", "github", "instagram"];

    let contenedor_datosPerso = contenedor_dato = titulo = info = "";
    let contador = 2;

    contenedor_datosPerso = document.createElement("div");
    contenedor_datosPerso.classList.add("datos-personales");

    body.insertBefore(contenedor_datosPerso, enlaceScript);

    // Crea <div> desde "nombre" hasta "ubicación"
    for (let i = 0; i < titulos.length; i++) {
        
        contenedor_dato = document.createElement("div");
        contenedor_dato.classList.add("dato");

        titulo = document.createElement("h2");
        info = document.createElement("p");

        contenedor_datosPerso.appendChild(contenedor_dato);
        contenedor_dato.appendChild(titulo);
        contenedor_dato.appendChild(info);

        titulo.appendChild(document.createTextNode(titulos[i].toUpperCase()));
        info.appendChild(document.createTextNode(misDatos.datosPerso[contador]));
        contador++;
    }

    // Crea <div> "social"
    contador = 7;
    contenedor_dato = document.createElement("div");
    contenedor_dato.classList.add("dato");
    contenedor_datosPerso.appendChild(contenedor_dato);
    
    titulo = document.createElement("h2");
    contenedor_dato.appendChild(titulo);

    titulo.appendChild(document.createTextNode("SOCIAL"));
    for (let i = 0; i < 3; i++) {
        enlace = document.createElement("a");
        contenedor_dato.appendChild(enlace);
        enlace.appendChild(document.createTextNode(misDatos.datosPerso[contador]));
        contador++;
    }

}


/**
 * =========== INICIO ===========
 */
function inicio() {
    let body = document.getElementsByTagName("body")[0];
    let enlaceScript = document.getElementById("enlaceScript");

    sobreMi(body, enlaceScript);
    datosPersonales(body, enlaceScript);
}


inicio();