const express = require("express");
const morgan = require("morgan");
const swaggerUi = require("swagger-ui-express");
const bodyParser = require("body-parser");
const methodOverride = require("method-override");
const errorMiddleware = require("./middleware/error.middleware");

const authRoutes = require("./routes/auth.routes");
const cityRoutes = require("./routes/cities.routes");
const movieRoutes = require("./routes/movies.routes");
const ticketRoutes = require("./routes/tickets.routes");

const swaggerDoc = require("./swagger.json");

const app = new express();
app.set("port", process.env.PORT || 4000);

app.use(morgan("dev"));
app.use(express.json());
app.use(methodOverride());
app.use(bodyParser.json());
app.use(errorMiddleware.logErrors);
app.use(errorMiddleware.clientErrorHandler);
app.use(errorMiddleware.errorHandler);
app.use(express.urlencoded({ extended: false }));

app.use("/api/auth", authRoutes);
app.use("/api/cities", cityRoutes);
app.use("/api/movies", movieRoutes);
app.use("/api/tickets", ticketRoutes);

var options = {
  explorer: true,
  swaggerOptions: {
    apis: ["./auth.routes.js"],
  },
};
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDoc, options));

module.exports = app;
