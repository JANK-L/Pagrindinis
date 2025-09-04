import mongoose from "mongoose";
import bcrypt from "bcrypt";
import validator from "validator";

const Schema = mongoose.Schema;
const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

// signup metodas
userSchema.statics.signup = async function (email, password) {
  if (!email || !password) {
    throw Error("Uzpildykite privalomus laukus.");
  }
  if (!validator.isEmail(email)) {
    throw Error("El. pastas nera tinkamas.");
  }
  if (!validator.isStrongPassword(password)) {
    throw Error("Slaptazodis persilpnas.");
  }

  const exists = await this.findOne({ email });
  if (exists) {
    throw Error("El. pastas jau naudojamas");
  }

  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);
  const user = await this.create({ email, password: hash });
  return user;
};

// login metodas

userSchema.statics.login = async function (email, password) {
  if (!email || !password) {
    throw Error("Uzpildykite privalomus laukus.");
  }

  const user = await this.findOne({ email });
  if (!user) {
    throw Error("El. pastas neteisingas");
  }

  const match = await bcrypt.compare(password, user.password);
  if (!match) {
    throw Error("Neteisingas slaptazodis");
  }

  return user;
};

export default mongoose.model("User", userSchema);
