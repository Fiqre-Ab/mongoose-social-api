// Imports
const router = require("express").Router();
const userRoutes = require("./users");
const thoughtRoutes = require("./thought");

// Middleware
router.use("/users", userRoutes);
router.use("/thoughts", thoughtRoutes);

// Exports
module.exports = router;