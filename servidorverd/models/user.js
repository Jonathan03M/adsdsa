const { model, Schema } = require('mongoose');

const userSchema = new Schema({
    usuario:{
        type: String,
        required: true,
        unique: true
    },
    contraseña:{
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
    },
    isActive:{
        type: Boolean,
        default: true
    },
    roles: [{
        ref: "roles",
        type: Schema.Types.ObjectId
    }]
},{
    timestamps:true,
    versionKey:false
})



module.exports = model('user', userSchema);