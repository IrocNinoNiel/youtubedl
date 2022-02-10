const ytdl = require("ytdl-core");
const fs = require("fs");

const express = require("express");
const { success, error } = require("consola");
const http = require('http');

// Bring in the app constants
const { PORT } = require("./config");

// Initialize the application
const app = express();


// Initialize server
const server = http.createServer(app);

// Middlewares
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

// User Router Middleware
app.use("/api/youtubedl", require("./routes/downloader"));

const startApp = async () => {
  try {

    // Start Listenting for the server on PORT
    server.listen(PORT, () =>
      success({ message: `Server started on PORT ${PORT}`, badge: true })
    );

  } catch (err) {
    error({
      message:err,
      badge: true
    });
    startApp();
  }
};

startApp();
