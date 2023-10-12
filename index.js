const express = require("express");
const app = express();
const morgan = require("morgan");
const dotenv = require("dotenv");
const dbConfig = require("./config/mongoDB");
const routes = require("./routes/techSkillsRoutes.js");

dotenv.config();

const portNumber = process.env.PORT || 3116;

app.use(morgan("dev"));
app.use(express.json()); 
app.use(express.urlencoded({ extended: true })); 
app.use("/", routes) 

app.listen(portNumber, () => console.log(`Node Server run in http://127.0.0.1:${portNumber}`));
