const mongoose = require('mongoose');
const {Schema} = mongoose;

// Cuando se ejecute y empleado NO exista se creará la estructura
const EmpleadoSchema = new Schema({
    name: {type:String, require:true},
    lastname: {type:String, require:true},
    position: {type:String, require:true},
    office: {type:String, require:true},
    salary: {type:Number, require:true},
});

module.exports = mongoose.model('Empleado', EmpleadoSchema);