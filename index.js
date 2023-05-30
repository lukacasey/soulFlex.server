// dependencies
require("dotenv").config();
const cors = require("cors");
const express = require("express");
const mongoose = require("mongoose");

// defining routes
const appointmentsRoutes = require("./routes/appointments");

const app = express();

app.use(cors());

app.use(express.json());

// logs the path (req.path) and the HTTP method (req.method) of each request. Useful for debugging.
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// routes
app.use("/api/appointments", appointmentsRoutes);

// connect to db
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    // listen for requests
    app.listen(process.env.PORT, () => {
      console.log("connected to db and listening on port " + process.env.PORT);
    });
  })
  .catch((error) => {
    console.log(error);
  });
