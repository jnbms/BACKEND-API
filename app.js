import express from "express";
import path from "path";

// 1.GETTER & SETTER
// app.set("variable","value");
// app.get("variable") == "value"

// 2.listen : localhost:PORT의 URL에서 응답
// 3.USE - Mounts the specified middleware function or functions at the specified path

const port = process.env.PORT || 1234;
const app = express();

    app.use((req,res,next)=> {console.log(Date.now());
        
        res.send("IS IT?");
        next();});

app.get("/",(req,res)=>{
    res.send("HELLO world")
})

app.listen(port,() => console.log("listenning.."));
