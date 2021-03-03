const { Schema, model } = require("mongoose");

const ticketSchema = new Schema(
  {
    owner: { type: Schema.Types.ObjectId, ref: 'user', required: true  },
    movie: { type: Schema.Types.ObjectId, ref: 'movie', required: true  },
    bookDate: { type: Schema.Types.Date, required: true  }
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = model("ticket", ticketSchema);
