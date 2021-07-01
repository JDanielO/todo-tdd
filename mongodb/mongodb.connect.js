const mongoose = require("mongoose");

async function connect() {
  try {
    await mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true });
  } catch (err) {
    console.log("Error Connecting to mongodb");
    console.log(err);
  }
  const db = mongoose.connection;
  db.on("error", (error) => console.log(error));
  db.once("open", () => console.log("Connected to Database"));
}

module.exports = { connect };
