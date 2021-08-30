const express = require("express");
const dotenv =require("dotenv");
const morgan = require("morgan");
const cors = require("cors");
const connectDB= require("./config/connectDB");
const {notFound, errorHandler} =require("./middlewares/errorMiddleware")
const usersRoute =require("./routes/usersRoute");
const eventRoute =require("./routes/eventRoute");


dotenv.config();

const app = express();

connectDB();

//middlewares
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

//routes
app.use("/api/events", eventRoute)
app.use("/api/users", usersRoute)


//error middleware
app.use(notFound)
app.use(errorHandler)

//home route
app.get("/", function(req, res){
    res.send("<h1>WELCOME</h1>")
});

const PORT= process.env.PORT || 5003

//start server
app.listen(PORT, function(){
    console.log("server started on port 5003");
});