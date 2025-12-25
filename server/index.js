//express web application
const express = require("express");
const app = express();

// middlewares
// app.use(cors());
app.use(express.urlencoded());
app.use(express.json());

//importing routes
const postRouter = require("./routes/postRoutes.js");
app.use("/api/posts", postRouter);

//db connection
const { dbConnection } = require("./config/db.js");
dbConnection();

//reading the .env file variables
require("dotenv").config();
const PORT = process.env.PORT;

//server
app.listen(PORT, (err) => {
  if (!err) {
    console.log("server started on PORT 5000");
  } else {
    console.log("Error starting server");
  }
});
