const mongoose = require('mongoose');

const companySchema = new mongoose.Schema({

    name: {
        type: String,
        required: [true, 'Pas de nom'],
    },
    siret: {
        type: String,
        required: [true, 'Pas de siret'],
    },
    mail: {
        type: String,
        required: [true, 'Pas de mail'],
    },
    boss: {
        type: String,
        required: [true, 'Pas de boss'],
    },
    password: {
        type: String,
        required: [true, 'Pas de password'],
    },
    employees: {
        type: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'employees'
        }
        ]
    }
});


const companyModel = mongoose.model('companies', companySchema);

module.exports = companyModel;

