const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
// bcrypt is used for encypting our passwords

//creating the user schema
const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    isAdmin: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  {
    timestamps: true,
    // to track when this field was created in the database and when it was updated
  }
);

//this password encrypting function is acting as a MIDDLEWARE as after this the details have to be saved in the database.
// So we are using NEXT (tells that the current func is a middleware)

// will encrypt password everytime its saved
// means before saving- it is the functionality of bcrypt
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

//function to dcrypt the passwords
userSchema.methods.comparePass = async function (enteredPass) {
  return await bcrypt.compare(enteredPass, this.password); //this.password is the password that exists in the database
  //comparing the passwords- entered and that already exists using the compare function of bcrypt
};
const User = mongoose.model("user", userSchema);
//we are naming our model as user and inside of it we have our userSchema

module.exports = User;
