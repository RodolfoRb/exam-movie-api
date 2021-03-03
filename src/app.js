const express = require("express");
const morgan = require("morgan");
const swaggerUi = require("swagger-ui-express");

const movieRoutes = require("./routes/movies.routes");
const authRoutes = require("./routes/auth.routes");

const swaggerDoc = require("./swagger.json");

const app = new express();
app.set("port", process.env.PORT || 4000);

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/movies", movieRoutes);
app.use("/api/auth", authRoutes);

var options = {
  explorer: true,
  swaggerOptions: {
    "apis": [
      "./auth.routes.js"
    ]
  }
};
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDoc, options));

module.exports = app;
