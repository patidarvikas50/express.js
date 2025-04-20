const express = require("express");
const app  = express();
const port = 8000;

app.get("/",(req,res)=>{
   return res.send("Home Page")
})

app.get("/about",(req,res)=>{
    return res.send(`Hii ${req.query.name}`)
})

app.get("/contact",(req,res)=>{
    return res.send("Contact us " )
})

app.listen(port, ()=> console.log("Server Started"))


