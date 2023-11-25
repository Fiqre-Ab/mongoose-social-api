    const express= require("express");
    const routes =require("./routes");
    const db=require("./config/connection");
    const PORT=process.env.PORT||3001;

    const app = express();

    app.use(express.urlencoded({extended:true}));
    app.use(express.json());
    app.use(routes);
    db.on("err",(err)=>{
      console.error("err the connection failed",err);
    });

    db.once("open",()=>{
        app.listen(PORT,()=>{
        console.log(`local host is http//localhost:${PORT}`);
    })});