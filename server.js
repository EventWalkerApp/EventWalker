const express = require("express");
const app = express();

//home route
app.get("/", function(req, res){
    res.render("WELCOME")
});


//start server
app.listen(5000, function(){
    console.log("server started on port 5000");
});