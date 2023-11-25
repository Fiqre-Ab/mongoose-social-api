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
  thoughts:{
    type:Schema.Types.ObjectId,
    ref:"Thought"
  },
  friends:{
    type:Schema.Types.ObjectId,
    ref:"User"
  }//virtual friendCount should have a function to calculate the length of FRiend array



});

userSchema.virtual("friendCount").get(function(){
  return this.friends.length;
});

const Users = model("Users",userSchema);

module.exports = Users;
