const moduloTareas = require('./tareas/funcionesDeTareas');
const process = require('process');
const texto = process.argv[2];

switch (texto) {
    case 'agregar':
        let titulo = process.argv[3];
        let estado = process.argv[4];
        moduloTareas.agregarTarea(titulo,estado) 
        break;
    
    case 'listar':
        moduloTareas.listarTareas()
        break;

    case undefined:
        console.log("Atención - Tenes que pasar una acción");
        break;
    
    default : 
    console.log("No entiendo qué queres hacer");
    break;

}