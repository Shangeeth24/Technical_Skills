const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const connectToDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB connection - successful");
  } catch (error) {
    console.log("Error in MongoDB connection", error);
    process.exit(1);
  }
};

connectToDatabase();

module.exports = mongoose;
