

const express = require("express");
const app = express();

//port find 
require("dotenv").config();
const PORT = process.env.PORT || 3000;

//middleware
app.use(express.json());

//routes 
const blog = require("./routes/blog")
//mount
app.use("/api/v1", blog);

//connect with db 
const connectWithDb = require("./config/database");
connectWithDb();

//start the server
app.listen(PORT, () => {
    console.log(`App is started at Port no ${PORT}`);
})

//default routes
app.get("/", (req,res) => {
    res.send(`<h1>This is my homePage baby...${2+2}</h1> `)
})