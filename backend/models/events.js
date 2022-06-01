const mongoose =require("mongoose")

const eventsSchema= new mongoose.Schema ({

    titulo: {type:String, require:true},
    descripcion: {type:String, require:true},
    fecha:{type:String, require:true},
    mes:{type:String, require:true},
    lugar: {type:String, require:true},
    /* galeria: {type:Array, require:true}, */

})

const Events = mongoose.model("events", eventsSchema)

module.exports =Events;