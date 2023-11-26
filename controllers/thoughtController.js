// Import necessary modules
const {Thought,Users}=require("../models");


module.exports={
    // GET all thought
    async getAllThought(req,res){
        try{
            const thoughts= await Thought.find()
              console.log(thoughts); // Check the retrieved data
            res.status(200).json(thoughts);
        }catch(err) {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error', details: err.message });
}
    },
    // GET a single thought by its _id 
  async  getSingleThought(req, res) {
try{
    const single_thought=  await  Thought.findOne({ _id: req.params.thoughtId })
        if(!single_thought){
            console.error("No thought found with that id")
        }
        else{
            res.status(200).json(single_thought);
        }
    } catch(err){
    res.status(500).json({ error: 'Internal Server Error' });
}
  },
  // Create a new thought
  async createThought(req, res) {
    try {
      const thought = await Thought.create(req.body);

      const user = await Users.findByIdAndUpdate(
      req.body.userId,
      { $addToSet: { thoughts: thought._id } },
      { runValidators: true, new: true }
    );

      return res.status(200).json({ thought, user });
    } catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  },
// Update a thought by its _id
async  updateThought(req, res) {
    try {
        const thought = await Thought.findByIdAndUpdate(
            req.params.thoughtId,
            {$set: req.body},
            {runValidators: true, new: true}
        );

        if (!thought) {
            return res.status(404).json({ message: "No thought with this id!" });
        } else {
            res.json(thought);
        }
    } catch (err) {
        res.status(400).json("Bad request");
    }
},

    // DELETE to remove thought by its _id
    async deleteThought(req, res) {
        try {
            const remove = await Thought.findOneAndDelete({
        _id: req.params.thoughtId,
      });
         if(!remove){
            res.json({message:"No thought removed"})
            }else{
             res.json(remove);
            }
       
        } catch (err) {
            res.status(400).json("Bad request");
        }
    },

    // Add a new reaction to a thought
    async createReaction(req, res) {
        try {
            const thought = await Thought.findByIdAndUpdate(
               { _id:req.params.thoughtId},
                { $addToSet: { reactions: req.body } },
                {runValidators:true},
                { new: true }
            );
             if (!thought) {
        return res.status(404).json({ message: "No thought with that ID" });
      }
            res.json(thought);
        } catch (err) {
            res.status(400).json({err:"error bad request",details:err.message});
        }
    },

    // Remove a reaction from a thought
    async removeReaction(req, res) {
        try {
            const remove = await Thought.findByIdAndUpdate(
                {_id:req.params.thoughtId},
                { $pull: { reactions: { _id: req.params.reactionId } } },
                  { runValidators: true},
                { new: true }
            );
            res.json(remove);
        } catch (err) {
            res.status(400).json({ error: 'Bad Request' });
        }
    }
}

// module.exports = router;
