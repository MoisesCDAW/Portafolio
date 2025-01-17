const misDatos = {
    datosPerso: [
        "Hey! I'm Moisés, Software Developer",
        `I have experience in object-oriented programming in various languages, with a special emphasis on Java, where I have applied SOLID principles, version control, and developed projects under various software architectures, including MVC and Client-Server. Additionally, I have knowledge of SQL databases and modern technologies for designing efficient, accessible, and functional user interfaces.`,
        "Moisés Alejandro Campos Perdomo", 
        "07. 10. 2003", 
        "moisescampos1234@gmail.com", 
        "Category B",
        "La Palma, Canary Islands, Spain",
        "https://www.linkedin.com/in/moisescap/",
        "https://github.com/MoisesCDAW",
        "https://www.instagram.com/moisescamposp/",
        "img/redes/linkedin.svg",
        "img/redes/github.svg",
        "img/redes/instagram.svg"
    ],
    conocimientos: [
        "img/skills/oscuro/java.svg",
        "img/skills/oscuro/javascript.svg",
        "img/skills/oscuro/mysql.svg",
        "img/skills/oscuro/php.svg",
        "img/skills/oscuro/html.svg",
        "img/skills/oscuro/css.svg",
        "img/skills/oscuro/Bootstrap.svg",
        "img/skills/oscuro/tailwind.svg",
        "img/skills/oscuro/vuejs.svg",
        "img/skills/oscuro/laravel.svg"
    ],
    estudios: [
        {
            estudio: "Secondary school",
            url: "https://drive.google.com/file/d/1Xn1Ne0vKz43AZZ1Nzr5ndJypwVw6Tycy/view?usp=sharing",
            inicio: "September 2018",
            fin: "July 2020",
            sede: "Decroly School",
            ubicacion: "Venezuela"
        },
        {
            estudio: "FP in Web Application Development",
            url: "https://www3.gobiernodecanarias.org/medusa/edublog/iesjosemariaperezpulido/",
            inicio: "September 2023",
            fin: "Present",
            sede: "IES José María Pérez Pulido",
            ubicacion: "La Palma, Canary Islands, Spain"
        }
    ],

    experiencia: [],

    proyectos: [
        {
            url: "https://www.mixapp.moisescap.com",
            titulo: "MixApp",
            creacion: "2024",
            img: "img/portada_mixapp.png",
            descripcion: `It is a program with various utilities. It includes a quiz and a memory game about The Simpsons. It also has a form designed to keep track of the distribution of a product.`
        },
        {
            url: "https://www.calendario.moisescap.com",
            titulo: "Calendar",
            creacion: "2024",
            img: "img/portada_calendario.png",
            descripcion: `A calendar that shows the public holidays of 2024 in the Canary Islands. It allows filtering by islands and marking holidays as favorites.`
        },
        {
            url: "https://www.registro.moisescap.com",
            titulo: "Sign-up",
            creacion: "2024",
            img: "img/portada_regis.png",
            descripcion: `It is an application that allows creating and deleting users and saving them in a database. The application validates the data and allows adding a profile picture.`
        },
        {
            url: "https://www.gamebox.moisescap.com",
            titulo: "GameBox",
            creacion: "2024 - desktop version only",
            img: "img/gamebox.png",
            descripcion: `It is a video game library that allows users to explore, rate, and comment on different games in the app.`
        }
    ]
}; 


// =================================== CONSTRUCTORES =======================================


/**
 * Crea el DOM para el botón de volver arriba
 */
function volverArriba(content_general) {
    let contendor = document.createElement("div");
    let enlace = document.createElement("a");
    let img = document.createElement("img");

    content_general.append(contendor);
    contendor.classList.add("volArriba");
    contendor.append(enlace);
    enlace.append(img);

    enlace.setAttribute("href", "#inicio");
    img.setAttribute("src", "img/up.png");
}


/**
 * Crea el DOM para la zona de navegación
 */
