const { Schema, model } = require("mongoose");

const ticketSchema = new Schema(
  {
    owner: { type: Schema.Types.ObjectId, ref: 'User', required: true  },
    movie: { type: Schema.Types.ObjectId, ref: 'Movie', required: true  },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = model("ticket", ticketSchema);
