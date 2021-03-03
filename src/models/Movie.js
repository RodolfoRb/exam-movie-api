const { Schema, model } = require("mongoose");
const City = require('./City');

const movieSchema = new Schema(
  {
    name: { type: "string", required: true },
    code: { type: "string", required: true },
    description: { type: "string", required: true },
    city: { type: Schema.Types.ObjectId, ref: 'city', required: true  }
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = model("movie", movieSchema);
