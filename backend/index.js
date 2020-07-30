const express = require("express");
const morgan = require("morgan");
const multer = require("multer");
const path = require("path");

//inicializo
const app = express();

//configuraciones
app.set("port",3000);

//middlewares
app.use(morgan("dev"));

const storage =  multer.diskStorage({
   destination : path.join(__dirname,"public/uploads"),
   filename(req , file , cb){
     cb(null,new Date().getTime()) + path.extname(file.originalname);
   } 
});
app.use(multer({storage}).single("image"));

app.use(express.urlencoded({extended : false}));

//iniciar server
app.listen(app.get("port") , ()=>{
  console.log("Server en puerto "+app.get("port"));
});

