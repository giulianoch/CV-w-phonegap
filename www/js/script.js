
//creo numeros randoms de 0 a 5, sin que se puedan repetir
var uniqueRandoms = [];
var numRandoms = 5;
function makeUniqueRandom() {
    // refill the array if needed
    if (!uniqueRandoms.length) {
        for (var i = 0; i < numRandoms; i++) {
            uniqueRandoms.push(i);
        }
    }
    var index = Math.floor(Math.random() * uniqueRandoms.length);
    var val = uniqueRandoms[index];
    // now remove that value from the array
    uniqueRandoms.splice(index, 1);
    return val;
}

//formulario dinamico de secundaria
function formSec(){
    var div = document.createElement('div');
    div.id = 'DIV:' + makeUniqueRandom() ;
  
    var h3 = document.createElement("H3");
    var titulo = document.createTextNode('Estudios Secundarios');
    h3.appendChild(titulo);
    div.appendChild(h3);

    var escuela = document.createTextNode('Escuela: ');
    escuela.id = 'escuela';
    var nombreEscuela = document.createElement('input');
    nombreEscuela.setAttribute("type", "text");
    nombreEscuela.id = 'nombreEscuela';
    nombreEscuela.className="form-control"

    var especializacion = document.createTextNode('Especializacion: ');
    especializacion.id = 'especializacion';
    var especializacionNombre = document.createElement('input');
    especializacionNombre.setAttribute("type", "text");
    especializacionNombre.id = 'especializacionNombre';
    especializacionNombre.className="form-control"


    div.appendChild(escuela);
    div.appendChild(nombreEscuela);
    
    div.appendChild(especializacion);
    div.appendChild(especializacionNombre);

    document.getElementById('secundaria').appendChild(div);
}


function formUni(){
    var div = document.createElement('div');
    div.id = 'DIV:' + makeUniqueRandom() ;
    
    var h3 = document.createElement("H3");
    var titulo = document.createTextNode('Universidad');
    h3.appendChild(titulo);
    div.appendChild(h3);

    var universidad = document.createTextNode('Universidad: ');
    universidad.id = 'escuela';
    var nombreUniversidad = document.createElement('input');
    nombreUniversidad.setAttribute("type", "text");
    nombreUniversidad.id = 'nombreuniversidad';
    div.appendChild(universidad);
    div.appendChild(nombreUniversidad);

    var carrera = document.createTextNode('Carrera: ');
    carrera.id = 'carrera';
    var carreraNombre = document.createElement('input');
    carreraNombre.setAttribute("type", "text");
    carreraNombre.id = 'carreraNombre';
    div.appendChild(carrera);
    div.appendChild(carreraNombre);

    var inicio = document.createTextNode('Inicio: ');
    inicio.id = 'carrera';
    var inicioFecha = document.createElement('input');
    inicioFecha.setAttribute("type", "text");
    inicioFecha.id = 'inicioFecha';
    div.appendChild(inicio);
    div.appendChild(inicioFecha);
    
    var finalizacion = document.createTextNode('Finalizacion: ');
    finalizacion.id = 'carrera';
    var finalizacionFecha = document.createElement('input');
    finalizacionFecha.setAttribute("type", "text");
    finalizacionFecha.id = 'finalizacionFecha';
    div.appendChild(finalizacion);
    div.appendChild(finalizacionFecha);

    var finalizado = document.createTextNode('Estudios finalizados: ');
    finalizado.id = 'carrera';
    var finalizadoSi = document.createElement('input');
    finalizadoSi.setAttribute("type", "radio");
    finalizadoSi.setAttribute("name", "re");
    var finalizadoTSi = document.createTextNode('Si');

    finalizadoSi.id = 'finalizadoSi';
    var finalizadoNo = document.createElement('input');
    finalizadoNo.setAttribute("type", "radio");
    finalizadoNo.setAttribute("name", "re");
    var finalizadoTNo = document.createTextNode('No');
    finalizadoNo.id = 'finalizadoNo';

    div.appendChild(finalizado);
    div.appendChild(finalizadoSi);
    div.appendChild(finalizadoTSi);
    div.appendChild(finalizadoNo);
    div.appendChild(finalizadoTNo);

    //con esta funcion hago que los radios se puedan desclickear
    var allRadios = document.getElementsByName('re');
    var booRadio;
    var x = 0;
    for(x = 0; x < allRadios.length; x++){
        allRadios[x].onclick = function() {
        if(booRadio == this){
        this.checked = false;
        booRadio = null;
        } else {
        booRadio = this;
            }
        };
    }
    document.getElementById('universidad').appendChild(div); 
}

