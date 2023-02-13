const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({

    name: {
        type: String,
        required: [true, 'Pas de nom'],
    },
    firstname: {
        type: String,
        required: [true, 'Pas de prénom'],
    },
    job: {
        type: String,
        required: [true, 'Pas de fonction'],
    },
    photo: {
        type: String,
        required: [true, 'Pas de photo'],
    },
    blame: {
        type: Number,
        required: [true, 'Pas de blame'],
    }
});


const employeeModel = mongoose.model('employees', employeeSchema);

module.exports = employeeModel;
