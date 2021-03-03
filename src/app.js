const express = require("express");
const morgan = require("morgan");

const movieRoutes = require("./routes/movies.routes");
const authRoutes = require("./routes/auth.routes");

const app = new express();
app.set("port", process.env.PORT || 4000);

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/movies", movieRoutes);
app.use("/api/auth", authRoutes);

module.exports = app;
