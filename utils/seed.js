// Imports
const { Users, Thought, Reaction } = require("../models");
const mongoose = require("mongoose");
const connection = require("../config/connection");

// Seed data
const users = [
  {
    username: "Cristal",
    email: "inaliaashanti@Gmail.com",
    thought: [],
  },
  
];

// Connects to server
connection.once("open", async () => {
  console.log("connected");

  // Drop existing users
  await Users.deleteMany({});

  //  seed data to database
  await Users.insertMany(users);

  console.table(users);
  console.info("Seeding complete! 🌱");
  process.exit(0);
});