function formCursos(){
    var div = document.createElement('div');
    div.id = 'DIV:' + makeUniqueRandom() ;
    
    var h3 = document.createElement("H3");
    var titulo = document.createTextNode('Cursos');
    h3.appendChild(titulo);
    div.appendChild(h3);

    var institucion = document.createTextNode('Institucion: ');
    institucion.id = 'escuela';
    var nombreInstitucion = document.createElement('input');
    nombreInstitucion.setAttribute("type", "text");
    nombreInstitucion.id = 'nombreInstitucion';
    nombreInstitucion.className= 'form-control'

    div.appendChild(institucion);
    div.appendChild(nombreInstitucion);

    var curso = document.createTextNode('Curso: ');
    curso.id = 'curso';
    var cursoNombre = document.createElement('input');
    cursoNombre.setAttribute("type", "text");
    cursoNombre.id = 'cursoNombre';
    cursoNombre.className= 'form-control'
    div.appendChild(curso);
    div.appendChild(cursoNombre);

    var duracion = document.createTextNode('Duracion: ');
    duracion.id = 'duracion';
    var duracionTiempo = document.createElement('input');
    duracionTiempo.setAttribute("type", "text");
    duracionTiempo.id = 'duracionTiempo';
    duracionTiempo.className= 'form-control'
    div.appendChild(duracion);
    div.appendChild(duracionTiempo);

    var descripcion = document.createTextNode('Breve descripcion: ');
    descripcion.id = 'descripcion';
    var descripcionT = document.createElement('textarea');
    descripcionT.id = 'descripcionT';
    descripcionT.placeholder = 'Ejemplo: En este curso aprendi: Javascript , Html y CSS. ETC';
    div.appendChild(descripcion);
    div.appendChild(descripcionT);

    document.getElementById('cursos').appendChild(div); 
}

function formTrabajos(){

    

    var div = document.createElement('div');
    div.id = 'DIV:' + makeUniqueRandom() ;
    
    var objetivoL = document.createTextNode('Objetivo laboral: ');
    var objetivoD = document.createElement('textarea');
    objetivoD.id = 'objetivoD';
    objetivoD.placeholder = 'Ejemplo: "Formar parte de un equipo de trabajo y consolidarme profesionalmente en una empresa donde los logros personales y el desempeño sean reconocidos, además de permitir oportunidades de desarrollo personal y profesional."';
    div.appendChild(objetivoL);
    div.appendChild(objetivoD);

    
    var h3 = document.createElement("H3");
    var titulo = document.createTextNode('Experiencia profesional');
    h3.appendChild(titulo);
    div.appendChild(h3);

    var empresa = document.createTextNode('Nombre de la empresa: ');
    empresa.id = 'empresa';
    var nombreEmpresa = document.createElement('input');
    nombreEmpresa.setAttribute("type", "text");
    nombreEmpresa.id = 'nombreEmpresa';
    nombreEmpresa.className= 'form-control'
    div.appendChild(empresa);
    div.appendChild(nombreEmpresa);

    var inicio = document.createTextNode('Empezaste a trabajar el: ');
    inicio.id = 'inicio';
    var fechaInicio = document.createElement('input');
    fechaInicio.setAttribute("type", "text");
    fechaInicio.id = 'fechaInicio';
    fechaInicio.className= 'form-control'
    div.appendChild(inicio);
    div.appendChild(fechaInicio);

    var renuncia = document.createTextNode('Dejaste de trabajar el: ');
    renuncia.id = 'renuncia';
    var fechaRenuncia = document.createElement('input');
    fechaRenuncia.setAttribute("type", "text");
    fechaRenuncia.id = 'fechaRenuncia';
    fechaRenuncia.className= 'form-control'
    div.appendChild(renuncia);
    div.appendChild(fechaRenuncia);

    var puesto = document.createTextNode('Puesto: ');
    var puestoNombre = document.createElement('input');
    puestoNombre.setAttribute("type", "text");
    puestoNombre.id = 'puestoNombre';
    puestoNombre.className= 'form-control'
    div.appendChild(puesto);
    div.appendChild(puestoNombre);

    var descripcionJ = document.createTextNode('Descripcion de tu trabajo y tareas: ');
    descripcionJ.id = 'descripcionJ';
    var descripcionJob = document.createElement('textarea');
    descripcionJob.id = 'descripcionT';
    descripcionJob.placeholder = 'Ejemplo: Tareas realizadas: Tareas administrativas, carga y corroboración de datos, manejo de agenda, atención telefónica interna y externa, manejo de redes sociales, coordinación y armado de reuniones.';
    div.appendChild(descripcionJ);
    div.appendChild(descripcionJob);



    document.getElementById('trabajos').appendChild(div); 

}