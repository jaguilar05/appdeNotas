const fs = require('fs')
const logic = require('./tareas.json')


function escribirJSON(logic){
    let datos =JSON.stringify(logic)
    fs.writeFileSync("./tareas.json",datos,{encoding:"utf-8"})
}
function guardarTareas(titulo,estado){
    const tarea= {
        titulo : titulo,
        estado : estado
    }
    const database = logic
    database.push(tarea)
    const tareaJson = JSON.stringify(database,null,4)
    fs.writeFileSync("./tareas.json",tareaJson)
}
function traerObjeto(){
    logic.forEach(item => console.log(item))
}

const filtrarPorElEstado = (state)=>{
    
    return logic.filter(item => item.estado == state)
}

module.exports = {guardarTareas,escribirJSON,traerObjeto,filtrarPorElEstado}