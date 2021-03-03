const { Schema, model } = require("mongoose");

const citySchema = new Schema(
  {
    name: { type: "string", required: true },
    code: { type: "string", required: true }
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = model("city", citySchema);
