const fs = require ('fs');
module.exports = {
    leerJson : function() {   
        return JSON.parse(fs.readFileSync('./db/tareas.json', 'utf-8')) 
    },
    agregarTarea : function(titulo, estado) {  
        let nuevaTarea = {
            titulo, 
            estado
        }
        let tareas = this.leerJson();
        tareas.push(nuevaTarea)
    },
    guardarJson : function (tareas){
        fs.writeFileSync('./db/tareas.json',JSON.stringify(tareas),'utf-8')
        this.guardarJson(tareas)
    },
    listarTareas : function(){ 
        let tareas = this.leerJson();
        for (let i = 0; i < tareas.length; i++) {
            
            console.log(tareas[i]);  
        }
    }
} 