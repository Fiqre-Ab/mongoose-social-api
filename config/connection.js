const {connect,connection}= require ("mongoose");


const connectString=process.env.MONGODB_URL ||"mongodb://127.0.0.1:27017/mongooseSocialApi";


connect(connectString);





module.exports =connection;