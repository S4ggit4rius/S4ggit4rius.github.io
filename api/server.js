const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

const userRouter = require("./routes/userRoutes");
const bodyParser = require("body-parser");

dotenv.config({
  path: "./config.env",
});
const app = express();

app.use(cors());

app.use(bodyParser.json())

app.options("*", cors());

app.use("/users", userRouter);

app.use((err, req, res, next) => {
  console.log(err.stack);
  console.log(err.name);
  console.log(err.code);

  res.status(500).json({
    message: "Something went wrong",
  });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server running on PORT ${PORT}`));