function navegacion(content_general) {
    let opciones = [
        "Studies", 
        // "Experiencia", 
        "Projects"]

    let enlaces = ["#estudios", 
        // "#expe", 
        "#proyect"
    ];

    let contenedor_nav = document.createElement("div");
    let ul = document.createElement("ul");

    contenedor_nav.setAttribute("id", "inicio");
    content_general.append(contenedor_nav);
    contenedor_nav.append(ul);
    contenedor_nav.classList.add("nav");

    for (let i = 0; i < opciones.length; i++) {
        let li = document.createElement("li");
        let a = document.createElement("a");
        ul.append(li);
        li.append(a);
        a.setAttribute("href", enlaces[i]);
        a.textContent = opciones[i];
    }
}


/**
 * Crea el DOM de título con el nombre y la descripción del inicio
 */
function sobreMi(content_datos_tecn) {
    let contenedor_SobreMi = document.createElement("div");
    let tituloNombre = document.createElement("h2");
    let miDescripcion = document.createElement("p");

    content_datos_tecn.append(contenedor_SobreMi);

    contenedor_SobreMi.classList.add("sobreMi");
    contenedor_SobreMi.appendChild(tituloNombre);
    contenedor_SobreMi.appendChild(miDescripcion);

    tituloNombre.appendChild(document.createTextNode(misDatos.datosPerso[0]));
    miDescripcion.appendChild(document.createTextNode(misDatos.datosPerso[1]));
}


/**
 * Crea el DOM de los datos personales
 */
