const {Schema}=require("mongoose");


const reactionsSchema=new Schema({
   reactionId:{
     type:Schema.Types.ObjectId,
     default:()=>new mongoose.Types.ObjectId,

    },
    reactionBody:{
        type:String,
        require:true,
        maxlength:280,

    },
    username:{
        type:String,
        require:true,

    },
    createAt:{
        type:Date,
        default:Date.now,
        get:(timestamp)=>{
            return timestamp.toLocalSTring();
        },

    },
},
{
    toJSON:{getters:true},
    id:false,
});
module.exports =reactionsSchema;