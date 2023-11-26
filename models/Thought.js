const express = require("express");
const {Schema,model}=require("mongoose");
const reactionsSchema=require("./Reaction")
const thoughtSchema=new Schema({
thoughtText: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 280
  },
 createdAt: {
      type: Date,
      default: Date.now,
    },
 userName:{
    type:String,
    require:true
 },
 reactions:[reactionsSchema], 
 },
  {
    toJSON: { getters: true }, // Enable getters
    id: false, // Disable the virtual id field
  }
);
const Thought = model("Thought",thoughtSchema);

module.exports =Thought;