function datosPersonales(content_datos_tecn) {
    const titulos = ["name", "birth", "email", "driving license", "location"];

    let contenedor_datosPerso = contenedor_dato = titulo = info = enlaces = "";
    let contador = 2;

    contenedor_datosPerso = document.createElement("div");
    contenedor_datosPerso.classList.add("datos-personales");

    content_datos_tecn.append(contenedor_datosPerso);

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
function conocimientos(content_datos_tecn) {
    let contendor_conoc = document.createElement("div");
    let contenedor_img = document.createElement("div");
    let h2 = document.createElement("h2");

    content_datos_tecn.append(contendor_conoc);

    contendor_conoc.classList.add("conocimientos");
    contendor_conoc.appendChild(h2);
    contendor_conoc.appendChild(contenedor_img);

    h2.appendChild(document.createTextNode("Web Technologies"));

    for (let i = 0; i < misDatos.conocimientos.length; i++) {
        let img = document.createElement("img");
        contenedor_img.appendChild(img);
        img.setAttribute("src", misDatos.conocimientos[i]);
    }
}


/**
 * Crea el DOM para los estudios
 */
function estudios(content_general) {
    let contendor_estudios = document.createElement("div");
    let contenedor_est = document.createElement("div");
    let h2 = document.createElement("h2");
    let p = "";
    let aux = misDatos.estudios;

    content_general.append(contendor_estudios);
    contendor_estudios.classList.add("estud-expe");
    contendor_estudios.setAttribute("id", "estudios");
    contendor_estudios.append(h2, contenedor_est);
    h2.append("Degrees and Certifications");

    for (let i = 0; i < aux.length; i++) {
        p = document.createElement("p");

        let content_titulo = document.createElement("div");
        let titulo = document.createElement("a");
        let flecha_link = document.createElement("img");

        titulo.setAttribute("href", aux[i].url);
        flecha_link.setAttribute("src", "img/flecha_link.png");
        flecha_link.classList.add("link");
        titulo.textContent = aux[i].estudio;

        content_titulo.classList.add("titulos");
        content_titulo.append(titulo, flecha_link);
        p.append(
            content_titulo,
            "Start: " + aux[i].inicio,
            document.createElement("br"),
            "End: " + aux[i].fin,
            document.createElement("br"),
            "School: " + aux[i].sede,
            document.createElement("br"),
            "Location: " + aux[i].ubicacion,
            document.createElement("br"),
            document.createElement("hr"),
        );

        contenedor_est.append(p);
    }
}


/**
 * Crea el DOM para la experiencia laboral
 */
function laboral(content_general) {
    let contendor_experiencias = document.createElement("div");
    let contenedor_exp = document.createElement("div");
    let h2 = document.createElement("h2");
    let p = "";
    let aux = misDatos.experiencia;

    content_general.append(contendor_experiencias);
    contendor_experiencias.classList.add("estud-expe");
    contendor_experiencias.setAttribute("id", "expe");
    contendor_experiencias.append(h2, contenedor_exp);
    h2.append("Experiencias");

    for (let i = 0; i < aux.length; i++) {
        p = document.createElement("p");

        let titulo = document.createElement("span");
        let sede = document.createElement("span");

        titulo.textContent = aux[i].puesto;
        sede.textContent = aux[i].sede + " - " + aux[i].ubicacion;

        p.append(
            aux[i].inicio + " - " + aux[i].fin,
            document.createElement("br"),
            titulo,
            aux[i].descripcion,
            document.createElement("br"),
            sede,
            document.createElement("hr")
        );

        contenedor_exp.append(p);
    }
}


/**
 * Crea el DOM para los proyectos
 */
function proyectos(content_general) {
    let contendor = document.createElement("div");
    let contendor_proyectos = document.createElement("div");
    let h2 = document.createElement("h2");
    let aux = misDatos.proyectos;
    let contenedor_proyec = content_img = img =titulo_proyec = descripcion = "";

    content_general.append(contendor);
    h2.append("Projects")
    contendor.append(h2);
    contendor.append(contendor_proyectos);
    contendor.classList.add("proyectos");
    contendor.setAttribute("id", "proyect");
    contendor_proyectos.classList.add("cards");

    for (let i = 0; i < aux.length; i++) {

        // Creación de elementos
        contenedor_proyec = document.createElement("div");
        contenedor_proyec.classList.add("carta");
        content_img = document.createElement("a");
        img = document.createElement("img");
        content_text = document.createElement("div");
        titulo_proyec = document.createElement("a");
        descripcion = document.createElement("p");
        creacion = document.createElement("span");
        content_titulo = document.createElement("div");
        flecha_link = document.createElement("img");

        // Contenedor Proyecto
        contendor_proyectos.append(contenedor_proyec);
        contenedor_proyec.append(content_img, content_text);

        // Contenedor IMG
        content_img.append(img);
        content_img.setAttribute("href", aux[i].url);
        img.setAttribute("src", aux[i].img);

        // Contenedor Texto
        content_text.append(content_titulo, descripcion, creacion);
        content_titulo.append(titulo_proyec, flecha_link);
        titulo_proyec.textContent = aux[i].titulo;
        flecha_link.setAttribute("src", "img/flecha_link.png");
        flecha_link.classList.add("link");
        titulo_proyec.setAttribute("href", aux[i].url);
        descripcion.textContent = aux[i].descripcion;
        creacion.textContent = aux[i].creacion;

    }
}


// =================================== ESTILISTAS =======================================

function estilos_volverArriba() {
    let base = document.querySelector(".volArriba");
    let img = base.querySelector("img");

    base.classList.add(
        "w-10",
        "h-10",
        "fixed",
        "right-10",
        "min-[880px]:inset-x-[50%]",
        "bottom-24"
    );

    img.classList.add(
        "opacity-0",
        "w-10",
        "transition",
        "duration-[400ms]",
        "ease-in-out",
    );

    window.addEventListener("scroll", function() {
        if (window.scrollY > 500) {
            img.classList.remove("opacity-0");
            img.classList.add("opacity-20");
        }else {
            img.classList.remove("opacity-20");
            img.classList.add("opacity-0");
        }
    });

}


/**
 * Estilos para el contenedor con clase "nav"
 */
function estilos_navegacion() {
    let base = document.querySelector(".nav");
    let ul = base.querySelector("ul");
    let li = base.querySelectorAll("li");

    base.classList.add(
        "flex",
        "justify-center",
        "border-b-2",
        "border-[#373536]",
        "min-[880px]:col-span-2",
        "mx-10",
    );

    ul.classList.add(
        "p-5",
        "flex",
        "gap-6"
    );

    li.forEach((x)=>{
        x.classList.add(
            "p-2",
            "px-3",
            "border-2",
            "border-white",
            "rounded-full",
            "transition",
            "hover:border-2",
            "hover:border-[#A4243B]",
            "hover:text-[#A4243B]",
            "hover:scale-[1.1]"
        );
    }); 
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
        "p-10",
        "max-[880px]:p-0",
        "max-[880px]:py-10",
        "mb-10",
        "mx-10",
        "min-[880px]:col-span-2",
        "rounded-t-lg",
        "text-center",
        "max-[880px]:text-left",
        "border-b-2",
        "border-[#373536]",
    );


    // Estilos para "h2"
    h2.classList.add(
        "text-[#373536]",
        "text-3xl", 
        "max-[880px]:text-left",
        "font-semibold",
    );


    // Estilos para "p"
    p.classList.add(
        "text-sm",
        "mt-5",
        "leading-6",
        "min-[880px]:text-base"
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
        "text-white",
        "mx-10",
        "min-[880px]:mx-0",
        "min-[880px]:ms-10",
        "mb-10",
        "p-5",
        "bg-[#A4243B]",
        "rounded-lg",
        "row-span-2",
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
            "leading-6",
        );
    });


    // Estilos para contenedor de "social"
    social.classList.add(
        "flex",
        "gap-3",
        "mt-4"
    );

    base.querySelector(".social").querySelector("h2").classList.add(        
        "text-sm",
        "font-semibold"
    )

    enlaces = social.querySelectorAll("a");
    enlaces.forEach((x)=>{
        x.classList.add(
            "w-7",
            "transition",
            "hover:scale-[1.1]"
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

    base.classList.add(
        "min-[1420px]:w-[400px]",
        "mx-10",
        "min-[880px]:mx-0",
        "min-[880px]:me-10",
        "mb-10",
    );

    // Estilos para "h2"
    h2.classList.add(
        "mt-5",
        "min-[880px]:mt-0",
        "text-[#373536]",
        "text-2xl",
        "font-semibold",
    );

    // Estilos para cada el contenedor de las imágenes
    content_img.classList.add(
        "grid",
        "grid-cols-3",
        "min-[880px]:grid-cols-4",
        "gap-5",
        "justify-items-center",
        "mt-10",
        "px-7"
    );

    // Estilos para las imágenes
    imagenes.forEach((x)=>{
        x.classList.add(
            "w-12",
            "transition",
            "hover:scale-[1.1]"
        );
    }); 
}


/**
 * Estilos para el contenedor con clase "estudios"
 */
function estilos_estud_expe(){
    let base = document.querySelectorAll(".estud-expe");

    base.forEach((y)=>{

        let links = y.querySelectorAll(".link");
        links.forEach((z)=>{
            z.classList.add(
                "w-[13px]", 
                "h-[13px]", 
                "mt-[4px]"
            );
        })

        let h2 = y.querySelectorAll("h2");
        let contenedor = y.querySelectorAll("div");

        // Estilos para "h2"
        h2.forEach((x)=>{
            x.classList.add(
                "text-[#373536]",
                "text-2xl",
                "font-semibold",
                "p-2",
                "pl-10",
            );
        });

        // Estilos para el contenedor de los estudios
        contenedor.forEach((x)=>{
            x.classList.add(
                "p-10",
                "pt-5",
                "grid",
                "gap-5",
                "text-sm",
                "leading-6"
            );

            let p = x.querySelectorAll("p");
            p.forEach((x)=>{
                x.classList.add(
                    "grid",
                    "gap-3",
                    "min-[880px]:text-base"
                );
            });

            // Estilos para la línea divisora
            let hr = x.querySelectorAll("hr");
            hr.forEach((x) => {
                x.classList.add(
                    "mt-5",
                    "border",
                    "border-[#373536]"
                );
            });

            // Estilo para los titulos de cada estudio
            let span = x.querySelectorAll("span");
            span.forEach((x)=>{
                x.classList.add(
                    "text-base",
                    "font-semibold",
                    "min-[880px]:text-lg"
                );
            });

            // Estilo para los titulos de cada estudio
            let a = x.querySelectorAll("a");
            a.forEach((x)=>{
                x.classList.add(
                    "text-base",
                    "font-semibold",
                    "min-[880px]:text-lg"
                );
            });
        });

        let cont_titulos = y.querySelectorAll("[class~='titulos']");
        cont_titulos.forEach((z)=>{
            z.classList.remove(...z.classList);
            z.classList.add(
                "flex", 
                "gap-2"
            );
        });
    });
}


/**
 * Estilos para el contenedor con clase "proyectos"
 */
function estilos_proyectos() {
    let base = document.querySelector(".proyectos");

    base.classList.add(
        "p-10",
        "pt-0"
    );

    let h2 = base.querySelector("h2");
    h2.classList.add(
        "text-2xl",
        "font-semibold",
        "text-[#373536]",
        "pb-10",
        "w-full",
        "text-left"
    );

    let cards = base.querySelector(".cards");
    cards.classList.add(
        "grid",
        "grid-cols-1",
        "gap-8"
    );

    let links = base.querySelectorAll(".link");
    links.forEach((y)=>{
        y.classList.add(
            "w-[13px]", 
            "h-[13px]", 
            "mt-[4px]"
        );
    });

    cards = cards.querySelectorAll(".carta")
    cards.forEach((x)=>{
        x.classList.add(
            "flex",
            "gap-5"
        );

        let img = x.querySelector("img");
        img.classList.add(
            "min-w-[45px]",
            "max-w-[45px]",
            "transition",
            "hover:scale-[1.1]"
        );

        let content = x.querySelector("div");
        content.classList.add("px-5");

        let titulo = content.querySelector("a");
        titulo.classList.add(
            "font-bold",
            "border-s-2",
            "border-[#A4243B]",
            "mb-2",
            "ps-2"
        );

        let creacion = content.querySelector("span");
        creacion.classList.add(
            "italic",
            "text-[#777]"
        );

        let cont_titulos = content.querySelectorAll("div");
        cont_titulos.forEach((z)=>{
            z.classList.add("flex", "gap-2");
        });
    });
}


/**
 * =========== INICIO ===========
 */
function inicio() {
    let aviso = document.querySelector("#aviso");
    aviso.remove();

    let body = document.getElementsByTagName("body")[0];
    let content_general = document.createElement("div");
    let content_datos_tecn = document.createElement("div");
    let enlaceScript = document.getElementById("enlaceScript");

    body.insertBefore(content_general, enlaceScript);

    document.getElementsByTagName("html")[0].classList.add("scroll-smooth");

    body.classList.add(
        "bg-[url('img/fondo.jpg')]",
        "bg-fixed",
        "bg-contain"
    );

    content_general.classList.add(
        "bg-white",
        "min-[880px]:w-1/2", 
        "m-auto",
        "my-8", 
        "rounded-lg"
    );

    content_datos_tecn.classList.add(
        "grid",
        "grid-cols-1",
        "min-[880px]:grid-cols-[1fr]",
        "gap-x-10"
    );


    // Constructores
    content_general.append(content_datos_tecn);
    navegacion(content_datos_tecn);
    sobreMi(content_datos_tecn);
    datosPersonales(content_datos_tecn);
    conocimientos(content_datos_tecn);
    estudios(content_general);
    // laboral(content_general);
    proyectos(content_general);
    volverArriba(body);

    // Estilistas
    estilos_volverArriba();
    estilos_navegacion();
    estilos_sobreMi();
    estilos_datosPersonales();
    estilos_conocimientos();
    estilos_estud_expe();
    estilos_proyectos();
}


inicio();