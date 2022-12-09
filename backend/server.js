const express = require("express");
const app = express();
const port = 3000;
app.use(express.json());
const apiRoutes = require("./routes/apiRoutes");

app.get("/", async (req, res, next) => {
  res.json({
    message: "API Running....",
  });
});

const connectDB = require("./config/db");
connectDB();
app.use("/api", apiRoutes);

app.use((err, req, res, next) => {
  res.status(500).json({
    message: err.message,
    stack: err.stack,
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
