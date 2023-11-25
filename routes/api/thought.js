const router = require("express").Router();

const {
    getSingleThought,
    getAllThought,
    createThought,
    updateThought,
    deleteThought,
    createReaction,
    removeReaction,


    

}=require("../../controllers/thoughtController");


router.route("/").get(getAllThought).post(createThought);
router.route("/:thoughtId").get(getSingleThought).delete(deleteThought).put(updateThought);
router.route("/:thoughtId/reactions").post(createReaction);
router.route("/:thoughtId/reactions/:reactionId").delete(removeReaction)


module.exports = router;