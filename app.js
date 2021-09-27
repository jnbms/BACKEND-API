import express from "express";
import path from "path";

// 1.GETTER & SETTER
// app.set("variable","value");
// app.get("variable") == "value"

// 2.listen : localhost:PORT의 URL에서 응답
// 3.USE - Mounts the specified middleware function or functions at the specified path
const port = process.env.PORT || 1234;
const app = express();

const logger1 = (res,req,next) => {console.log("logger 1"); next();};
const logger2 = (res,req,next) => {console.log("logger 2"); next();};

app.get("/",logger1,logger2,(req,res)=>{
    res.send("NICE MIDDLEWARE");
})


app.listen(port,() => console.log("listenning.."));
