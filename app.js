const express = require("express");
const path = require("path");
const routes = require("./routes/routes");

const app = express();

app.set("view engine","ejs");
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,"public")));

app.use("/",routes);

app.listen(3000,()=>{
    console.log("Server running on http://localhost:3000");
});