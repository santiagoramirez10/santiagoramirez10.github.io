/*Español a inglés*/
function es_en_general() {
    /*Header*/
    var my_name = document.getElementById("name");
    var about_me = document.getElementById("about-me");
    var my_projects = document.getElementById("my-projects");
    var blog = document.getElementById("blog");
    var contact = document.getElementById("contact");
    my_name.textContent = "SANTIAGO R. P.";
    about_me.textContent = "About me";
    my_projects.textContent = "My projects";
    blog.textContent = "Blog";
    contact.textContent = "Contact";
    /*Footer*/
    let purpose = document.getElementById("purpose");
    purpose.textContent = "Purpose of the page";
    let purpose_description = document.getElementById("purpose-description");
    purpose_description.textContent = "This is a portfolio created by Santiago Ramírez Pérez to show his projects and his skills as a programmer.";
    let social_networks = document.getElementById("social-networks");
    social_networks.textContent = "Social networks";
    let contact_information = document.getElementById("contact-information");
    contact_information.textContent = "Contact information";
    let p_rights = document.getElementById("copyright");
    p_rights.textContent = "© 2023 All Rights Reserved | Santiago Ramírez Pérez";
}
var documento = (document.getElementsByTagName("title"))[0];
/*Index*/
function es_en_index() {
    if (documento.innerHTML == "Inicio-SRP") {
        let h1_index = document.getElementById("h1-index");
        h1_index.textContent = "Welcome";
        let description_index = document.getElementById("description-index");
        description_index.textContent = "Electrical engineering student|Python and Arduino developer|Front-end developer";
        let notable_projects = document.getElementById("notable-projects");
        notable_projects.textContent = "Notable projects";
        let last_video = document.getElementById("last-video");
        last_video.textContent = "Latest YouTube tutorial";
    }
}
/*About me*/
function es_en_about() {
    if (documento.innerHTML == "Sobre mí-SRP") {
        let h1_about = document.getElementById("h1-about");
        h1_about.textContent = "A little bit about me";
        let me_paragraph1 = document.getElementById("me-paragraph1");
        me_paragraph1.textContent = "Hello, my name is Santiago Ramírez Pérez, I am an electrical engineering student at  Universidad de Antioquia and I am currently in the eighth level. Throughout my degree I have been able to learn and strengthen programming skills, which is what I am most passionate about. Also, renewable energy and home automation are of great interest to me.";
        let me_paragraph2 = document.getElementById("me-paragraph2");
        me_paragraph2.textContent = "As for programming, I have been studying Python and Arduino for about 5 years, which are my favorite languages and they were the ones with which I started in the world of programming. I am currently studying web development, which is my next goal and is the main reason why I am doing this portfolio project.";
        let me_paragraph3 = document.getElementById("me-paragraph3");
        me_paragraph3.textContent = "My interest today is to participate in projects in which I can develop my skills as a programmer and/or apply the knowledge I acquired in the area of electrical engineering, I am not only interested in which I have a great command, but also to face new challenges and acquire knowledge. that allow the successful development of the projects also in which it takes part.";
        let academic_studies = document.getElementById("academic-studies");
        academic_studies.textContent = "Academic studies";
        let studies_title1 = document.getElementById("studies-title1");
        studies_title1.textContent = "Electrical engineering";
        let studies_title2 = document.getElementById("studies-title2");
        studies_title2.textContent = "Full-stack developer course junior level";
        let studies_title3 = document.getElementById("studies-title3");
        studies_title3.textContent = "Photovoltaic solar energy course";
        let studies_title4 = document.getElementById("studies-title4");
        studies_title4.textContent = "Video game programming course level 1";
        let other_courses = document.getElementById("other-courses");
        other_courses.textContent = "Other courses";
        let courses_title1 = document.getElementById("courses-title1");
        courses_title1.textContent = "Basic of Python";
        let courses_title2 = document.getElementById("courses-title2");
        courses_title2.textContent = "Object oriented programming and algorithms in Python";
        let courses_title3 = document.getElementById("courses-title3");
        courses_title3.textContent = "Professional of Python";
        let courses_title4 = document.getElementById("courses-title4");
        courses_title4.textContent = "Practical of HTML and CSS";
        let courses_title5 = document.getElementById("courses-title5");
        courses_title5.textContent = "Basic of JavaScript";
        let courses_title6 = document.getElementById("courses-title6");
        courses_title6.textContent = "Object oriented programming with JavaScript";
        let courses_title7 = document.getElementById("courses-title7");
        courses_title7.textContent = "Front-end developer";
        let courses_title8 = document.getElementById("courses-title8");
        courses_title8.textContent = "Essential Python";
        let courses_title9 = document.getElementById("courses-title9");
        courses_title9.textContent = "Advanced Python";
        let courses_title10 = document.getElementById("courses-title10");
        courses_title10.textContent = "Python for data science and essential big data";
        let courses_title11 = document.getElementById("courses-title11");
        courses_title11.textContent = "Technical support for the maintenance of computer equipment";
        let courses_title12 = document.getElementById("courses-title12");
        courses_title12.textContent = "Home electrical installations";
        let view_certificate = document.getElementsByClassName("btn btn-primary");
        for (var i = 0; i < view_certificate.length; i++) {
            view_certificate[i].textContent = "View certificate";
        }
        let languages = document.getElementById("languages");
        languages.textContent = "Languages";
        let work_experience = document.getElementById("work-experience");
        work_experience.textContent = "Work experience";
        let work_type1 = document.getElementById("work-type1");
        work_type1.textContent = "Particular";
        let work_description1 = document.getElementById("work-description1");
        work_description1.textContent = "Personalized monitoring in projects that included programming in Python and/or Arduino: simulation of a water treatment plant (Arduino), treatment of data for the biannual generation of electric power of the country (Python), classifying algorithms (Python), among others. I also have I have carried out personal projects that I have been able to commercialize.";
        let skills = document.getElementById("skills");
        skills.textContent = "Skills";
        let skill1 = document.getElementById("skill1");
        skill1.textContent = "Leadership";
        let skill2 = document.getElementById("skill2");
        skill2.textContent = "Teamwork";
        let skill3 = document.getElementById("skill3");
        skill3.textContent = "Programmation logic";
        let skill4 = document.getElementById("skill4");
        skill4.textContent = "Self-paced learning";
        let interests = document.getElementById("interests");
        interests.textContent = "Personal interests";
        let interest1 = document.getElementById("interest1");
        interest1.textContent = "Programming";
        let interest2 = document.getElementById("interest2");
        interest2.textContent = "Electric power";
        let interest3 = document.getElementById("interest3");
        interest3.textContent = "Robotics";
        let interest4 = document.getElementById("interest4");
        interest4.textContent = "Video game";
        let interest5 = document.getElementById("interest5");
        interest5.textContent = "Blogging";
        let interest6 = document.getElementById("interest6");
        interest6.textContent = "Content creation for YouTube";
        let interest7 = document.getElementById("interest7");
        interest7.textContent = "Soccer";
        let download_cv = document.getElementById("download-cv");
        download_cv.textContent = "Download CV";
    }
}
/*My projects*/
function es_en_project() {
    let documento = (document.getElementsByTagName("title"))[0];
    if (documento.innerHTML == "Mis proyectos-SRP") {
        let h1_projects = document.getElementById("h1-projects");
        h1_projects.textContent = "Programming projects";
        let project1 = document.getElementById("project1");
        project1.textContent = "Sapiencia page clone";
        let project2 = document.getElementById("project2");
        project2.textContent = "Page of a fruver";
        let project3 = document.getElementById("project3");
        project3.textContent = "Identity matrix";
        let project4 = document.getElementById("project4");
        project4.textContent = "Social innovation challenge";
        let project5 = document.getElementById("project5");
        project5.textContent = "Smart traffic light";
        let project = document.getElementById("project6");
        project6.textContent = "LED with photocell";
        let project7 = document.getElementById("project7");
        project7.textContent = "Counter from 0 to 9";
        let project8 = document.getElementById("project8");
        project8.textContent = "Hello world on screen";
    }
}
/*Inglés a español*/
function en_es_general() {
    /*Header*/
    var my_name = document.getElementById("name");
    var about_me = document.getElementById("about-me");
    var my_projects = document.getElementById("my-projects");
    var blog = document.getElementById("blog");
    var contact = document.getElementById("contact");
    my_name.textContent = "SANTIAGO R. P.";
    about_me.textContent = "Sobre mí";
    my_projects.textContent = "Mis proyectos";
    blog.textContent = "Blog";
    contact.textContent = "Contacto";
    /*Footer*/
    let purpose = document.getElementById("purpose");
    purpose.textContent = "Objetivo de la página";
    let purpose_description = document.getElementById("purpose-description");
    purpose_description.textContent = "Este es un portaolio creado por Santiago Ramírez Pérez para mostrar sus proyectos y sus habilidades como programador";
    let social_networks = document.getElementById("social-networks");
    social_networks.textContent = "Redes Sociales";
    let contact_information = document.getElementById("contact-information");
    contact_information.textContent = "Información de contacto";
    let p_rights = document.getElementById("copyright");
    p_rights.textContent = "© 2023 Todos los Derechos Reservados | Santiago Ramírez Pérez";

}
var documento = (document.getElementsByTagName("title"))[0];
/*Index*/
function en_es_index() {
    if (documento.innerHTML == "Inicio-SRP") {
        let h1_index = document.getElementById("h1-index");
        h1_index.textContent = "Bienvenidos";
        let description_index = document.getElementById("description-index");
        description_index.textContent = "Estudiante de ingeniería eléctrica|Programador Python y Arduino|Desarrollador front-end junior";
        let notable_projects = document.getElementById("notable-projects");
        notable_projects.textContent = "Proyectos destacados";
        let last_video = document.getElementById("last-video");
        last_video.textContent = "Último tutorial de YouTube";
    }
}
/*About me*/
function en_es_about() {
    if (documento.innerHTML == "Sobre mí-SRP") {
        let h1_about = document.getElementById("h1-about");
        h1_about.textContent = "Un poco sobre mí";
        let me_paragraph1 = document.getElementById("me-paragraph1");
        me_paragraph1.textContent = "Hola, mi nombre es Santiago Ramírez Pérez, soy estudiante de ingeniería eléctrica de la Universidad de Antioquia y actualmente estoy en el octavo nivel. A lo largo de la carrera he podido aprender e ir fortaleciendo habilidades en programación que es lo que más me apasiona. También, las energías renovables y la domótica son de gran interés para mí.";
        let me_paragraph2 = document.getElementById("me-paragraph2");
        me_paragraph2.textContent = "En cuanto a programación, tengo alrededor de 5 años estudiando Python y Arduino que son mis lenguajes favoritos y fueron con los que comencé en el mundo de la programación. Actualmente me encuentro estudiando sobre desarrollo web que es mi próximo objetivo y es la principal razón por la que estoy realizando este proyecto del portafolio.";
        let me_paragraph3 = document.getElementById("me-paragraph3");
        me_paragraph3.textContent = "Mi interés hoy en día es participar en proyectos en los cuales pueda desarrollar mis habilidades como programador y/o aplicar los conocimientos que he adquirido en el área de ingeniería eléctrica, no solo me interesan los lenguajes de programación para los cuales tengo gran dominio, sino también enfrentar nuevos retos y adquirir conocimientos que permitan el desarrollo exitoso de los proyectos en los cuales haga parte.";
        let academic_studies = document.getElementById("academic-studies");
        academic_studies.textContent = "Formación académica";
        let studies_title1 = document.getElementById("studies-title1");
        studies_title1.textContent = "Ingeniería eléctrica";
        let studies_title2 = document.getElementById("studies-title2");
        studies_title2.textContent = "Curso desarrollador full-stack nivel junior";
        let studies_title3 = document.getElementById("studies-title3");
        studies_title3.textContent = "Curso energía solar fotovoltaica";
        let studies_title4 = document.getElementById("studies-title4");
        studies_title4.textContent = "Programador de videojuegos nivel 1";
        let other_courses = document.getElementById("other-courses");
        other_courses.textContent = "Otros cursos";
        let courses_title1 = document.getElementById("courses-title1");
        courses_title1.textContent = "Básico de Python";
        let courses_title2 = document.getElementById("courses-title2");
        courses_title2.textContent = "Programación orientada a objetos y algoritmos en Python";
        let courses_title3 = document.getElementById("courses-title3");
        courses_title3.textContent = "Profesional de Python";
        let courses_title4 = document.getElementById("courses-title4");
        courses_title4.textContent = "Práctico de HTML y CSS";
        let courses_title5 = document.getElementById("courses-title5");
        courses_title5.textContent = "Básico de JavaScript";
        let courses_title6 = document.getElementById("courses-title6");
        courses_title6.textContent = "Programacion orientada a objetos con JavaScript";
        let courses_title7 = document.getElementById("courses-title7");
        courses_title7.textContent = "Front-end developer";
        let courses_title8 = document.getElementById("courses-title8");
        courses_title8.textContent = "Python esencial";
        let courses_title9 = document.getElementById("courses-title9");
        courses_title9.textContent = "Python avanzado";
        let courses_title10 = document.getElementById("courses-title10");
        courses_title10.textContent = "Python para data science y big data esencial";
        let courses_title11 = document.getElementById("courses-title11");
        courses_title11.textContent = "Soporte técnico para el mantenimiento de equipos de cómputo";
        let courses_title12 = document.getElementById("courses-title12");
        courses_title12.textContent = "Instalaciones eléctricas domiciliarias";
        let view_certificate = document.getElementsByClassName("btn btn-primary");
        for (var i = 0; i < view_certificate.length; i++) {
            view_certificate[i].textContent = "Ver certificado";
        }
        let languages = document.getElementById("languages");
        languages.textContent = "Lenguajes";
        let work_experience = document.getElementById("work-experience");
        work_experience.textContent = "Experiencia laboral";
        let work_type1 = document.getElementById("work-type1");
        work_type1.textContent = "Particular";
        let work_description1 = document.getElementById("work-description1");
        work_description1.textContent = "Asesorías personalizadas en proyectos que incluían la programación en Python y/o Arduino: simulación de una planta de tratamiento de aguas (Arduino), tratamiento de datos de generación semestral de energía eléctrica del país (Python), algoritmos clasificadores (Python), entre otros. También he realizado proyectos personales que he podido comercializar.";
        let skills = document.getElementById("skills");
        skills.textContent = "Habilidades";
        let skill1 = document.getElementById("skill1");
        skill1.textContent = "Liderazgo";
        let skill2 = document.getElementById("skill2");
        skill2.textContent = "Trabajo en equipo";
        let skill3 = document.getElementById("skill3");
        skill3.textContent = "Lógica de programación";
        let skill4 = document.getElementById("skill4");
        skill4.textContent = "Aprendizaje autodidacta";
        let interests = document.getElementById("interests");
        interests.textContent = "Intereses personales";
        let interest1 = document.getElementById("interest1");
        interest1.textContent = "Programación";
        let interest2 = document.getElementById("interest2");
        interest2.textContent = "Energía eléctrica";
        let interest3 = document.getElementById("interest3");
        interest3.textContent = "Robótica";
        let interest4 = document.getElementById("interest4");
        interest4.textContent = "Videojuegos";
        let interest5 = document.getElementById("interest5");
        interest5.textContent = "Blogging";
        let interest6 = document.getElementById("interest6");
        interest6.textContent = "Creación de contenido para YouTube";
        let interest7 = document.getElementById("interest7");
        interest7.textContent = "Fútbol";
        let download_cv = document.getElementById("download-cv");
        download_cv.textContent = "Descargar CV";
    }
}
/*My projects*/
function en_es_project() {
    let documento = (document.getElementsByTagName("title"))[0];
    if (documento.innerHTML == "Mis proyectos-SRP") {
        let h1_projects = document.getElementById("h1-projects");
        h1_projects.textContent = "Proyectos de programación";
        let project1 = document.getElementById("project1");
        project1.textContent = "Clon página de Sapiencia";
        let project2 = document.getElementById("project2");
        project2.textContent = "Página de un fruver";
        let project3 = document.getElementById("project3");
        project3.textContent = "Matriz identidad";
        let project4 = document.getElementById("project4");
        project4.textContent = "Reto innovación social";
        let project5 = document.getElementById("project5");
        project5.textContent = "Semáforo inteligente";
        let project = document.getElementById("project6");
        project6.textContent = "LED con fotocelda";
        let project7 = document.getElementById("project7");
        project7.textContent = "Contador de 0 a 9";
        let project8 = document.getElementById("project8");
        project8.textContent = "Hola mundo en pantalla";
    }
}
/*Traducción*/
function es_en() {
    document.getElementById("USA").style.visibility = "hidden";
    document.getElementById("USA").style.zIndex = -1;
    document.getElementById("Colombia").style.zIndex = 1;
    document.getElementById("Colombia").style.visibility = "visible"
    es_en_general();
    es_en_index();
    es_en_about();
    es_en_project();
}
function en_es() {
    document.getElementById("Colombia").style.visibility = "hidden";
    document.getElementById("Colombia").style.zIndex = -1;
    document.getElementById("USA").style.zIndex = 1;
    document.getElementById("USA").style.visibility = "visible"
    en_es_general();
    en_es_index();
    en_es_about();
    en_es_project();
}
document.getElementById("USA").addEventListener("click", () => {
    es_en();
}
);
document.getElementById("Colombia").addEventListener("click", () => {
    en_es();
}
);