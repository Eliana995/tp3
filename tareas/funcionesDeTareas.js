const fs = require ('fs');
module.exports = {
    leerJson : function() {   
        return JSON.parse(fs.readFileSync('./db/tareas.json', 'utf-8')) 
    },
    crearTarea : function(titulo, estado = 'pendiente') {   //original: agregarTarea
        let nuevaTarea = {
            titulo, 
            estado 
        }
        let tareas = this.leerJson();
        tareas.push(nuevaTarea);
        this.guardarJson(tareas);
        this.listarTareas();
    },
    guardarJson : function (tareas){
        fs.writeFileSync('./db/tareas.json',JSON.stringify(tareas),'utf-8')
        this.guardarJson(tareas)
    },
    filtrarTareas : function(filtrar){
        let filtradas = tareas.filter (tarea => tarea.estado === filtrar)
        //return console.log(filtradas);
    },
    listarTareas : function(tareas){ 
       // let tareas = this.leerJson();
        tareas.forEach(tarea => {
            console.log(tarea);
        });
       // for (let i = 0; i < tareas.length; i++) {
            
           // console.log(tareas[i]);  
     //   }
    },
    escribirJson : function(tareas){
        fs.writeFileSync('./db/tareas.json',JSON.stringify(tareas),'utf-8') //stringfico tareas
    
    },
    guardarTarea : function(tarea){
        let tareas = this.leerJson()
        tareas.push(tarea)  //le pusheo la nueva tarea al array de objetos
        this.escribirJson(tareas)
    },
    leerPorEstado : function(estado){
        let tareas = this.leerJson();
        this.filtrarTareas()
        let filtradas = tareas.filter (tarea => tarea.estado === estado)
        return tareas.listarTareas(filtradas);
    }
} 