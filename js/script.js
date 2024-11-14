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
        "https://www.linkedin.com/in/moisescap/",
        "https://github.com/MoisesCDAW",
        "https://www.instagram.com/moisescamposp/",
        "img/linkedin.png",
        "img/github.png",
        "img/instagram.png"
    ],
    conocimientos: [
        "img/skills/java.svg",
        "img/skills/javascript.svg",
        "img/skills/mysql.svg",
        "img/skills/php.svg",
        "img/skills/html.svg",
        "img/skills/css.svg",
        "img/skills/Bootstrap.svg",
        "img/skills/tailwind.svg",
        "img/skills/vuejs.svg",
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

    let contenedor_datosPerso = contenedor_dato = titulo = info = enlaces = "";
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
    contenedor_dato = document.createElement("div");
    contenedor_dato.classList.add("social");
    contenedor_datosPerso.appendChild(contenedor_dato);
    
    titulo = document.createElement("h2");
    contenedor_dato.appendChild(titulo);

    titulo.appendChild(document.createTextNode("SOCIAL"));

    enlaces = document.createElement("div");
    contenedor_dato.appendChild(enlaces);

    for (let i = 0; i < 3; i++) {
        let enlace = document.createElement("a");
        let img = document.createElement("img");
        img.setAttribute("src", misDatos.datosPerso[contador+3]);

        enlaces.appendChild(enlace);
        enlace.setAttribute("href", misDatos.datosPerso[contador]); 
        enlace.appendChild(img);
        contador++;
    }
}


/**
 * Crea el DOM para los conocimientos
 */
function conocimientos(body, enlaceScript) {
    let contendor_conoc = document.createElement("div");
    let contenedor_img = document.createElement("div");
    let h2 = document.createElement("h2");

    body.insertBefore(contendor_conoc, enlaceScript);

    contendor_conoc.classList.add("conocimientos");
    contendor_conoc.appendChild(h2);
    contendor_conoc.appendChild(contenedor_img);

    h2.appendChild(document.createTextNode("Tecnologías Web"));

    for (let i = 0; i < misDatos.conocimientos.length; i++) {
        let img = document.createElement("img");
        contenedor_img.appendChild(img);
        img.setAttribute("src", misDatos.conocimientos[i]);
    }
}


/**
 * Crea el DOM para los estudios
 */
function estudios(body, enlaceScript) {
    let contendor_estudios = document.createElement("div");
    let contenedor_estudio = document.createElement("div");
    let h2 = document.createElement("h2");
    let p = "";
    let aux = misDatos.estudios;

    body.insertBefore(contendor_estudios, enlaceScript);
    contendor_estudios.classList.add("estudios");
    contendor_estudios.append(h2, contenedor_estudio);
    h2.append("Títulos y Certificaciones");

    for (let i = 0; i < aux.length; i++) {
        p = document.createElement("p");
        p.append(
            aux[i].estudio,
            document.createElement("br"),
            "Inicio: " + aux[i].inicio,
            document.createElement("br"),
            aux[i].fin,
            document.createElement("br"),
            aux[i].sede,
            document.createElement("br"),
            aux[i].ubicacion,
            document.createElement("br"),
            document.createElement("hr"),
        );

        contenedor_estudio.append(p);
    }
}


/**
 * Estilos para el contenedor con clase "sobreMi"
 */
function estilos_sobreMi() {
    let base = document.querySelector(".sobreMi");
    let h2 = base.querySelector("h2");
    let p = base.querySelector("p");

    // Estilos para "base"
    base.classList.add(
        "text-white",
        "p-10",
        "pb-0"
    );


    // Estilos para "h2"
    h2.classList.add(
        "text-3xl", 
        "font-semibold",
    );


    // Estilos para "p"
    p.classList.add(
        "text-sm",
        "mt-5",
        "leading-6"
    );
}


/**
 * Estilos para el contenedor con clase "datos-personales"
 */
function estilos_datosPersonales() {
    let base = document.querySelector(".datos-personales");
    let dato = base.querySelectorAll(".dato");
    let social = base.querySelector(".social").querySelector("div");

    // Estilos para "base"
    base.classList.add(
        "m-10",
        "p-5",
        "bg-white",
        "rounded-lg"
    );
    
    // Estilos para cada contenedor con clase "dato"
    dato.forEach((x)=>{
        let h2 = x.querySelector("h2");
        let p = x.querySelector("p");

        // Estilos para "h2"
        h2.classList.add(
            "text-sm",
            "font-semibold",
        );


        // Estilos para "p"
        p.classList.add(
            "mb-3",
            "text-sm",
            "leading-6"
        );
    });


    // Estilos para contenedor de "social"
    social.classList.add(
        "flex",
        "gap-3",
        "mt-4"
    );

    enlaces = social.querySelectorAll("a");
    enlaces.forEach((x)=>{
        x.classList.add(
            "w-7"
        );
    });

}


/**
 * Estilos para el contenedor con clase "conocimientos"
 */
function estilos_conocimientos() {
    let base = document.querySelector(".conocimientos");
    let h2 = base.querySelector("h2");
    let content_img = base.querySelector("div");
    let imagenes = content_img.querySelectorAll("img");

    // Estilos para "h2"
    h2.classList.add(
        "text-white",
        "text-2xl",
        "font-semibold",
        "p-2",
        "pl-10",
        "bg-red-800"
    );

    // Estilos para cada el contenedor de las imágenes
    content_img.classList.add(
        "p-10",
        "grid",
        "grid-cols-3",
        "gap-5",
        "justify-items-center"
    );

    // Estilos para las imágenes
    imagenes.forEach((x)=>{
        x.classList.add(
            "w-12",
        );
    }); 
}


/**
 * Estilos para el contenedor con clase "estudios"
 */
function estilos_estudios(){
    let base = document.querySelector(".estudios");
    let h2 = base.querySelector("h2");
    let contendor_estudios = base.querySelector("div")

    // Estilos para "h2"
    h2.classList.add(
        "text-white",
        "text-2xl",
        "font-semibold",
        "p-2",
        "pl-10",
        "bg-red-800"
    );

    // Estilos para el contenedor de los estudios
    contendor_estudios.classList.add(
        "p-10",
        "pt-5",
        "grid",
        "gap-5",
        "text-white",
        "text-sm"
    );

    let hr = contendor_estudios.querySelectorAll("hr");
    hr.forEach((x) => {
        x.classList.add(
            "mt-5",
            "border",
            "border-white"
        );
    });


}

/**
 * =========== INICIO ===========
 */
function inicio() {
    let body = document.getElementsByTagName("body")[0];
    let enlaceScript = document.getElementById("enlaceScript");

    body.classList.add("bg-cyan-600");

    // Constructores
    sobreMi(body, enlaceScript);
    datosPersonales(body, enlaceScript);
    conocimientos(body, enlaceScript);
    estudios(body, enlaceScript);

    // Estilistas
    estilos_sobreMi();
    estilos_datosPersonales();
    estilos_conocimientos();
    estilos_estudios();
}


inicio();