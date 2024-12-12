const express = require("express");
const app = express();
const calculatorRoutes = require("./routes/calculatorRoutes");
const extraRoutes = require("./routes/extraRoutes");
const friendRoutes = require("./routes/friendRoutes");

const port = 3000;

app.use(express.static("public"));

app.use("/calculator", calculatorRoutes);
app.use("/extra", extraRoutes);
app.use("/friends", friendRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
