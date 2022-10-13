const {model,Schema}= require('mongoose');

const rolSchema = new Schema({
    usuario:{
        type:String,
        required:true
    },
    },{
        timestamps:true,
        versionKey:false   
    }
);


module.exports = model("roles", rolSchema);