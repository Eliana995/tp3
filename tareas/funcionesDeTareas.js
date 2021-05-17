const fs = require ('fs');
const leerJson = JSON.parse(fs.readFileSync('./db/tareas.json', 'utf-8'))  //
module.exports = {
    
    crearTarea : function(titulo, estado = 'pendiente') {   //original: agregarTarea
        let nuevaTarea = {
            titulo, 
            estado 
        }
        leerJson.push(nuevaTarea);
        this.guardarJson(leerJson);
        this.listarTareas();
    },
    guardarJson : function (tareas){
        fs.writeFileSync('./db/tareas.json',JSON.stringify(tareas),'utf-8')
    },
    filtrarTareas : function(filtrar){
        let filtradas = tareas.filter (tarea => tarea.estado === filtrar)
        return console.log(filtradas);
    },
    listarTareas : function(){ //no recibe parámetro
        leerJson.forEach(tarea => {   //hace un recorrido leyendo el json parseado
            console.log(`tarea: ${tarea.titulo} estado: ${tarea.estado}`); 
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
        //let tareas = this.leerJson();
        //this.filtrarTareas()
        let filtradas = leerJson.filter (tarea => tarea.estado === estado)
        return console.log(filtradas); //muestro el nuevo array
    }
} 