const express = require("express");
const apiRoutes = require("./routes/apiRoutes");
const htmlRoutes = require("./routes/htmlRoutes");
//the express server used with node and is created.
const app = express();
// the port to use via http:localhost 3001 
const PORT = process.env.PORT || 3001
//This may be packages to get the correct file path for our html. Further testing is needed.
const router = require('express').Router();
const path = require("path");

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static("public"));
app.use("/api",apiRoutes);
app.use("/",htmlRoutes);
// here is the listener
app.listen(PORT,()=>console.log(`listening on port; ${PORT}`));