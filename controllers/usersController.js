// Import necessary modules
const express = require('express');
const { ObjectId } = require('mongoose').Types;
const router = express.Router();
const {Users,Thought}=require("../models");
  

module.exports={
    // GET all users
    async  getAllUsers(req,res){
        try{
            const users= await Users.find()
             .populate({ path: "thoughts", select: "-__v" })
             .populate({ path: "friends", select: "-__v" });
             console.log(users)
            res.status(200).json(users);
        }catch(err) {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error', details: err.message });
}
    },
    // GET a single user by its _id and populated thought and friend data
  async getSingleUser(req, res) {
try{
    const single_user=  await  Users.findOne({ _id: req.params.userId })
        .populate("thoughts")
        .populate("friends")
        .select("-__v")
        if(!single_user){
            console.error("No user found with that id")
        }
        else{
            res.status(200).json(single_user);
        }
    } catch(err){
    res.status(500).json({ error: 'Internal Server Error' });
}
  },
  // Create a new user
async  createUser(req,res){
    try{
   const newuser = await Users.create(req.body);
    res.status(201).json(newuser);

    }catch(err){
       res.status(400).res.json("error bad request");

    }
},
//update a user by its _id
async  updateUser(req,res){
    try{
       
  const user = await Users.findByIdAndUpdate(    
        { _id: req.params.userId },
        { $set: req.body },
        { runValidators: true},
        {new: true });
          if (!user) {
        return res.status(404).json({ message: "no user with this id!" });
      }
   res.status(200).json(user)
  }catch(err){
    res.status(400).json({error:"Bad request",details:err.message})

    }
},
// DELETE to remove user by its _id
async  deleteUser(req,res){
try{
const deleteUser = await Users.findOneAndDelete({ _id: req.params.userId });
// Remove a user's associated thoughts when deleted
   if (!deleteUser) {
        return res.status(404).json({ message: "No user with that ID" });
  }
  if(deleteUser.thoughts!=null){
  await Thought.deleteMany({ _id: { $in: deleteUser.thoughts } });
  }
    return res.status(200).json({
        message: "User and associated thoughts and reactions deleted!",
      });
}
catch(err){
res.status(400).json("Bad request")
}
},

// add a new friend to a user's friend list
 async addFriend(req, res) {
    try {
      const friend = await Users.findOneAndUpdate(
        { _id: req.params.userId },
        { $addToSet: { friends: req.params.friendId } },
        { runValidators: true, new: true }
      );

      if (!friend) {
        return res.status(404).json({ message: "No user with that ID" });
      }

      return res.status(200).json(friend);
    } catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  },

//  remove a friend from a user's friend list
async removeFriend(req,res){
    try{
        const remove= await Users.findByIdAndUpdate(
            {_id:req.params.userId},
            {$pull:{friends:req.params.friendId}},
             { runValidators: true, new: true });
                if (!remove) {
        return res.status(404).json({ message: "error in ID" });
      }

        res.json(remove)
    }catch(err){
        res.status(400).json({ error: 'Bad Request' })
    }

}
}

// module.exports = router;
