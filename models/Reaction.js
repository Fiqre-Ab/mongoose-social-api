const { Schema, Types } = require('mongoose');


const reactionsSchema=new Schema({
   reactionId:{
     type:Schema.Types.ObjectId,
     default: () => new Types.ObjectId(),

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
//Exports
module.exports = reactionsSchema;