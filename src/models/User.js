const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt"),
  SALT_WORK_FACTOR = 10;

const userSchema = new Schema(
  {
    username: { type: "string", required: true },
    password: { type: "string", required: true },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);
userSchema.pre("save", function(next) {
  var user = this;
  if (!user.isModified("password")) return next();
  bcrypt.genSalt(SALT_WORK_FACTOR, function (err, salt) {
    if (err) return next(err);
    bcrypt.hash(user.password, salt, function (err, hash) {
      if (err) return next(err);
      user.password = hash;
      next();
    });
  });
});

userSchema.methods.comparePassword = function (candidatePassword) {
  let promise = new Promise((resolve, reject) => {
    bcrypt.compare(candidatePassword, this.password, function (err, isMatch) {
      if (err) {
        reject(new Error(err));
      } else {
        resolve(isMatch);
      }
    });
  });
  return promise;
};

module.exports = model("user", userSchema);
