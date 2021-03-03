const mongoose = require("mongoose");

const uri =
  "mongodb+srv://RodolfoRB:qUfqwLE3kFjC@cluster0.4jy2c.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
mongoose
  .connect(uri, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify: false,
  })
  .then((db) => console.log("DB is connected"))
  .catch((err) => console.error(err));
module.exports = mongoose;
