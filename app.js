const moduloTareas = require('./tareas/funcionesDeTareas');
const process = require('process');
const { listarTareas, guardarTarea, leerPorEstado } = require('./tareas/funcionesDeTareas');
const texto = process.argv[2];

switch (texto) {

    case 'crear':   //original: agregar
            let titulo = process.argv[3];
            let estado = 'pendiente';
            moduloTareas.agregarTarea(titulo,estado) 
        break;
    
    case 'listar':
        listarTareas()
        break;

    case 'filtrar':
        leerPorEstado(process.argv[3]);
        break;

    case undefined:
        console.log("Atención - Tenes que pasar una acción");
        break;
    
    default : 
    console.log("No entiendo qué queres hacer");
    break;

}