const {model,Schema}= require('mongoose');

require('../models/user');

const taskSchema = new Schema({
    titulo:{
        type:String,
        required:true
    },
    descripcion:{
        type:String,
        required:true
    },
    isActive: {
        type: Boolean,
        default:true
    },
    userId: {
        type: Schema.Types.ObjectId, ref: 'user'
    }
    },{
        timestamps:true,
        versionKey:false   
    }
);


module.exports = model("task", taskSchema);