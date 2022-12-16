const express = require("express");
const fileUpload = require("express-fileupload");
const cookieParser = require("cookie-parser");
const app = express();
const port = 5000;

app.use(express.json());
app.use(cookieParser());
app.use(fileUpload());

const apiRoutes = require("./routes/apiRoutes");

app.get("/", async (req, res, next) => {
  res.json({
    message: "API Running....",
  });
});

const connectDB = require("./config/db");
connectDB();
app.use("/api", apiRoutes);

app.use((error, req, res, next) => {
  if (process.env.NODE_ENV === "development") {
    console.error(error);
  }
  next(error);
});

app.use((err, req, res, next) => {
  if (process.env.NODE_ENV === "development") {
    res.status(500).json({
      message: err.message,
      stack: err.stack,
    });
  } else {
    res.status(500).json({
      message: error.message,
    });
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
