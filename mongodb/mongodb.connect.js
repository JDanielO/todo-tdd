const mongoose = require("mongoose");
const keys = require("../config/keys");

async function connect() {
  try {
    await mongoose.connect(keys.mongoURI, { useNewUrlParser: true });
  } catch (err) {
    console.log("Error Connecting to mongodb");
    console.log(err);
  }
  const db = mongoose.connection;
  db.on("error", (error) => console.log(error));
  db.once("open", () => console.log("Connected to Database"));
}

module.exports = { connect };
