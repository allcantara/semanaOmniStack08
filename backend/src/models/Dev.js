const { Schema, model } = require('mongoose');

const DevSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    user: {
        type: String,
        required: true
    },
    bio: String,
    avatar: {
        type: String,
        required: true
    },
    likes: [{ 
        type: Schema.Types.ObjectId,
        ref: 'Dev',
     }],
    deslikes:[{
        type: Schema.Types.ObjectId,
        ref: 'Dev',
    }],
}, {
    // Armazena automaticamente a data da criação e a data da última alteração no banco
    timestamps: true,
});

module.exports = model('Dev', DevSchema);