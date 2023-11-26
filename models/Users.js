const {Schema,model}=require("mongoose");


const userSchema= new Schema({
  username:{
    type:String,
    require:true,
    unique:true,
    trim:true,
  },
  email:{
    type:String,
    require:true,
    unique:true,
    match:/^\S+@\S+\.\S+$/, // Regex for email: non-whitespace, '@', non-whitespace, '.', non-whitespace

  },
  thoughts: [
      {
        type: Schema.Types.ObjectId,
        ref: "Thought",
      },
    ],
    friends: [
      {
        type: Schema.Types.ObjectId,
        ref: "Users",
      },
    ],


},
 {
  toJSON: { virtuals: true }, // virtuals are included in toJSON
  toObject: { virtuals: true }, //  in toObject as well
});

userSchema.virtual("friendCount").get(function(){
  return this.friends.length;
});

const Users = model("Users",userSchema);

module.exports = Users;
