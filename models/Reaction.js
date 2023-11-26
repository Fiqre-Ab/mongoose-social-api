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
    createdAt: {
    type: Date,
    default: Date.now,
  },
},
{
    toJSON:{getters:true},
    id:false,
});
module.exports =reactionsSchema;