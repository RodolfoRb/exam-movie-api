const { Schema, model } = require("mongoose");

const movieSchema = new Schema(
  {
    name: { type: "string", required: true },
    description: { type: "string", required: true },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = model("movie", movieSchema);
