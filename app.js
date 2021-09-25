const tareas = require("./funcionesDeTareas.js")

let opcion = process.argv[2]
let titulo = process.argv[3]
let estado = process.argv[4]
let filtrado = process.argv[3]


    switch(opcion){
        case "listar": 
        tareas.traerObjeto()
        break;
        case "crear":
            tareas.guardarTareas(titulo,estado)
            console.log("tarea guardada")
        break;
        case "filtrar":
            console.log(tareas.filtrarPorElEstado(filtrado))
        break;
        case undefined:
            console.log("Atención - Tienes que pasar una acción")
        break;
        default:
            console.log("No entiendo qué quieres hacer")
        break;
    }


