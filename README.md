# Mongoose Social API

## Description

Mongoose Social API is a backend application for a social network web application. It provides API routes for users to share their thoughts, react to friends' thoughts, and manage their friend list. The application uses Express.js for routing, a MongoDB database for data storage, and the Mongoose ODM.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Models](#models)
- [API Routes](#api-routes)
- [Walkthrough Video](#walkthrough-video)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/mongoose-social-api.git

Install dependencies:
cd mongoose-social-api
npm install

Set up your MongoDB database. Make sure MongoDB is installed locally.
# Example command to start MongoDB
mongod
Update the connection string in the application accordingly.
Usage
Start the server:
npm start

Access the API routes using a tool like Insomnia or Postman.

Models
User Model
username: String, Unique, Required, Trimmed
email: String, Required, Unique, Must match a valid email address
thoughts: Array of _id values referencing the Thought model
friends: Array of _id values referencing the User model (self-reference)
Thought Model
thoughtText: String, Required, Must be between 1 and 280 characters
createdAt: Date, Set default value to the current timestamp
username: String, Required
reactions: Array of nested documents created with the Reaction schema
Reaction Schema
reactionId: Mongoose's ObjectId data type, Default value is set to a new ObjectId
reactionBody: String, Required, 280 character maximum
username: String, Required
createdAt: Date, Set default value to the current timestamp
API Routes
/api/users: CRUD operations for users
/api/users/:userId/friends/:friendId: Manage user's friend list
/api/thoughts: CRUD operations for thoughts
/api/thoughts/:thoughtId/reactions: Manage reactions to thoughts
Walkthrough Video
Link to Walkthrough Video

Include a link to your walkthrough video that demonstrates the functionality of your social media API.

Technologies Used
Express.js
MongoDB
Mongoose
Contributing
If you'd like to contribute to this project, please fork the repository and create a pull request.

License
This project is licensed under the MIT License.